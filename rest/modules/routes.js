


module.exports = function(app) {

	var mods = require('./modules');
	
	app.use(function(req, res, next) {

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods: POST");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});


	app.route('/getOS')
		.post(mods.getOS);


	app.route('/getDir')
		.post(mods.listDirSync);



};
