// has nothing to do with main project; just for exporting files

const fs = require("fs");
const path = require("path");

const outputFile = "project_export.txt";

const ignored = [
    ".git",
    "node_modules",
    ".DS_Store",
    outputFile
];

const allowedExtensions = [
    ".js",
    ".html",
    ".css",
    ".md",
    ".json"
];

let output = "";

function shouldIgnore(name) {
    return ignored.includes(name);
}

function readFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        if (shouldIgnore(file)) {
            continue;
        }

        const fullPath = path.join(folderPath, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            readFolder(fullPath);
        } else {
            const ext = path.extname(file);

            if (allowedExtensions.includes(ext)) {
                addFile(fullPath);
            }
        }
    }
}

function addFile(filePath) {
    output += "\n\n";
    output += "=".repeat(60);
    output += "\nFILE: " + filePath;
    output += "\n" + "=".repeat(60);
    output += "\n\n";

    const content = fs.readFileSync(filePath, "utf8");

    output += content;
}

const projectFolder = process.cwd();

console.log("Exporting project...");
console.log("Folder:", projectFolder);

readFolder(projectFolder);

fs.writeFileSync(outputFile, output);

console.log("Done!");
console.log("Created:", outputFile);