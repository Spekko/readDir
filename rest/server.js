var http = require('http');
var url = require('url');

/**
*create app to use express module which is a node extention to cater for REST
**/
var express = require('express'),
	app = express(),
	port = 8080;
	module = require('./modules/modules');

var routes = require('./modules/routes');



routes(app); //link routes.js, which contains the GET/POST methods/links, to the server
app.listen(port);

console.log('REST API started on port ' + port);


