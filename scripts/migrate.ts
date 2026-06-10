import fs from "fs";
import path from "path";

const filesToUpdate = [
  "src/routes/about.our-team.tsx",
  "src/routes/projects.hope-projects.tsx",
  "src/routes/projects.school.tsx",
  "src/routes/projects.index.tsx",
  "src/routes/hope-family.tsx",
  "src/routes/about.tsx",
  "src/routes/about.kyaka-ii.tsx",
  "src/routes/terms-of-service.tsx",
  "src/routes/hope-stories.index.tsx",
  "src/routes/hope-stories.online-launch.tsx",
  "src/routes/projects.orphanage.tsx",
  "src/routes/projects.medical-centre.tsx",
  "src/routes/projects.tsx",
  "src/routes/privacy-policy.tsx",
  "src/routes/about.index.tsx",
  "src/routes/index.tsx",
  "src/routes/hope-stories.tsx",
  "src/routes/about.our-vision.tsx",
];

for (const filepath of filesToUpdate) {
  const fullPath = path.resolve(filepath);
  if (fs.existsSync(fullPath)) {
    console.log(`Updating ${filepath}...`);
    let content = fs.readFileSync(fullPath, "utf-8");
    content = content.replace(/from "@tanstack\/react-router"/g, 'from "@/lib/router"');
    content = content.replace(/from '@tanstack\/react-router'/g, "from '@/lib/router'");
    fs.writeFileSync(fullPath, content, "utf-8");
  } else {
    console.warn(`File not found: ${filepath}`);
  }
}

console.log("Migration complete!");
