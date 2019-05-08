
/**
*function to create RESTful routes for the server
**/
module.exports = function(app) {

	var mods = require('./modules');
	
	/**
	*Add necessary webServer content headers
	**/
	app.use(function(req, res, next) {

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods: POST");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	/**
	*create POST method for getOS which calles getOS function in modules.js
	**/
	app.route('/getOS')
		.post(mods.getOS);

	/**
	*  """"""""
	**/
	app.route('/getDir')
		.post(mods.listDirSync);



};
