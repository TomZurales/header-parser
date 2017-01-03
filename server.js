var express = require('express');
var path = require('path')
var app = express();

var ip, language, software;

app.set('views', path.join(__dirname, 'views'));
app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/', function(req, res){
   res.writeHead(200, {'Content-Type': 'application/json'});
   ip = req.headers['x-forwarded-for'];
   language = req.headers['accept-language'].split(',')[0];
   software = req.headers['user-agent'].split('(')[1].split(')')[0];
   res.end(JSON.stringify({'ip': ip, 'language': language, 'software': software}));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
