var express = require('express');
var app = express();

  var output = {"Hello World"};
app.get('/', function(req, res){
  res.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port);