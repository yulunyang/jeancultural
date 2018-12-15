var express = require('express');
var router = express.Router();
var mysql = require("mysql");

//建立連線
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'jeancultural',
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
  .route("/members")
  .get(function(req, res) {//讀所有資料
      connection.query("select * from members",function(error,rows){
        if (error) throw error;
        res.json(rows);
      })
  }) 
  .post(function(req, res) {//新增資料
     var _user = req.body;
    connection.query("insert into members set ?", _user,function(error){
       if (error) throw error;
       res.json({ message: "新增成功" });
    })
  });


// var _email= req.body.member_email;
// connection.query("select * from members where member_email=?", _email,function(error){
//   if (error) throw error;
//   if (_email >=1){
//     res.json({ message: "此帳號已被註冊" });
//   }
//  })


router
  .route("/members/:id")
  .get(function(req, res) {
    connection.query("select * from members where sid=?", req.params.id,function(error,row){
      if(error) throw error;
      res.json(row);
    });
  
  }) 
  .put(function(req, res) {//修改資料
       var _member = req.body;  
       var id = req.params.id;
       connection.query("update members set ? where sid=?",[_member, id],function(error){
          if(error) throw error;
          res.json({ message: "修改成功" });
       })

  }) 
  .delete(function(req, res) {//刪除資料
    connection.query("delete from members where sid=?",req.params.id,function(error){
      if(error) throw error;
      res.json({ message: "刪除成功" });
    })
  }); 

module.exports = router;
