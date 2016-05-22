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
	password : '******',
	database : "TrainLine"
	});
	
	connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}
				
	console.log('connected as id ' + connection.threadId);
	});
	s = "新百合ヶ丘"
	g = "座間"
	ans = ""
	connection.query('Select Name from Station_Name where Station_ID >= (Select min(Station_ID) From Station_Name where ( Name ="'+s+'" or  Name = "'+g+'")) and Station_ID <= (Select max(Station_ID) From Station_Name where ( Name ="'+s+'" or  Name = "'+g+'"))', function(error, rows, fields) {
		console.log(rows[0]["Name"]);
		for(var i = 0; i < rows.length;i++){
			ans += rows[i]["Name"];
		}
//		console.log(fields);
		console.log(ans);
		res.render('index',{title:"駅検索apps.",elm:rows,start:s,goal:g});
	});


});


module.exports = router;
