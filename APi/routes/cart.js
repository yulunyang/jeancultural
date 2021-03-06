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
    .route("/cart")
    .post(function(req, res) {  // 加入購物車
        var m_id = req.session.m_sid,   //會員sid
            sql_1 = "select * from goods where sid=? and on_sale=1",
            sql_2 = "select * from cart where good_sid=?",
            sql_3 = "insert into cart (member_sid, good_sid, product_id,good_name, material, size, quantity, price, discount_price) values ?",
            sql_4 = "update cart set quantity=? where good_sid=?"
            sid = req.body.sid, //商品sid
            qty = req.body.qty ? req.body.qty : 0; //加入購物車的商品數量

        connection.query(sql_1,[sid],function(error,results){
            if (error) throw error;
            if (req.session.login==false || !req.session.login){
                res.json({ message: "登出狀態" }); 
            }
            else if (results.length==0){
                res.json({ message: "資料庫沒有這個商品" });
            } else{
                var cart = [[m_id, sid, results[0].product_id, results[0].good_name, results[0].material, results[0].size,
                    qty, results[0].price, results[0].discount_price]];

                connection.query(sql_2,[sid],function(error,results){
                    
                    if(results.length==0){  //如果購物車沒有此商品->新增一筆購物車
                        connection.query(sql_3,[cart],function(error,results){
                            res.json({ message: "新增購物車成功" });
                        });
                    }else{  //如果購物車已有此產品->新增購物車此商品數量
                        var cartQuantity = parseInt(results[0].quantity),   //現有購物車的此商品數量
                            addQuantity = parseInt(qty),                    //加入購物車的商品數量
                            newQuantity = cartQuantity+addQuantity

                        connection.query(sql_4,[newQuantity,sid],function(error,results){
                            res.json({ message: "更新產品數量成功" });
                        })
                    }
                })
            }
        })
    })

    .get(function(req, res){    // 取得購物車內容
        var m_id = req.session.m_sid, //會員sid
            sql = "select * from cart where member_sid=?";
        connection.query(sql,[m_id],function(error,results){
            if (error) throw error;
            if (results.length==0){
                res.json({ message: "購物車沒有產品" });
            }
            else{
                res.json(results);
            }
        });
    })

    .delete(function(req, res){    // 刪除購物車內容
        var m_id = req.session.m_sid, //會員sid
            cartSid = req.body.sid,
            sql = "delete from cart where sid=?";

        connection.query(sql,[cartSid],function(error,results){
            if (error) throw error;
            res.json({ message: "刪除成功" });
        });
    })

module.exports = router;




