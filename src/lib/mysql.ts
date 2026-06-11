import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

// MySQL configuration with the user's provided credentials as default values
const dbConfig = {
  host: process.env.DATABASE_HOST || "193.203.168.164",
  port: parseInt(process.env.DATABASE_PORT || "3306", 10),
  user: process.env.DATABASE_USERNAME || "u903092191_strapi",
  password: process.env.DATABASE_PASSWORD || "fcIx0Wj6p3d1",
  database: process.env.DATABASE_NAME || "u903092191_strapi",
  ssl: process.env.DATABASE_SSL === "false" ? undefined : { rejectUnauthorized: false },
  connectionLimit: 5,
};

let pool: mysql.Pool | null = null;
let dbEnabled = false;

export async function initDatabase() {
  try {
    console.log(`Connecting to MySQL database at ${dbConfig.host}:${dbConfig.port}...`);
    pool = mysql.createPool(dbConfig);
    
    // Test connection
    const connection = await pool.getConnection();
    console.log("Successfully connected to MySQL database!");
    connection.release();
    dbEnabled = true;

    // Build tables if they do not exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cms_contents (
        filename VARCHAR(100) PRIMARY KEY,
        content LONGTEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS cms_media (
        name VARCHAR(255) PRIMARY KEY,
        url VARCHAR(500) NOT NULL,
        size INT NOT NULL,
        format VARCHAR(50) NOT NULL,
        base64_data LONGTEXT NOT NULL,
        mtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    console.log("MySQL database CMS structures verified successfully!");
  } catch (err: any) {
    console.error("MySQL Database connection failure or query error:", err.message);
    console.log("Falling back gracefully to local physical files.");
    dbEnabled = false;
    pool = null;
  }
}

export function isDbActive(): boolean {
  return dbEnabled && pool !== null;
}

/**
 * Loads content from database. If missing from DB, falls back to reading local file and seeds DB.
 */
export async function loadContent(filename: string, contentDir: string): Promise<any> {
  const localPath = path.join(contentDir, `${filename}.json`);
  let localData: any = null;

  try {
    if (fs.existsSync(localPath)) {
      localData = JSON.parse(fs.readFileSync(localPath, "utf-8"));
    }
  } catch (err) {
    console.error(`Error reading local fallback file ${filename}:`, err);
  }

  if (!isDbActive() || !pool) {
    if (localData) return localData;
    throw new Error(`Content not found and DB inactive: ${filename}`);
  }

  try {
    const [rows]: [any[], any] = await pool.query(
      "SELECT content FROM cms_contents WHERE filename = ?",
      [filename]
    );

    if (rows && rows.length > 0) {
      return JSON.parse(rows[0].content);
    }

    // Seed database with local fallback if database doesn't have it yet
    if (localData) {
      await saveContent(filename, localData, contentDir);
      return localData;
    }

    throw new Error(`Content node ${filename} not found in DB or filesystem`);
  } catch (err: any) {
    console.error(`Database error loading content ${filename}, using disk:`, err.message);
    if (localData) return localData;
    throw err;
  }
}

/**
 * Saves content to database and attempts local filesystem write
 */
export async function saveContent(filename: string, content: any, contentDir: string): Promise<void> {
  const contentStr = JSON.stringify(content, null, 2);

  // 1. Try DB save
  if (isDbActive() && pool) {
    try {
      await pool.query(
        "INSERT INTO cms_contents (filename, content) VALUES (?, ?) ON DUPLICATE KEY UPDATE content = ?",
        [filename, contentStr, contentStr]
      );
      console.log(`Saved content node ${filename} inside MySQL DB`);
    } catch (err: any) {
      console.error(`Failed to save content ${filename} inside MySQL DB:`, err.message);
    }
  }

  // 2. Try disk save (fail silently if read-only on their production server)
  try {
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }
    const localPath = path.join(contentDir, `${filename}.json`);
    fs.writeFileSync(localPath, contentStr, "utf-8");
  } catch (err: any) {
    console.warn(`Local write skipped or failed (possibly read-only env) for ${filename}:`, err.message);
  }
}

/**
 * Lists all uploaded media assets
 */
export async function listMedia(uploadsDir: string): Promise<any[]> {
  // Let's get files list. We merge files from database and physical disk.
  const assetsMap = new Map<string, any>();

  // 1. Load from DB
  if (isDbActive() && pool) {
    try {
      const [rows]: [any[], any] = await pool.query(
        "SELECT name, url, size, format, mtime FROM cms_media ORDER BY mtime DESC"
      );
      
      for (const row of rows) {
        assetsMap.set(row.name, {
          name: row.name,
          url: row.url,
          size: row.size,
          mtime: new Date(row.mtime),
          format: row.format,
        });
      }
    } catch (err: any) {
      console.error("Failed to read media catalog from MySQL DB:", err.message);
    }
  }

  // 2. Load from disk
  try {
    if (fs.existsSync(uploadsDir)) {
      const files = fs.readdirSync(uploadsDir);
      for (const filename of files) {
        const filePath = path.join(uploadsDir, filename);
        const stats = fs.statSync(filePath);
        const ext = path.extname(filename).toLowerCase().replace(".", "");
        
        if (!assetsMap.has(filename)) {
          assetsMap.set(filename, {
            name: filename,
            url: `/uploads/${filename}`,
            size: stats.size,
            mtime: stats.mtime,
            format: ["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(ext) ? "image" : "file",
          });
        }
      }
    }
  } catch (err: any) {
    console.error("Failed to read local files in uploads directory:", err.message);
  }

  const result = Array.from(assetsMap.values());
  result.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
  return result;
}

/**
 * Uploads a media asset to database and disk
 */
export async function uploadMedia(name: string, url: string, size: number, format: string, base64: string, uploadsDir: string): Promise<any> {
  // 1. Save in MySQL DB
  if (isDbActive() && pool) {
    try {
      await pool.query(
        "INSERT INTO cms_media (name, url, size, format, base64_data) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE url = ?, size = ?, format = ?, base64_data = ?",
        [name, url, size, format, base64, url, size, format, base64]
      );
      console.log(`Saved media metadata & base64 content inside MySQL: ${name}`);
    } catch (err: any) {
      console.error(`Failed to store media ${name} in MySQL DB:`, err.message);
    }
  }

  // 2. Save on disk (optional fallback)
  try {
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    const cleanImagePath = path.join(uploadsDir, name);
    
    // Extract base64 buffer
    const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let buffer: Buffer;
    if (matches && matches.length === 3) {
      buffer = Buffer.from(matches[2], "base64");
    } else {
      buffer = Buffer.from(base64, "base64");
    }

    fs.writeFileSync(cleanImagePath, buffer);
  } catch (err: any) {
    console.warn(`Local uploads write skipped or failed for ${name}:`, err.message);
  }

  return { name, url, size, format };
}

/**
 * Retrieves dynamic image content from DB by name
 */
export async function getMediaContent(name: string): Promise<{ base64: string; format: string } | null> {
  if (!isDbActive() || !pool) return null;

  try {
    const [rows]: [any[], any] = await pool.query(
      "SELECT base64_data, format FROM cms_media WHERE name = ?",
      [name]
    );

    if (rows && rows.length > 0) {
      return {
        base64: rows[0].base64_data,
        format: rows[0].format,
      };
    }
  } catch (err: any) {
    console.error(`Failed reading media content ${name} from MySQL DB:`, err.message);
  }
  return null;
}

/**
 * Purges media asset
 */
export async function deleteMedia(name: string, uploadsDir: string): Promise<boolean> {
  let deletedAny = false;

  // 1. Delete from MySQL
  if (isDbActive() && pool) {
    try {
      const [result]: any = await pool.query("DELETE FROM cms_media WHERE name = ?", [name]);
      if (result && result.affectedRows > 0) {
        deletedAny = true;
      }
    } catch (err: any) {
      console.error(`Failed to purge media ${name} from MySQL DB:`, err.message);
    }
  }

  // 2. Delete from disk
  try {
    const filePath = path.join(uploadsDir, name);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      deletedAny = true;
    }
  } catch (err: any) {
    console.warn(`Filesystem media unlink failed for ${name}:`, err.message);
  }

  return deletedAny;
}
