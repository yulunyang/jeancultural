import React, { Component } from 'react';
import './Play.scss';
import './gragDrop.js';
import $ from 'jquery';


// import '../news/LookNews_js.js';
// import {reactLocalStorage} from 'reactjs-localstorage';

class Play_nav extends Component {
    constructor(props) {
        super(props)
        this.status = {
            newItem: "",
            list: []

        }
        this.handleClick = this.handleClick.bind(this);
        // this.getPhp=this.getPhp.bind(this);
    }
    componentDidUpdate() {
        //   alert("update")
        this.showCart();

    }
    componentWillMount() {


    }
    // getlocal()
    componentDidMount() {
        // this.showCart();
        // this.addCart();


    }

    showCart() {
        var docFrag = document.createDocumentFragment();
        var myCart = document.querySelector('.c-dropdown__list');
        // $( ".c-dropdown__list>li" ).remove();
        // while(myCart.hasChildNodes()){
        //     myCart.removeChild(myCart.lastChild)
        // }
        function commafy(num) {
            num = num + "";  //轉成string
            var re = /(-?\d+)(\d{3})/ //正則運算式 regular expression
            while (re.test(num)) {
                num = num.replace(re, "$1,$2")
            }
            return num;
        }

        for (var i = 0, max = localStorage.length; i < max; i++) {

            var id = localStorage.key(i);  //key(0)回傳keyname
            var item = JSON.parse(localStorage.getItem(id)); //{}
            // var postData = JSON.stringify(localStorage.getItem(id));
            // var items=localStorage.getItem('item1') ;     
            var name = localStorage.getItem('itemName');
            var qty = localStorage.getItem('qty');
            var price = localStorage.getItem('price');
            // var item = JSON.parse(localStorage.getItem('item1'));

            name = item.itemName
            var cell1 = document.createElement("p");//<td></td>
            var txt1 = document.createTextNode(name);//CASIO Exilim PRO EX-P505
            cell1.appendChild(txt1);

            price = item.price
            var cell2 = document.createElement("p");
            var txt2 = document.createTextNode(commafy(price));
            cell2.appendChild(txt2);//<td>9,900</td> 

            qty = item.qty
            var cell3 = document.createElement("p");
            var txt3 = document.createTextNode(qty);
            cell3.appendChild(txt3);//<td>1</td> 

            var cell4 = document.createElement("p");
            var txt4 = document.createTextNode(id);
            cell4.appendChild(txt4);//<td>1</td> 

            // var subtotal = price.replace(<i class="fas fa-times"></i>);
            // var cell4 = document.createElement("p");
            // var txt4 = document.createTextNode('X');
            // cell4.appendChild(txt4);//<td>9,900</td> 

            var row = document.createElement("li");//<tr></tr>
            row.appendChild(cell4);
            row.appendChild(cell1); //<tr><td>CASIO Exilim PRO EX-P505</td> </tr>
            row.appendChild(cell2);//<tr><td>CASIO Exilim PRO EX-P505</td><td>1</td>  </tr>
            row.appendChild(cell3);


            docFrag.appendChild(row)
            // docFrag.appendChild(myCart.lastChild);
            // total += subtotal;
        }
        // docFrag.appendChild(myCart.lastChild)
        $(".c-dropdown__list>li").first().siblings().remove();
        myCart.appendChild(docFrag)
        // localStorage.clear();
        // localStorage.removeItem(id);
        // document.querySelector('#total>span').innerHTML = commafy(total);

        // console.log("storage:" + localStorage.getItem("id"))

    }

    handleClick() {
        $(".c-dropdown__list>li").first().remove();
        var myList = [];
        $(".c-dropdown__list>li").each(function (n) {

            var sid = $(this).find("p:first").text();
            var qty = $(this).find("p:nth(2)").next().text();
            var myList = JSON.stringify({ "sid": sid, "qty": qty });
            console.log(myList)

            // var data = JSON.stringify({"sid":"7","qty":"2"})
            fetch("/api/cart", {
                method: 'POST',
                mode: 'cors',
                body: myList,               
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        });
        $(".c-dropdown__list>li").remove();
        localStorage.clear();


        alert('加到購物車');

    }

    handleClick_wish() {
        alert('加入收藏');
    }
    render() {
        return (
            <React.Fragment>
                <div className="Y_container_nav">
                    <div className="F_small_title_box">
                        <div className="F_color_icon"><img src="/images/color_icon.svg" alt="color_icon" /></div>
                        <h3>客製化自己的音樂鈴吧！</h3>
                    </div>

                    <div class="c-dropdown js-dropdown c-dropdown_change" id="cart">
                        <input type="hidden" name="Framework" id="Framework" class="js-dropdown__input" />
                        <span class="c-button c-button--dropdown js-dropdown__current">喜愛項目</span><i class="fas fa-caret-down "></i>
                        <div className="c-dropdown__lis_wrap">
                            <ul class="c-dropdown__list">
                                <li class="c-dropdown__item" ><p id="itemName1">編號</p><p id="itemName2">名稱</p><p id="itemName3">價格</p>
                                    <p id="itemName4">數量</p>
                                    {/* <i class="fas fa-times"></i> */}
                                </li>

                            </ul>
                            <div className="Y_pricebutton">
                                <button ref="addCart" className="Y_addCartbutton" onClick={this.handleClick}>加入購物車</button>
                                <button ref="addWish" type="submit" className="Y_addListbutton" onClick={this.handleClick_wish}>加入收藏</button>
                            </div>
                        </div>

                    </div>
                </div>







            </React.Fragment>
        );
    }
}

export default Play_nav;