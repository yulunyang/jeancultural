var express = require('express');
var router = express.Router();
var mysql = require("mysql");

//建立連線
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'jeancultural',
  multipleStatements: true //多語句查詢
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
    .route("/order")
    .post(function(req, res) {  // 建立訂單
        var m_id = req.session.m_sid,   //會員sid            
            order_at = new Date(),
            quantity = req.body.quantity,
            deliveryWay = req.body.deliveryWay,
            couponNum = req.body.couponNum,
            couponCost = req.body.couponCost,
            payWay =  req.body.payWay,
            total = req.body.total,
            cart = req.body.cart,
            Processing_status = "訂單處理中",
            Processing_time = new Date(),            
            sql_1 = "insert into order_list (member_sid,order_at,quantity,discount_key,discount_off,deliveryWay,payWay,total,Processing_status,Processing_time) values ?",                    
            sql_2 = "select sid from order_list where member_sid=? order by sid desc limit 1",
            sql_3 = "insert into order_detail (order_number,good_sid,product_id,good_name,price,discount_price,quantity,member_sid,total) values ?",
            sql_4 = "delete from cart where member_sid=?",
            orderList =[[m_id,order_at,quantity,couponNum,couponCost,deliveryWay,payWay,total,Processing_status,Processing_time]]
            
            connection.query(sql_1,[orderList],function(error,results){ // 新增一筆訂單(order_list)
                if (error) {throw error}

                connection.query(sql_2,[m_id],function(error,results){ // 查詢此會員最新訂單sid編號
                    if (error) {throw error}

                    var cartListSid = results[0].sid
                    for(var i=0; i<cart.length; i++){
                        var order_detail = [[cartListSid,cart[i].good_sid,cart[i].product_id,cart[i].good_name,cart[i].price,cart[i].discount_price,cart[i].quantity,m_id,total]]
                        connection.query(sql_3,[order_detail],function(error,results){ // 新增訂單內容(order_detail)
                            if (error) {throw error}                                       
                        }); 
                    };
                   
                    connection.query(sql_4,[m_id],function(error,results){  // 刪除購物車內容
                        if (error) {throw error}                                       
                        res.json({ 
                            message: "刪除成功",
                            cartListSid: cartListSid,
                        });
                    });
                });
            });
        })


router
    .route("/orderList")
    .get(function(req, res){    // 取得訂單清單
        var m_id = req.session.m_sid, //會員sid
            sql = "select * from order_list where member_sid=?";
            connection.query(sql,[m_id],function(error,results){
            if (error) throw error;   
            res.json(results);
        });
    })


router
    .route("/orderList/:orderid")
    .get(function(req, res){    // 取得訂單內容

        connection.query("select * from order_detail where order_number=?",[req.params.orderid],function(error,row){
            if(error) throw error;
            res.json(row);
        });
    })
                 
module.exports = router;
