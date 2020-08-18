var app = require('express')();
var http = require('http').createServer(app);

app.get('*', function(req, res){
  res.sendFile(__dirname + req.url);
});


http.listen(3000,'0.0.0.0', function(){
  console.log('listening on *:3000');
});