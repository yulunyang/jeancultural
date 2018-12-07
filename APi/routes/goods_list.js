var express = require("express");
var router = express.Router();
var mysql = require("mysql");

//建立連線
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jeancultural"
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



// 產品分類
router.route("/goods_list/:category").get(function(req, res) {
  connection.query("select * from goods where category =?", 
  req.params.category, function(error,
    rows) {
    if (error) throw error;
    res.json(rows);
  });
});


module.exports = router;
