var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response){
    var readStream = fs.createReadStream(filePath);
    readStream.on("data", function(data){
        response.write(data);
    });
    readStream.on("end", function(data){
        response.end();
    });
});


server.listen(port);
