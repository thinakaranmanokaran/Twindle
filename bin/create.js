#!/usr/bin/env node
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup readline for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for project name
rl.question("Enter your project name (default: my-app): ", (userInput) => {
  const projectName = userInput.trim() || "my-app"; // Default to "my-app" if empty
  const targetDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(__dirname, "../template");

  // Check if the directory already exists
  if (fs.existsSync(targetDir)) {
    console.log(`❌ The folder "${projectName}" already exists. Choose a different name.`);
    rl.close();
    process.exit(1);
  }

  // Create new project directory
  console.log(`🚀 Creating project: ${projectName}`);
  fs.mkdirSync(targetDir, { recursive: true });

  // Copy template files manually (EXCLUDING node_modules)
  const copyRecursiveSync = (src, dest) => {
    fs.readdirSync(src).forEach((file) => {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);

      if (file === "node_modules") return; // SKIP node_modules

      if (fs.statSync(srcFile).isDirectory()) {
        fs.mkdirSync(destFile, { recursive: true });
        copyRecursiveSync(srcFile, destFile);
      } else {
        fs.copyFileSync(srcFile, destFile);
      }
    });
  };

  copyRecursiveSync(templateDir, targetDir);

  // Modify package.json with the user-given project name
  const packageJsonPath = path.join(targetDir, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.name = projectName; // Set the project name
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf-8");
  }

  console.log(`✅ Project "${projectName}" is ready!`);
  console.log("")
  console.log(`📂 To change directory: cd ${projectName}`);
  console.log(`💻 To install dependencies: npm install`);
  console.log(`🚀 To start the project: npm run dev`);
  console.log("")
  console.log("Craft code, build dreams, and let innovation lead the way!")
  console.log("                               — Thinakaran Manokaran🚀💡")

  rl.close();
});
