var http = require("http");

Promise.all([
    get(process.argv[2]),
    get(process.argv[3]),
    get(process.argv[4])
]).then(function(responses){
    responses.forEach(function(response){
        console.log(response);
    });
});

function get(url){
    return new Promise(function(resolve, reject){
        http.get(url, function(response){
            var responseData = "";
            response.setEncoding("utf8");
            response.on("data", function(data){
                responseData += data;
            });
            response.on("end", function(){
                resolve(responseData);
            });
        });
    });
}
