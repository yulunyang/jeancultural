var express = require('express');
var router = express.Router();
var mysql = require("mysql");

//建立連線
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'jeancultural',
  // port:8889
});
// connection.connect();
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


router
  .route("/news")
  .get(function(req, res) {//讀所有資料
      connection.query("select * from news",function(error,rows){
        if (error) throw error;
        res.json(rows);
      })
  }) 
 
router
  .route("/news/:sid")
  .get(function(req, res) {
    connection.query("select * from news where sid=?", req.params.sid,function(error,row){
      if(error) throw error;
      res.json(row);
    });
  
  }) 
 

module.exports = router;
