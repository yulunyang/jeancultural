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
// router.route("/goods_list/:category/:page").get(function(req, res) {
router.route("/goods_list/:category").get(function(req, res) {
  // res.send("page:" + req.params.page + "category:" + req.params.category);
  //SELECT good_name, mainpic_dir, size, price FROM `goods` WHERE sid=?
  connection.query(
    "select * from goods where category =?",
    req.params.category,
    function(error, rows) {
      if (error) throw error;
      res.json(rows);
    }
  );
});


router.route("/goods_contnet/:sid").get(function(req, res) {
  connection.query("select * from goods where sid=?", req.params.sid, function(
    error,
    results
  ) {
    if (error) throw error;
    res.json(results);
  });
});



// 產品分類+排序 Test
router.route("/goods_order/:category/:order").get(function(req, res) {
  // res.send("category:" + req.params.category + "order:" + req.params.order );
  var query = "select * from goods where category =? order by ? desc"; //哪類?排序方法?
  var params = [req.params.category, req.params.order];
  query = mysql.format(query, params); //format -> 將query取得的項目轉化成params格式
  connection.query(query, function(error, rows) {
    if (error) throw error;
    res.json(rows);
  });
});

// //----------------------排序 特價--------------------------//
// router.route("/goods_order/discount_price/").get(function(req, res) {
//   connection.query("SELECT *FROM goods ORDER BY discount_price DESC", function(
//     error,
//     rows
//   ) {
//     if (error) throw error;
//     res.json(rows);
//   });
// });
// //----------------------------end--------------------------//

// //----------------------排序 最新--------------------------//
// router.route("/goods_order/sid/").get(function(req, res) {
//   connection.query("SELECT *FROM goods ORDER BY sid DESC", function(
//     error,
//     rows
//   ) {
//     if (error) throw error;
//     res.json(rows);
//   });
// });
// //----------------------------end--------------------------//

// //----------------------排序 熱銷--------------------------//
// router.route("/goods_order/hot/").get(function(req, res) {
//   connection.query("SELECT * FROM `goods` WHERE `hot` ='yes'", function(
//     error,
//     rows
//   ) {
//     if (error) throw error;
//     res.json(rows);
//   });
// });
// //----------------------------end--------------------------//

module.exports = router;
