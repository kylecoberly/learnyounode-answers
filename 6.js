var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(error, fileList){
    var filterFileList = fileList.filter(function(file){
        return path.extname(file).substring(1) === process.argv[3];
    });
    console.log(filterFileList.join("\n"));
});
