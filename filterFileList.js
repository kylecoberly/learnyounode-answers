var fs = require("fs");
var path = require("path");

module.exports = function(filePath, extension, callback){
    fs.readdir(filePath, function(error, data){
        if (error) return callback(error);

        var filteredFiles = data.filter(function(file){
            return path.extname(file).substring(1) === extension;
        });
        callback(null, filteredFiles, extension);
    });
}
