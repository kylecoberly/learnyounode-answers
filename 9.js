var http = require("http");

http.get(process.argv[2], function(response){
    response.setEncoding("utf8");
    var responseData = "";
    response.on("data", function(data){
        responseData += data;
    });
    response.on("error", function(error){
        console.error(error);
    });
    response.on("end", function(){
        console.log(responseData.length);
        console.log(responseData);
    });
});
