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
