#!/usr/bin/env node
import { spawn } from "child_process";
import { resolve } from "path";

const [projectPath, port] = process.argv.slice(2);

if (!projectPath || !port) {
    console.error("Usage: node scripts/run-project.js <project-path> <port>");
    process.exit(1);
}

const fullPath = resolve(process.cwd(), projectPath);

console.log(`🚀 Starting Vite server...`);
console.log(`📁 Project: ${projectPath}`);
console.log(`🌐 Port: ${port}`);

const vite = spawn("vite", ["--port", port], {
    cwd: fullPath,
    stdio: "inherit",
    shell: true,
});

vite.on("error", (error) => {
    console.error("❌ Failed to start Vite:", error);
    process.exit(1);
});

vite.on("close", (code) => {
    process.exit(code);
});
