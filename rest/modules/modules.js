var {promisify } = require('util');
var {resolve} = require('path');

var url = require('url');
var fs = require('fs');
var path = require('path');
var async = require('async');
var util = require('util');
var qs = require('querystring');

var os = require('os');

var readdir = promisify(fs.readdir);
var stat = promisify(fs.stat);




exports.getOS = function(req, res) {

	res.json(os.platform());

}


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
		//console.log(post['path']);

		//console.log(dir);

		var files = {};
		console.log(body);
		if (!fs.existsSync(dir)) {
			
			res.json("Directory does not exist");
			return;

		}


		fs.readdirSync(dir).forEach(filename => {

			var name = path.parse(filename).name;
			var ext = path.parse(filename).ext;
			var filepath = path.resolve(dir, filename);
			var size = fs.statSync(filepath).size;
			//var isFile = stat.isFile();
		
			//if (isFile) 
			files[name] = {ext, size};

		});


		//console.log(files);

		res.json(files);



	});
	
}


exports.asyncDir = async function(req) {

	var dir = "/home/spekko/Documents/";


	var subdirs = await readdir("/home/spekko/Documents/");

	var files = await Promise.all(subdirs.map(async (subdir) => {

		var res = resolve(dir, subdir);
		return (await stat(res)).isDirectory() ? getFiles(res) : res;

	}));

	return files.reduce((a, f) => a.concat(f), []);


}


exports.listDir = async function (req) {
	var link = url.parse(req.url, true).query;
	var path = link.path; 

	var files = [];
			



	var tmp = await readFiles("/home/spekko/Documents/", async function(filename) {
		console.log(filename);
		files.push(filename);
		//console.log(files);
	}, function(err) {
		if (err) {
			console.log("ERROR" + err);
			return;
		}
		//throw err;
	});


	console.log(tmp);

	/*
	filesEE.on('files_ready',function(){
		console.log(files);
		return files;
	});

	fs.readdir("/home/spekko/Documents", function(err, flist) {
		/s;;;;;aa:j/console.log(files);
		if (err) throw err;
		flist.forEach(function(file) {
			files.push(file);
		});
		filesEE.emit('files_ready');
		//console.log(files);

	});
*/
	//console.log(files);
	return files;
};

async function readFiles(dir, fileContent, onErr) {
	//var files;
	var files = await fs.readdir(dir, function(err, filenames) {
		if (err) {
			onErr(err);
			return;
		}
		//console.log(filenames);
		files = filenames;
		console.log(files);
		//return filenames;
		filenames.forEach( function(filename) {
			fileContent(filename);
		});
		return files;

	});

	console.log(files);

	//areturn fileContent;

}
