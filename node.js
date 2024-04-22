var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    if (request.url == "/") {
        // Your existing code for other routes
    } else if (request.url == "/exp1") {
        fs.readFile("exp1.html", function(err, data) {
            if (err) {
                console.error("Error reading form.html:", err);
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
                console.error("Error reading cgpa_calculator.html:", err);
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

server.listen(3000);

console.log("Server running");