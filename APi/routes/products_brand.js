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


router
.route("/products_brand/")
.get(function(req, res){
  connection.query("SELECT * FROM products_brand WHERE 1", function(error, results){
    if(error) throw error
    res.json(results)
  })
})


// router.route("/products_brand/:sid").get(function(req, res) {
//   connection.query("select * from goods where category =?", 
//   req.params.sid, function(error,
//     rows) {
//     if (error) throw error;
//     res.json(rows);
//   });
// });



module.exports = router;
