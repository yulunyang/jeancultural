var express = require('express');
var router = express.Router();
var mysql = require("mysql");

const moment = require("moment")

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
  .get(function(req, res) {//讀特定資料
    var sid = req.session.m_sid  //找到存進去session的東西
      connection.query("select * from members where sid=?",[sid],function(error,rows){
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
    
  })
  .put(function(req, res) {//修改資料
    var sid = req.session.m_sid,
    member_name=req.body.member_name,
    member_email=req.body.member_email,
    member_birthday=req.body.member_birthday,
    member_address=req.body.member_address,
    member_mobile=req.body.member_mobile,
    member_password=req.body.member_password;

    connection.query("UPDATE members SET member_name=?,member_email=?,member_birthday=?,member_address=?,member_mobile=?,member_password=? WHERE sid=?",
    [member_name,member_email,member_birthday,member_address,member_mobile,member_password,sid],function(error,rows){
      if (error) throw error;
      // res.json(rows);
      res.json({ message: "修改成功" });
    })    
  }) ;

router
  .route("/members/:id")
  .get(function(req, res) {
    connection.query("select * from members where sid=?", req.params.id,function(error,row){
      if(error) throw error;
      res.json(row);
    });
  
  }) 
  .delete(function(req, res) {//刪除資料
    connection.query("delete from members where sid=?",req.params.id,function(error){
      if(error) throw error;
      res.json({ message: "刪除成功" });
    })
  }); 


  

module.exports = router;
