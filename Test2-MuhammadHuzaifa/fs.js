const fs = require("fs");
const path = require("path");

function searchDirectory(dir, fp = []) {
    const files = fs.readdirSync(dir); 
    for (const file of files) {
        const filepath = path.join(dir, file); 
        const stats = fs.statSync(filepath); 
        if (stats.isDirectory()) {
            searchDirectory(filepath, fp);
        } else {
            fp.push(filepath)
        }
    }
    return fp
}
const directoryPath = "./";
console.log(searchDirectory(directoryPath))
