http=require('http');
url=require('url');
querystring = require('querystring');

function sam(request,response)
{   
    if(request.url.includes('/login'))
    {
    console.log('URL '+request.url+' received.');
    
    var path = url.parse(request.url).pathname;
    console.log('Request for '+path+' received.');
    
    
    var query =url.parse(request.url).query;
    console.log("QUERY IS:");
    console.log(query);
    
    qs=querystring.parse(query);
    console.log("QS IS:");
    console.log(qs);
    var name = qs["name"];
    var email=qs["email"];
    var mobile=qs["mobile"];
    var age=qs["age"];
    
    response.write('Hello ' + name + ', your email id ' + email + ' has been registered successfully with your mobile number ' + mobile)
    response.end();
    }
    else
    {}
}
http.createServer(sam).listen(8888);
console.log('Server has Started…….');

