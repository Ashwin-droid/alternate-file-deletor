const {readdirSync, unlinkSync} = require("fs");

// get all files in the current directory and return an array of file names synchronously
const files = readdirSync(__dirname);
// get the files numbers and return an array of even numbers
var ticker = true;
var prey = []
for(let fileName of files)  {
    if (fileName === "index.js") {
        break;
    }
    if (ticker) {
        ticker = false;
        prey.push(fileName.toString());
    } else {
        ticker = true;
    }
};
// loop over the file names and delete each file synchronously
prey.forEach(file => unlinkSync(`${__dirname}/${file}`));