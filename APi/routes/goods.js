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

router.route("/goods").get(function(req, res) {
  connection.query("select * from goods", function(error, rows) {
    if (error) throw error;
    res.json(rows);
  });
});



//產品分類
// router.route("/goods/:category").get(function(req, res) {
//   connection.query("select * from goods where category =?", 
//   req.params.category, function(error,
//     rows) {
//     if (error) throw error;
//     res.json(rows);
//   });
// });


//商品頁碼
router.route("/goods/:page").get(function (req, res) {
    //先統計總共幾筆資料
    var query = "select count(*) as TotalCount from goods"; //用SQL找總共多少筆
    var totalCount = 0;
    
    connection.query(query, function (error, row) {
      if (error) throw error;
      totalCount = row[0].TotalCount;

      //讀出分頁資料
      var LimitNum = 9;   //一次讀取9筆資料
      var startNum = 0;    //從第幾筆開始讀
      if (req.params.page) {                //?
        page = parseInt(req.params.page); //parseInt化
        startNum = (page - 1) * LimitNum; //依據頁數讀取第一筆的項目id
      }
      var query = "select * from `goods` limit ? OFFSET ?"; //每頁項目範圍
      var params = [LimitNum, startNum];
      query = mysql.format(query, params); //format -> 將query取得的項目轉化成params格式
      connection.query(query, function (error, row) {
        if (error) throw error;
        res.json({ "TotalCount": totalCount, "datas": row });
      });
    });
  })

module.exports = router;
