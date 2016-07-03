var http = require("http");
var url = require("url");

var port = process.argv[2];

function parseTime(timestamp){
    var date = new Date(timestamp);

    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

function timeToEpoch(timestamp){
    var date = new Date(timestamp);

    return {
        unixtime: date.getTime()
    };
}

var server = http.createServer(function(request, response){
    if (request.method !== "GET") response.end();

    var parsedUrl = url.parse(request.url);
    var path = parsedUrl.pathname;
    var query = parsedUrl.query.split("=");
    var time;

    switch (path){
        case "/api/parsetime":
            time = parseTime(query[1]);
        break;
        case "/api/unixtime":
            time = timeToEpoch(query[1]);
        break;
    }

    response.end(JSON.stringify(time));
});

server.listen(port);
