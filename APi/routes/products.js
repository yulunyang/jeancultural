var express = require('express');
var router = express.Router();
var mysql = require("mysql");

//建立連線
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jeancultural'
});

// connection.connect();
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

router
  .route("/products")
  .get(function (req, res) {//讀所有資料
    connection.query("select * from products", function (error, rows) {
      if (error) throw error;
      res.json(rows);
    })
  })
router
  .route("/products/:page")
  .get(function (req, res) {
    //先統計總共幾筆資料
    var query = "select count(*) as TotalCount from products";
    var totalCount = 0;
    connection.query(query, function (error, row) {
      if (error) throw error;
      totalCount = row[0].TotalCount;

      //讀出分頁資料
      var LimitNum = 10;   //一次讀取10筆資料
      var startNum = 0;    //從第幾筆開始讀
      if (req.params.page) {
        page = parseInt(req.params.page);
        startNum = (page - 1) * LimitNum;
      }
      var query = "select * from products limit ? OFFSET ?";
      var params = [LimitNum, startNum];
      query = mysql.format(query, params);
      connection.query(query, function (error, row) {
        if (error) throw error;
        res.json({ "TotalCount": totalCount, "datas": row });
      });
    });
  })
module.exports = router;
