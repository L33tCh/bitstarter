var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(16);
buf.write("Hello", "utf-8");
var t = buf.toString("utf-8");

app.get('/', function(request, response) {
  response.send(t);//'Hello World 2!');
});



//console.log(buf.length);

//var fs = require('fs');
//fs.readFileSync('/index.html', function(err, data) {
//	if (err) throw err;
//	buf = new Buffer(data);
//	buffer.write();
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
