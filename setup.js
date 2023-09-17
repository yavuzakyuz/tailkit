#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const targetDir = process.argv[2] || "my-tailkit-app";

const sourcePath = path.join(__dirname, 'template');
const targetPath = path.resolve(targetDir);

// Copy the template directory to the target directory
fs.copySync(sourcePath, targetPath);

// Read the package.json file from the target directory
const packageJSONPath = path.join(targetPath, 'package.json');
const packageJSON = require(packageJSONPath);

// Update the name property
packageJSON.name = targetDir;

// Write the updated package.json back to the target directory
fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));

console.log(`Successfully created Tailkit project in ${targetPath}`);
