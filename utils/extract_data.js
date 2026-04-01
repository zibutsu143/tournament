const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/index.html');
const destFile = path.join(__dirname, '../public/data.js');
const html = fs.readFileSync(targetFile, 'utf8');

const startStr = '// Tournament Bracket Data structure (Derived from Schedule)';
const startIndex = html.indexOf(startStr);

const afterStr = '// Initialize Player Dropdown Logic';
const afterIndex = html.indexOf(afterStr);
const endIndex = html.lastIndexOf('        });', afterIndex) + '        });'.length;

if (startIndex > -1 && endIndex > -1) {
    const dataSection = html.substring(startIndex, endIndex);
    fs.writeFileSync(destFile, dataSection + '\n', 'utf8');
    
    const replacement = `<script src="/data.js"></script>\n        `;
    const newHtml = html.substring(0, startIndex) + replacement + html.substring(endIndex);
    
    fs.writeFileSync(targetFile, newHtml, 'utf8');
    console.log("Extraction successful.");
} else {
    console.error("Boundaries not found. Start:", startIndex, "End:", endIndex, "After:", afterIndex);
}
