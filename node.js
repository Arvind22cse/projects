var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    if (request.url == "/") {
        response.write("please enter exp1 or exp2 to redirect ");
        response.end("exp1-formvalidation exp2-cgpa claculator");
    } else if (request.url == "/exp1") {
        fs.readFile("exp1.html", function(err, data) {
            if (err) {
                console.error("failed to open exp1.html:", err);
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
            }
        });
    } else if (request.url == "/exp2") {
        fs.readFile("calculator.html", function(err, data) {
            if (err) {
                console.error("failed to open calculator.html:", err);
                response.writeHead(404);
                response.end("File not found");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
            }
        });
    } else {
        response.end("Invalid Request");
    }
    console.log("Request Received");
});

server.listen(8002);

console.log("Server running");