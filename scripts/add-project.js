#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const projectName = process.argv[2];

if (!projectName) {
    console.error("❌ Podaj nazwę projektu: node scripts/add-project.js nazwa-projektu");
    process.exit(1);
}

try {
    // Wczytaj package.json
    const packageJsonPath = join(process.cwd(), "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

    // Znajdź najwyższy port
    const scripts = packageJson.scripts;
    const ports = Object.values(scripts)
        .filter((script) => script.includes("--port"))
        .map((script) => {
            const match = script.match(/--port (\d+)/);
            return match ? parseInt(match[1]) : 3000;
        });

    const nextPort = ports.length > 0 ? Math.max(...ports) + 1 : 3003;

    // Sprawdź czy skrypt już istnieje
    if (scripts[projectName]) {
        console.log(`⚠️  Skrypt "${projectName}" już istnieje w package.json`);
        process.exit(0);
    }

    // Dodaj nowy skrypt
    scripts[projectName] = `node scripts/run-project.js projects/${projectName} ${nextPort}`;

    // Zapisz
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4) + "\n");

    console.log(`✅ Dodano skrypt: yarn ${projectName}`);
    console.log(`   Port: ${nextPort}`);
    console.log(`   Folder: projects/${projectName}`);
    console.log("");
    console.log("Uruchom projekt:");
    console.log(`   yarn ${projectName}`);
} catch (error) {
    console.error("❌ Błąd:", error.message);
    process.exit(1);
}
