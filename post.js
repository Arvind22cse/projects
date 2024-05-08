var http = require('http');
var querystring=require('querystring');
var qs,name,email;
 http.createServer(function(req, res) {  
        var d= '';
        
    req.on('data', function(chunk) {   
                    console.log(chunk);
                    d += chunk;  
                    console.log("Data in String format: "+d);
                    });
    req.on('end', function() {
                console.log("Data: "+d);
                
                qs=querystring.parse(d);
                console.log(qs);

                name=qs['username'];
                email=qs['email'];
                mobile=qs['mobile'];
                age=qs['age'];
        
                res.write("Happy to inform that " + name + ", of age " + age + ", with email id " + email + " has been registered successfully with your mobile number: " + mobile);
                res.end(); 
                });
    }).listen(8800);
console.log("Server started running...");

