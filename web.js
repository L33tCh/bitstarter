var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

buf = new Buffer(1234);

console.log(buf.length);
buf.write("some string", 0, "ascii");

buf.toString('utf-8');

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
