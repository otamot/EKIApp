var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/*/ GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

*/
router.get("/",function(req,res,next){
	var connection = mysql.createConnection({
	host     : 'db01',
	user     : 'root',
	password : '*******',
	database : "TrainLine"
	});
	
	connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}
				
	console.log('connected as id ' + connection.threadId);
	});

	connection.query('SELECT count(*) FROM Line_Table', function(error, rows, fields) {
		console.log(rows);
		res.render('index',{title:'success'});
	});


});


module.exports = router;
