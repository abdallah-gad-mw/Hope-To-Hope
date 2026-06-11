import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser configurations
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  const contentDir = path.join(process.cwd(), "src", "content");
  const uploadsDir = path.join(process.cwd(), "public", "uploads");

  // Create uploads directory if it does not exist
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // API to list uploaded assets under Media Library
  app.get("/api/media", (req, res) => {
    try {
      if (!fs.existsSync(uploadsDir)) {
        return res.json([]);
      }
      const files = fs.readdirSync(uploadsDir).map((filename) => {
        const filePath = path.join(uploadsDir, filename);
        const stats = fs.statSync(filePath);
        const ext = path.extname(filename).toLowerCase().replace(".", "");
        return {
          name: filename,
          url: `/uploads/${filename}`,
          size: stats.size,
          mtime: stats.mtime,
          format: ["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(ext) ? "image" : "file",
        };
      });
      // Sort newest first
      files.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
      return res.json(files);
    } catch (e: any) {
      return res.status(500).json({ error: e.message || "Failed reading media storage" });
    }
  });

  // API to upload media file (base64)
  app.post("/api/media/upload", (req, res) => {
    try {
      const { name, base64 } = req.body;
      if (!name || !base64) {
        return res.status(400).json({ error: "Missing file name or file content payload" });
      }

      // Sanitize filename to prevent directory traversal
      const cleanName = name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const ext = path.extname(cleanName).toLowerCase();
      const baseName = path.basename(cleanName, ext);
      
      // Prevent duplicates from overwriting by appending a unique timestamp
      const uniqueName = `${baseName}_${Date.now()}${ext}`;
      const filePath = path.join(uploadsDir, uniqueName);

      // Extract raw base64 data matching standard data URI regex schemas
      const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      let buffer: Buffer;

      if (matches && matches.length === 3) {
        buffer = Buffer.from(matches[2], "base64");
      } else {
        buffer = Buffer.from(base64, "base64");
      }

      fs.writeFileSync(filePath, buffer);

      return res.json({
        success: true,
        name: uniqueName,
        url: `/uploads/${uniqueName}`,
        size: buffer.length,
      });
    } catch (e: any) {
      return res.status(500).json({ error: e.message || "Upload process failed" });
    }
  });

  // API to delete media record
  app.delete("/api/media/:filename", (req, res) => {
    try {
      const { filename } = req.params;
      if (filename.includes("..") || filename.includes("/")) {
        return res.status(400).json({ error: "Invalid path reference" });
      }

      const filePath = path.join(uploadsDir, filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return res.json({ success: true, message: "Asset successfully purged" });
      } else {
        return res.status(404).json({ error: "Target asset not found in storage directory" });
      }
    } catch (e: any) {
      return res.status(500).json({ error: e.message || "Failed purging target layout asset" });
    }
  });

  // API to retrieve single content node
  app.get("/api/content/:filename", (req, res) => {
    try {
      const { filename } = req.params;
      if (filename.includes("..") || filename.includes("/")) {
        return res.status(400).json({ error: "Access denied" });
      }

      const filePath = path.join(contentDir, `${filename}.json`);
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        return res.json(JSON.parse(raw));
      } else {
        return res.status(404).json({ error: `File not found: ${filename}` });
      }
    } catch (e: any) {
      return res.status(500).json({ error: e.message || "Failed reading content node" });
    }
  });

  // API to list registered files schema
  app.get("/api/content-schemas", (req, res) => {
    try {
      if (!fs.existsSync(contentDir)) {
        return res.json([]);
      }
      const files = fs.readdirSync(contentDir)
        .filter(f => f.endsWith(".json") && f !== "package.json")
        .map(f => f.replace(".json", ""));
      return res.json(files);
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  });

  // API to update content node
  app.post("/api/content/:filename", (req, res) => {
    try {
      const { filename } = req.params;
      if (filename.includes("..") || filename.includes("/")) {
        return res.status(400).json({ error: "Access denied" });
      }

      const filePath = path.join(contentDir, `${filename}.json`);
      
      // Overwrite the JSON file locally
      const bodyString = JSON.stringify(req.body, null, 2);
      fs.writeFileSync(filePath, bodyString, "utf-8");

      return res.json({ success: true, file: filename });
    } catch (e: any) {
      return res.status(500).json({ error: e.message || "Failed writing content node" });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CMS Full-Stack Server listening on port ${PORT}`);
  });
}

startServer();
