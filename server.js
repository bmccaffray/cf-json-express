'use strict';

var express = require('express');
var http = require('http');

var app = express();

var date = new Date();
var time = date.getHours() + ":" + date.getMinutes();

app.get('/', function(req, res) {
	res.send(time);
});

app.get('/:nameInput', function(req, res) {
 	res.send('Hello ' + req.params.nameInput + '!');
});

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('server running on port ' + app.get('port'));
});