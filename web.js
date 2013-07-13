var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(fs.readFileSync('index.html'));

var t = buf.toString("utf-8");

app.get('/', function(request, response) {
  response.send(t);//'Hello World 2!');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
