import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// test

$(function(){
    var $tabPanel = $('#tab-panel') ,
        $tabs = $tabPanel.find('.tabs') ,
        $tab = $tabs.find('a') ,
        $tabContent = $tabPanel.find('.tab-content') ,
        $content = $tabContent.find('> li');
     
    $tab.eq(0).addClass('active');
    $content.eq(0).show().siblings().hide();
     
    $tab.on('click',function(){
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $content.eq($tabIndex).show().siblings().hide();
    });
});





 //drag    
 
 function dropHandler(evt){
    var clone, clonenot;
    evt.preventDefault();
    evt.stopPropagation();
    var id = evt.dataTransfer.getData("text/plain");
    if(window.dragTarget){
        if(window.dragTarget.getAttribute("data-clone") != '1'){
            clone = window.dragTarget.cloneNode(true);
            clone.setAttribute("data-clone", "1");
            evt.target.appendChild(clone);
        }

    }


    // add To Cart
    window.onload=function(){
    var cart = document.getElementById("cart");
    // cart.addEventListener("dragover", handler);
    cart.addEventListener("drop", addToCart);
    }
    // function handler(evt) {
    //     evt.preventDefault();
    // }
    function addToCart(event) {
        //todo 使用preventDefault()防止預設動作發生
        //todo 使用stopPropagation()防止事件氣泡現象
        event.preventDefault();
        event.stopPropagation(); 

        
    //     //todo 從dataTransfer物件中取出(getData)之前存進去的產品Id
        var id = event.dataTransfer.getData('text/plain');
        // alert(id);
        
    //     //todo 讀出商品編號、商品名稱及商品價格  Document Object Model
        var item = document.querySelector('#'+ id);
        console.log(id)  //商品編號
        var itemName = item.querySelector('p:first-child').textContent  //商品名稱
        var price = item.querySelector('p:nth-child(2)>span:nth-child(2)').textContent //商品價格

    //     //使用者要購買的資料需要儲存起來，數量預設是1
    //     //判斷購物車是否有此項產品，有數量加1

    //     //todo 用localstorage來儲存使用者購買的商品
        var theValue = localStorage.getItem(id)  //key:value 
        // {"itemName":itemName,"qty":qty,"price":price}
        if(theValue){
        // 購物車有此商品，數量+1
        var qty = JSON.parse(theValue).qty + 1
        item = {"itemName":itemName,"qty":qty,"price":price}
        localStorage.setItem(id,JSON.stringify(item))
        }else{       
        item = {"itemName":itemName,"qty":1,"price":price}
        localStorage.setItem(id,JSON.stringify(item))}
                    

        // showCart();
}}

//2.move
// var myd = document.getElementById('myd');
// var i, k, el, x, y, size, color;

// var ballNum = 12;
// var angUnit = Math.PI*2/ ballNum ;

// for(i=0; i< ballNum; i++){
//     el = document.createElement('div');
//     el.className = 'ball';

//     x = 400-50 + 200 * Math.cos(angUnit * i - Math.PI / 3);
//     y = 300-50 + 200 * Math.sin(angUnit * i - Math.PI / 3);

//     el.innerHTML = i+1;

//     el.style.left = x + 'px';
//     el.style.top = y + 'px';

//     myd.appendChild(el);
// }

// var dragTarget, dx, dy;

// var myMMove = function(event){
//     dragTarget.style.left = event.pageX - dx + 'px';
//     dragTarget.style.top = event.pageY - dy + 'px';
// };


// var myMDown = function(event){
//     var t = event.target;
//     if(t.className == 'ball'){
//         dragTarget = t;
//         dx = event.offsetX;
//         dy = event.offsetY;
//         myd.addEventListener('mousemove', myMMove);

//         myd.appendChild(dragTarget);
//     }
// };
// var myMUp = function (event) {
//     dragTarget = null;
//     myd.removeEventListener('mousemove', myMMove);
// };

// myd.addEventListener('mousedown', myMDown);
// window.addEventListener('mouseup', myMUp);









// 3.AddToCart
// 將數字轉成千分位
function commafy(num) {
    num = num + "";  //轉成string
    var re = /(-?\d+)(\d{3})/ //正則運算式 regular expression
    while (re.test(num)) {
        num = num.replace(re, "$1,$2")
    }
    return num;
}
//解除千分位 value.replace(/[,]+/g,"");

// //找到所有的商品
// var items = document.querySelectorAll('#products div.item');
// for (var i=0,max=items.length;i<max;i++){
    // items[i].addEventListener("mouseover", function () {
    //     this.getElementsByTagName("div")[0].style.display = 'block';
    // }, false);
    // items[i].addEventListener("mouseout", function () {
    //     this.getElementsByTagName("div")[0].style.display = 'none';
    // }, false);

//     //todo 被拖曳的元素需要有draggable="true"的設定，檢查看看每個商品是否有此屬性
//     //todo 對於每個商品設定dragstart事件，並將其id儲存在dataTransfer中
//     items[i].addEventListener('dragstart',function(evt){
//         evt.dataTransfer.setData('text/plain',this.id)
//     })
// };
   
//  //購物車區
// var cart = document.getElementById("cart");

// //要將商品拖曳到購物車區
// //todo 設定dragover事件，使用preventDefault()防止預設動作發生
// // cart.addEventListener("dragover",function(evt){
// //    evt.preventDefault();
// // })

// //todo 設定drop事件，呼叫addToCart function
// cart.addEventListener("drop",addToCart);
// window.onload=function(){
//     var cart = document.getElementById("cart");
//     cart.addEventListener("dragover", handler);
//     cart.addEventListener("drop", addToCart);
// }
// function handler(evt) {
//     evt.preventDefault();
// }
// function addToCart(event) {
//     //todo 使用preventDefault()防止預設動作發生
//     //todo 使用stopPropagation()防止事件氣泡現象
//     event.preventDefault();
//     event.stopPropagation(); 

    
// //     //todo 從dataTransfer物件中取出(getData)之前存進去的產品Id
    // var id = event.dataTransfer.getData('text/plain');
    // alert(id);
    
// //     //todo 讀出商品編號、商品名稱及商品價格  Document Object Model
//     var item = document.querySelector('#' + id);
//     // console.log(id)  //商品編號
//     var itemName = item.querySelector('p:first-child').textContent  //商品名稱
//     var price = item.querySelector('p:nth-child(2)>span:nth-child(2)').textContent //商品價格

// //     //使用者要購買的資料需要儲存起來，數量預設是1
// //     //判斷購物車是否有此項產品，有數量加1

// //     //todo 用localstorage來儲存使用者購買的商品
//     var theValue = localStorage.getItem(id)  //key:value 
//     {"itemName":itemName,"qty":qty,"price":price}
// //     if(theValue){
// //       //購物車有此商品，數量+1
// //       var qty = JSON.parse(theValue).qty + 1
// //       item = {"itemName":itemName,"qty":qty,"price":price}
// //       localStorage.setItem(id,JSON.stringify(item))
// //     }else{       
// //       item = {"itemName":itemName,"qty":1,"price":price}
// //       localStorage.setItem(id,JSON.stringify(item))
//     // }

// //     //讀出localStorage中的資料
//     showCart();
// }

//  //讀出localStorage中的資料
// function showCart() {   
//     //todo 從localstorage中讀出資料顯示在購物車中
//     myCart = document.querySelector('#cart>ul')
//     var myCart = document.querySelector('.c-dropdown__list');
//     //清除頁面上購物車的資料
//     var result = myCart.hasChildNodes();
//     var myCart = document.getElementsByClassName("c-dropdown__list");
//     while (myCart.hasChildNodes()) {
//         var children = myCart.childNodes;      
//         myCart.removeChild(myCart.lastChild);
//     }
      


//     var docFrag = document.createDocumentFragment();
//     var total = 0;
//     for(var i=0,max=localStorage.length;i<max;i++){
       
//         var id = localStorage.key(i)  //key(0)回傳keyname
//         var item = JSON.parse(localStorage.getItem(id)) //{}

//         //<td>itemName</td>
//         var name = item.itemName
//         var cell1 = document.createElement("p");//<td></td>
//         var txt1 = document.createTextNode(name);//CASIO Exilim PRO EX-P505
//         cell1.appendChild(txt1);  //<td>CASIO Exilim PRO EX-P505</td>           
        
//         var qty = item.qty
//         var cell2 = document.createElement("p");
//         var txt2 = document.createTextNode(qty);
//         cell2.appendChild(txt2);//<td>1</td> 
        
//         var price = item.price
//         var cell3 = document.createElement("p");
//         var txt3 = document.createTextNode(commafy(price));
//         cell3.appendChild(txt3);//<td>9,900</td> 

        
//         var subtotal = price.replace(/[,]+/g,"") * qty
//         var cell4 = document.createElement("p");
//         var txt4 = document.createTextNode(commafy(subtotal));
//         cell4.appendChild(txt4);//<td>9,900</td> 

//         //<tr><td></td><td></td>...</tr>
//         var row = document.createElement("li");//<tr></tr>
//         row.appendChild(cell1) //<tr><td>CASIO Exilim PRO EX-P505</td> </tr>
//         row.appendChild(cell2)//<tr><td>CASIO Exilim PRO EX-P505</td><td>1</td>  </tr>
//         row.appendChild(cell3)
//         row.appendChild(cell4)

//         docFrag.appendChild(row)
       
//         total += subtotal;
//     }
//    myCart.appendChild(docFrag)
    
//     document.querySelector('#total>span').innerHTML = commafy(total);

// }

// showCart();

// var btn = document.querySelector('#buttonClear');
// btn.addEventListener("click",function(){
//     localStorage.clear();
//     showCart();
// })
