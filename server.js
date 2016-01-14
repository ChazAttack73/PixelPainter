var express = require('express');
var app = express();

app.use( express.static( 'public' ) );

app.get('/', function (req, res) {
  res.send('Hello Chaz!');
});

var server = app.listen(7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log('Chaz, your server is running on', host, port);
});