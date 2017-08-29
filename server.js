var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(5000); // http://localhost:5000