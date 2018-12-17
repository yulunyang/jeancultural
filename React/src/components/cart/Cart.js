import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Cart_steps from './Cart_steps.js';
import Cart_content from './Cart_content.js';

import './Cart.scss';
import $ from 'jquery';

class Cart extends Component{
    constructor(props){
        super(props);
        this.initState={
            sid:"",
            good_sid:"",
            product_id:"",
            good_name:"",
            material:"",
            size:"",
            quantity:"",
            price:"",
            discount_price:"",
        }
        this.state = {
            discountCoupon:"useCoupon",
            couponNum:"",
            payWay:"貨到付款",
            deliveryWay:"宅配",
            cart: [],
            cartProducts: this.initState,
            stepStyle1: true,
            quantity1:this.initState.quantity                   
        };
    }

    GoodsNumChange = (evt)=>{
        console.log(evt)
        // this.setState(evt);
        this.setState({quantity1:evt});
    }
    changeNameHandler = (evt)=>{
        const inputName = evt.target.name;
        let inputValue = evt.target.value;
        this.setState({
            [inputName]: inputValue
        });       
    };
    changeSelectHandler =(evt)=>{
        const discountCoupon = evt.target.value
        this.setState({
            discountCoupon:discountCoupon
        });

        if(evt.target.value === "useCoupon"){
            $(".couponNum").css("display","block");           
        } else{
            $(".couponNum").css("display","none");  
        }        
    };
    checkForm = ()=>{
        var errorMsg = document.querySelector(".errorMsg"),
            isPass = true;
        
        errorMsg.style.display = "none";
        if(! document.form1.couponNum.value){                   
            errorMsg.style.display = "block"; 
            isPass = false;
        };
        return isPass;
    };

    //計算運費金額
    deliveryCount=()=>{
        var deliveryCost = document.getElementById("K_deliveryCost"),
            deliveryWay = this.state.deliveryWay,
            totalCost = parseInt(document.getElementById("K_totalCost").innerHTML)

        if(deliveryWay == "宅配" && totalCost<3000){
            deliveryCost.innerHTML = 50;
        }else{
            deliveryCost.innerHTML = 0;
        }
    
        totalCount();
        function totalCount(){
            var totalCost = parseInt(document.getElementById("K_totalCost").innerHTML),
                deliveryCost = parseInt(document.getElementById("K_deliveryCost").innerHTML),
                couponCost = parseInt(document.getElementById("K_couponCost").innerHTML),
                finalCost = document.getElementById("K_finalCost");
                finalCost.innerHTML = `NT$ ${totalCost+couponCost+deliveryCost}`;
        }
    }    
    //計算折價券金額
    disCount=(evt)=>{
        evt.preventDefault();

        var couponNum = document.getElementById("couponNum").value,
            couponCost = document.getElementById("K_couponCost"),
            discountCouponContent = this.state.discountCoupon

        if(couponNum == "20181212" && discountCouponContent == "useCoupon"){
            couponCost.innerHTML = -100;
        }else{
            couponCost.innerHTML = 0;
        }

        totalCount();
        function totalCount(){
            var totalCost = parseInt(document.getElementById("K_totalCost").innerHTML),
                deliveryCost = parseInt(document.getElementById("K_deliveryCost").innerHTML),
                couponCost = parseInt(document.getElementById("K_couponCost").innerHTML),
                finalCost = document.getElementById("K_finalCost");
                finalCost.innerHTML = `NT$ ${totalCost+couponCost+deliveryCost}`;
        };
            
    };

    //計算應付金額
    totalCount(){
        let totalCost = parseInt(document.getElementById("K_totalCost").innerHTML),
            deliveryCost = parseInt(document.getElementById("K_deliveryCost").innerHTML),
            couponCost = parseInt(document.getElementById("K_couponCost").innerHTML),
            finalCost = document.getElementById("K_finalCost");
            finalCost.innerHTML = `NT$ ${totalCost+couponCost+deliveryCost}`;
    }  
    //計算小計
    totalCost(){
        var totalPriceCount = this.state.cart.reduce((acc, cart) => (acc += (cart.quantity*cart.discount_price)), 0),
        totalCost = document.getElementById("K_totalCost")
        totalCost.innerHTML = totalPriceCount
    }


    //下一步
    submitHandle = (evt)=>{
        let cart =  JSON.stringify(this.state.cart),
            cartNum = this.state.cart.length,
            payWayVal = this.state.payWay,
            deliveryWayVal = this.state.deliveryWay,
            couponNum = document.getElementById("couponNum").value,
            couponCost = parseInt(document.getElementById("K_couponCost").innerHTML), 
            totalCost = parseInt(document.getElementById("K_totalCost").innerHTML),       
            deliveryCost = parseInt(document.getElementById("K_deliveryCost").innerHTML),            
            finalCost = totalCost+couponCost+deliveryCost;
            
        //存取sessionStorage
        sessionStorage.setItem("session_cart",cart)
        sessionStorage.setItem("session_cartNum",cartNum)
        sessionStorage.setItem("session_payWayVal",payWayVal)
        sessionStorage.setItem("session_deliveryWayVal",deliveryWayVal)
        sessionStorage.setItem("session_couponNum",couponNum)
        sessionStorage.setItem("session_couponCost",couponCost)
        sessionStorage.setItem("session_totalCost",totalCost)
        sessionStorage.setItem("session_finalCost",finalCost)
        
        console.log(sessionStorage);
        evt.preventDefault();
    }

    //顯示購物車內容
    getCartContent() {  
        fetch("/api/cart",{
            method: 'GET',
            mode: 'cors',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(sessionStorage);

            this.setState({
                cart: data,
                cartProducts: this.initState
            })
        })
    }

    //刪除購物車內容
    cancelGood=(e)=>{
        var itemSid = e.currentTarget.dataset.sid,
            cancelItemSid = JSON.stringify({"sid": itemSid}),
            cancelItem = e.currentTarget.parentNode;

        cancelItem.parentNode.removeChild(cancelItem);  //刪除頁面上此商品        
        window.location.reload(true) //重新刷新頁面
        
        //刪除資料庫裡的此產品
        fetch("/api/cart", {
            method: 'DELETE',
            mode: 'cors',
            body: cancelItemSid,
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    };
    componentDidMount=()=> {
        this.deliveryCount();
        this.getCartContent();
        this.totalCost();
        this.totalCount();
    };
    componentDidUpdate=()=> {
        this.deliveryCount();
        this.totalCount();
    };

    render(){
        return(
        <React.Fragment>
            <div className="K_box_cart">
                <div className="K_container_cart">
                    <Cart_steps step1={this.state.stepStyle1}/>                   
                    <table className="K_cart_product_table">
                        <thead>
                            <tr>
                                <th colSpan="3">購物車</th>
                                <th>數量</th>
                                <th>單價</th>
                                <th>折扣價</th>
                                <th>小計</th>
                                {/* <th>收藏</th> */}
                                <th>刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                        <Cart_content cart={this.state.cart} cancelGood={this.cancelGood} />
                        </tbody>
                    </table>
                    <figure className="K_free_shipping">
                        <img src="/images/free_shipping.svg" alt="免運說明"/>
                    </figure>
                    <div className="K_pay_way">
                        <form id="K_form1" name="form1" onSubmit= {this.submitHandle}>
                            <div className="K_form-group_cart" id="K_form-group_cart_Coupon">
                                <label htmlFor="discountCoupon">電子折價券</label>
                                <select id="discountCoupon" name="discountCoupon"
                                 value={this.state.discountCoupon} onChange={this.changeSelectHandler}>
                                    <option value="useCoupon">使用折價券</option>
                                    <option value="noneCoupon">不使用折價券</option>
                                </select>
                            </div>
                            <div className="K_form-group_cart couponNum">
                                <label htmlFor="couponNum">折價券</label>
                                <input type="text" id="couponNum" name="couponNum" placeholder="輸入折扣碼"
                                value={this.state.couponNum} onChange={this.changeNameHandler}></input>
                                <button className="K_check_coupon_btn" onClick={this.disCount}>確認</button>
                                <span className="errorMsg">請輸入折扣碼</span>
                            </div>
                            <div className="K_form-group_cart">
                                <label htmlFor="payWay">配送/付款方式</label>
                                <select id="payWay" name="payWay"
                                value={this.state.payWay} onChange={this.changeNameHandler}>
                                    <option value="貨到付款">貨到付款</option>
                                    <option value="線上付款">線上付款</option>   
                                </select>
                                <select id="deliveryWay" name="deliveryWay"
                                value={this.state.deliveryWay} onChange={this.changeNameHandler}>
                                    <option value="宅配">宅配</option>
                                    <option value="便利商店取貨">便利商店取貨</option>   
                                </select>       
                            </div>
                            <p className="K_cart_notice">
                                ※ 提醒您：
                                <br/>選擇宅配-請填寫正確收件人資訊，避免包裹配送不達
                                <br/>選擇超商-請填寫正確收件人姓名(與證件相符)，避免無法領取
                            </p>
                            <div className="K_line_cart"></div>
                            <div className="K_total_pay">
                                <div className="K_total_pay_detail">
                                    <h5>小計</h5>
                                    <span id="K_totalCost"></span>
                                </div>
                                <div className="K_total_pay_detail">    
                                    <h5>運費</h5>
                                    <span id="K_deliveryCost"></span>
                                </div>
                                <div className="K_total_pay_detail">
                                    <h5>折價券</h5>
                                    <span id="K_couponCost">0</span>
                                </div>
                                <div className="K_line_cart_s"></div>
                                <div className="K_total_pay_detail  K_total_pay_sum">
                                    <h5>應付金額</h5>
                                    <span id="K_finalCost"></span>
                                </div>
                            </div>
                            <div className="K_cart_btn">
                                <button><Link to="/buy_items_list">繼續購物</Link></button>
                                <button onClick={this.submitHandle}><Link to="/cart/Cart_info">下一步</Link></button>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>          
        </React.Fragment>   
        );
    } 
}
export default Cart;