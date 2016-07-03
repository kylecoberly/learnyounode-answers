/*
  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
*/

var fs = require("fs");

var fileContents = fs.readFileSync(process.argv[2], {
    encoding: "utf8"
});
var newLines = fileContents.split("\n").length - 1;

console.log(newLines);
