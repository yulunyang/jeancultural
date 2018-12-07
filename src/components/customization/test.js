// import React, { Component } from 'react';
// import './Customization.scss';
// import $ from 'jquery';
// import { Test } from 'mocha';

// class Test extends Component {
//     constructor(props) {
//         super(props)
//         this.status = {
//             isLoading: true,
//             itemName: []

//         }
//     }
//     componentWillMount(nextProps, nextState) {
//         this.localStorage();

//     }
//     localStorage() {

//     }

//     clickHandlerPic(e) {
//         //選項也可以選擇
//         let sid = e.currentTarget.dataset.sid;
//         let name = e.currentTarget.dataset.name;
//         let numbering = e.currentTarget.dataset.numbering;
//         let pay = e.currentTarget.dataset.pay;
//         console.log(name + numbering + pay)
//         //進右邊盒子
//         $(".F_number_box").text(numbering)
//         $(".F_pay_box").text(pay)
//         //其他進盒子
//         $(".F_unit_box").text("$");
//         $(".F_del_box").text("X");
//         //樣式
//         var theImg = document.getElementById(numbering)
//         $(".F_item_pic").removeClass("F_item_box_choice")
//         $(theImg).addClass("F_item_box_choice")
//         //按鈕
//         $(".F_buy_button").removeClass("F_buy_button_check");
//         $(theImg).siblings(".F_buy_button").addClass("F_buy_button_check");
//     }

//     clickHandlerBtn(e) {
//         //選項也可以選擇
//         let sid = e.currentTarget.dataset.sid;
//         let name = e.currentTarget.dataset.name;
//         let numbering = e.currentTarget.dataset.numbering;
//         let pay = e.currentTarget.dataset.pay;

//         console.log(name + numbering + pay)
//         //進右邊盒子
//         $(".F_number_box").text(numbering)
//         $(".F_pay_box").text(pay)
//         //其他進盒子
//         $(".F_unit_box").text("$");
//         $(".F_del_box").text("X");
//         //樣式
//         var theImg = document.getElementById(numbering)
//         $(".F_item_pic").removeClass("F_item_box_choice")
//         $(theImg).addClass("F_item_box_choice")
//         //按鈕
//         $(".F_buy_button").removeClass("F_buy_button_check");
//         $(theImg).siblings(".F_buy_button").addClass("F_buy_button_check");
//         //local
//         let item = {
//             "itemName": name,
//             "itemNumber": numbering,
//             "price": pay
//         }
//         console.log(item)
//         // 判斷數量
//         let theValue = localStorage.sid;
//         console.log(theValue)
//         item = { "itemName": name, "itemNumber": numbering, "price": pay }
//         localStorage.setItem(sid, JSON.stringify(item))

//     }
//     test() {
//         alert("??")
//     }


//     render() {
//         return (
            
//         );
//     }
//     componentDidMount = () => {
//         //如果有符合的資料樣式保留
        
//     }
//     componentDidUpdate = () => {
       
//         });
//         // this.test()
//     }
// }

// export default Test;
