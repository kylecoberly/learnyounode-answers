var filterFileList = require("./filterFileList");

var filePath = process.argv[2];
var extension = process.argv[3];

function filterFiles(error, fileList, extension){
    if (error) console.log(error);

    console.log(fileList.join("\n"));
}

filterFileList(filePath, extension, filterFiles);
