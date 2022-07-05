const { readdirSync, unlinkSync, existsSync } = require("fs");

//get the command line arguments
const args = process.argv.slice(2);
//check if the path provided exists
try {
  if (!existsSync(args[0])) {
    console.error("Directory does not exist.");
    process.exit(1);
  }
} catch (e) {
  console.error("An error occurred.");
  process.exit(1);
}

// get all files in the current directory and return an array of file names synchronously
const files = readdirSync(args[0]);
// get the files numbers and return an array of even numbers
var ticker = true;
var prey = [];
for (let fileName of files) {
  if (fileName === "index.js") {
    break;
  }
  if (ticker) {
    ticker = false;
    prey.push(fileName.toString());
  } else {
    ticker = true;
  }
}
// loop over the file names and delete each file synchronously
prey.forEach((file) => unlinkSync(`${args[0]}/${file}`));
