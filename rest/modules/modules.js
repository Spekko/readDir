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
		console.log(dir);
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
			var stat = fs.statSync(filepath);
			var size = stat.size;//fs.statSync(filepath).size;
			
			var read = "";
			var write = "";
			var execute = "";
			
			if (checkPermission(stat.mode, fs.constants.R_OK))
				read = "yes";
			else
				read = "no";
			if (checkPermission(stat.mode, fs.constants.W_OK))
				write = "yes";
			else
				write = "no";
			if (checkPermission(stat.mode, fs.constants.X_OK))
				execute = "yes";
			else
				execute = "no";		

			files[filepath] = {ext, size, read, write, execute};

		});

		res.json(files);



	});
	
}

checkPermission = function(mode, mask) 
{
	var can;
	if (mask == fs.constants.R_OK) {
		can = !!(mask & parseInt((mode & parseInt("777", 8)).toString(8)[0]));
		return can;
	}
	
	if (mask == fs.constants.W_OK) {
		can = !!(mask & parseInt((mode & parseInt("777", 8)).toString(8)[0]));
		return can;
	}
	
	if (mask == fs.constants.X_OK) {
		can = !!(mask & parseInt((mode & parseInt("777", 8)).toString(8)[0]));
		return can;
	}
	
}

