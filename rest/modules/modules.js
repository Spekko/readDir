var url = require('url');
var fs = require('fs');
var path = require('path');
var util = require('util');
var qs = require('querystring');

var os = require('os');

/**
*returns platform of server when POST request to /getOS is made
**/
exports.getOS = function(req, res) {

	res.json(os.platform());

}


/**
*returns dictionary containing contents of given directory when POST request with arguments "path=/DIR" is made
**/
exports.listDirSync = function(req, res) {


	//var link = url.parse(req.url, true).query;
	var dir = '';
	
	var body = '';

	req.on('data', function(data) {
		body += data;


	});

	req.on('end', function() {
		var post = qs.parse(body);
		dir = post['path'];

		var files = {};
		console.log(body);
		if (!fs.existsSync(dir)) {
			
			res.json("-1");
			return;

		}

		/**
		*Gets contents of 'dir' and returns dictionary {filename: {ext, size}}
		**/
		fs.readdirSync(dir).forEach(filename => {

			var name = path.parse(filename).name;
			var ext = path.parse(filename).ext;
			var filepath = path.resolve(dir, filename);
			var size = fs.statSync(filepath).size;
			var att = fs.statSync(filepath);


			files[filepath] = {ext, size};

		});

		res.json(files);



	});
	
}

