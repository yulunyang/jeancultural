var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var session = require('express-session');

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


//登入
router
.route("/login")
.post(function(req, res) {

  var email = req.body.member_email;
  var password = req.body.member_password;
  var sql = "select * from members where member_email=?";

  // console.log('1::',req.body);
  // console.log("email:" + email);

  //比對是否有帳號
  connection.query(sql,[email],function(error,results){
    console.log(results);

    if(error) throw error;
    if(results.length==0){
      res.json({ message: "沒有此帳號" });
    }else {
      var sqlPassword = results[0].member_password

        if(sqlPassword==password){

          req.session.login = true;
          req.session.m_sid=results[0].sid;
          req.session.m_name=results[0].member_name;
          req.session.email=results[0].member_email;
          req.session.birthday=results[0].member_birthday;
          req.session.address=results[0].member_address;
          req.session.mobile=results[0].member_mobile;
          req.session.gender=results[0].member_gender;
          req.session.vip=results[0].member_vip;
          req.session.create=results[0].create_at;
          req.session.spent=results[0].amount_spent;
          req.session.password=results[0].member_password;

          res.json({ message: "登入成功",session:req.session.login});
          // res.json({message:req.session.address})
        } else{
          res.json({ message: "密碼錯誤"})
        }
    }
  })
})


//從session抓資料出來
// .get(function(req, res) {
//   if(req.session.sid){
//     res.json({ message: req.session.sid})
//   } else {
//       res.json({ message: "no"})
//   }
// })


/* 使用者登出頁面. */                                                       
/* GET logout page. */
router
.route("/logout")
.get(function(req,res){    // 到達 /logout 修改req.session.login狀態
  
  req.session.login = false;
  req.session.m_sid = "";
  // console.log(req.session)
  if(req.session.login == false){
    res.json({message:"登出成功"});
    // res.redirect("/home");
  }else{
  res.json({message:"登出失敗，請重新嘗試"});}
  
});

router
.route("/checkLogin")
.get(function(req,res){   
  
  if(req.session.login){
    res.json({message:"登入狀態"});
   
  }else{
    res.json({message:"登出狀態"});
  } 
});


/* 忘記密碼頁面. */
// router.get('/forget', function(req, res, next) {
//   if (req.session.login) {
//       res.redirect('/'); /重新導向...?
//       return;
//   }
//   res.render('users/forget');
// });


module.exports = router;
