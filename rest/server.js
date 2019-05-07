var http = require('http');
var url = require('url');
var fsMod = require('./modules/modules');
var events = require('events');
var eventEmitter = new events.EventEmitter();


var express = require('express'),
	app = express(),
	port = 8080;
	module = require('./modules/modules');

var routes = require('./modules/routes');



routes(app);
app.listen(port);

console.log('REST API started on port ' + port);



/*
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	var fileList = {};

//	var flistEE = function () {
//		fileList = fsMod.listDirSync(req);
//		console.log ("fileList Retrieved");
//	}

//	eventEmitter.on('getList', flistEE);

//	eventEmitter.emit('getList');

//	console.log("async");

////	fileList.forEach(filename => {
//		res.write(filename);
//	});

	//fileList = fsMod.listDirSync(req);
	


	res.write("Files\n " + fsMod.asyncDir(req));
	res.end();
}).listen(8080);
*/
