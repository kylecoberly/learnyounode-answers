var http = require("http");
var through2Map = require("through2-map");

var port = process.argv[2];

var toUpper = through2Map(function(buffer){
    var string = buffer.toString();
    return string.toUpperCase();
});

var server = http.createServer(function(request, response){
    if (request.method !== "POST"){
        response.end();
    }

    request.pipe(toUpper).pipe(response);
});

server.listen(port);
