/* eslint-disable */
import express from "express";
import path from "path";
import fs from "fs";
import {
  initDatabase,
  loadContent,
  saveContent,
  listMedia,
  uploadMedia,
  getMediaContent,
  deleteMedia,
} from "./src/lib/mysql.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize MySQL pool asynchronously so it does not block the Express startup loop
  initDatabase().catch((err) => {
    console.error("Delayed MySQL pool connection error:", err);
  });

  // Body parser configurations
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  const contentDir = path.join(process.cwd(), "src", "content");
  const uploadsDir = path.join(process.cwd(), "public", "uploads");

  // Create uploads directory if it does not exist
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // API to serve uploaded assets from DB if they don't exist on disk
  app.get("/uploads/:filename", async (req, res, next) => {
    try {
      const { filename } = req.params;
      const physicalPath = path.join(uploadsDir, filename);
      if (fs.existsSync(physicalPath)) {
        return next();
      }

      // Fallback: load from database
      const media = await getMediaContent(filename);
      if (media) {
        let contentType = "application/octet-stream";
        if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) contentType = "image/jpeg";
        else if (filename.endsWith(".png")) contentType = "image/png";
        else if (filename.endsWith(".gif")) contentType = "image/gif";
        else if (filename.endsWith(".webp")) contentType = "image/webp";
        else if (filename.endsWith(".svg")) contentType = "image/svg+xml";

        const matches = media.base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let buffer;
        if (matches && matches.length === 3) {
          buffer = Buffer.from(matches[2], "base64");
          contentType = matches[1];
        } else {
          buffer = Buffer.from(media.base64, "base64");
        }

        res.setHeader("Content-Type", contentType);
        res.setHeader("Cache-Control", "public, max-age=31536000");
        return res.send(buffer);
      }
      return res.status(404).send("File not found");
    } catch {
      return res.status(500).send("Error serving file");
    }
  });

  // API to list uploaded assets under Media Library
  app.get("/api/media", async (req, res) => {
    try {
      const files = await listMedia(uploadsDir);
      return res.json(files);
    } catch (e) {
      return res.status(500).json({ error: e.message || "Failed reading media storage" });
    }
  });

  // API to upload media file (base64)
  app.post("/api/media/upload", async (req, res) => {
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
      const url = `/uploads/${uniqueName}`;
      
      const cleanExt = ext.replace(".", "");
      const format = ["jpg", "jpeg", "png", "webp", "gif", "svg"].includes(cleanExt) ? "image" : "file";
      const size = Math.floor(base64.length * 0.75);

      const saved = await uploadMedia(uniqueName, url, size, format, base64, uploadsDir);

      return res.json({
        success: true,
        ...saved,
      });
    } catch (e) {
      return res.status(500).json({ error: e.message || "Upload process failed" });
    }
  });

  // API to delete media record
  app.delete("/api/media/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      if (filename.includes("..") || filename.includes("/")) {
        return res.status(400).json({ error: "Invalid path reference" });
      }

      const purged = await deleteMedia(filename, uploadsDir);
      if (purged) {
        return res.json({ success: true, message: "Asset successfully purged" });
      } else {
        return res.status(404).json({ error: "Target asset not found in database or storage" });
      }
    } catch (e) {
      return res.status(500).json({ error: e.message || "Failed purging target layout asset" });
    }
  });

  // API to retrieve single content node
  app.get("/api/content/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      if (filename.includes("..") || filename.includes("/")) {
        return res.status(400).json({ error: "Access denied" });
      }

      const content = await loadContent(filename, contentDir);
      return res.json(content);
    } catch (e) {
      return res.status(500).json({ error: e.message || "Failed reading content node" });
    }
  });

  // API to list registered files schema
  app.get("/api/content-schemas", (req, res) => {
    try {
      const defaultSchemas = [
        "home",
        "about_kyaka",
        "about_team",
        "about_vision",
        "hope_family",
        "projects_school",
        "projects_medical",
        "projects_orphanage",
        "projects_hope",
        "navigation",
        "footer",
        "legal",
        "hope_stories",
        "story_online_launch",
      ];
      if (fs.existsSync(contentDir)) {
        const files = fs.readdirSync(contentDir)
          .filter(f => f.endsWith(".json") && f !== "package.json")
          .map(f => f.replace(".json", ""));
        return res.json(files.length > 0 ? files : defaultSchemas);
      }
      return res.json(defaultSchemas);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });

  // API to update content node
  app.post("/api/content/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      if (filename.includes("..") || filename.includes("/")) {
        return res.status(400).json({ error: "Access denied" });
      }

      await saveContent(filename, req.body, contentDir);
      return res.json({ success: true, file: filename });
    } catch (e) {
      return res.status(500).json({ error: e.message || "Failed writing content node" });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CMS Full-Stack Server listening on port ${PORT}`);
  });
}

startServer();
