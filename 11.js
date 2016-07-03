var net = require("net");

function leftPad(string){
    string = "00" + string;
    return string.slice(-2);
}

var server = net.createServer(function(socket){
    // YYYY-MM-DD hh:mm \n
    var now = new Date();
    var date = [
        now.getFullYear(),
        leftPad((now.getMonth() + 1)),
        leftPad(now.getDate())
    ].join("-"); 
    var time = [
        leftPad(now.getHours()),
        leftPad(now.getMinutes())
    ].join(":");
    var dateTime = [date, time].join(" ");

    socket.end(dateTime + "\n");
});

var port = process.argv[2];
server.listen(port);
