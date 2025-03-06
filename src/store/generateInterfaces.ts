import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import JsonToTS from "json-to-ts";
import jsonFile from "./inputs.json" assert { type: "json" };

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define output file path
const outputPath = path.join(__dirname, "output.interface.ts");

// Convert JSON to TypeScript interfaces
const interfaces = JsonToTS(jsonFile).join("\n\n");

// Write to the output file
fs.writeFileSync(outputPath, interfaces, "utf-8");

console.log(`✅ Interfaces generated at: ${outputPath}`);
