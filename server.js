var express = require('express');
var app = express();

var ip, language, software;
app.get('/', function(req, res){
   res.writeHead(200, {'Content-Type': 'application/json'});
   ip = req.headers['x-forwarded-for'];
   language = req.headers['accept-language'].split(',')[0];
   software = req.headers['user-agent'].split('(')[1].split(')')[0];
   res.end(JSON.stringify({'ip': ip, 'language': language, 'software': software}));
});

app.listen(8080);