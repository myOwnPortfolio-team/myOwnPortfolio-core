var express = require('express');
var app = express();
var opener = require('opener');
var port = 3000;

app.use("/", express.static('dist'));

app.listen(port, () => {
  console.log('Server listening on port ' + port + '!')
});

// opener('http://localhost:' + port + '/');
