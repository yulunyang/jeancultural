import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Cart_steps from './Cart_steps.js';

import './Cart.scss';
import $ from 'jquery';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            discountCoupon:"none",
            couponNum:"",
            payWay:"cash",
            deliveryWay:"home"
        };
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
    submitHandle = (evt)=>{
        console.log(this.state);
        evt.preventDefault();
    };
    render(){
        return(
        <React.Fragment>
            <div className="K_box_cart">
                <div className="K_container_cart">
                    <Cart_steps/>                  
                    <table className="K_cart_product_table">
                        <thead>
                            <tr>
                                <th colSpan="3">購物車</th>
                                <th>數量</th>
                                <th>單價</th>
                                <th>折扣價</th>
                                <th>小計</th>
                                <th>收藏</th>
                                <th>刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <figure className="K_product_pic_l">
                                        <img src="/images/musicbell.jpg" alt="音樂鈴"/>
                                    </figure>
                                </td>
                                <td>
                                    <h3>繞圈音樂鈴/DN米奇米妮</h3>
                                    <p>材質:木/樹脂/鐵/鋼/塑膠</p>
                                    <p>尺寸:12.7X12.7X14.5CM</p>
                                </td>
                                <td>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </td>
                                <td>$1,680</td>
                                <td>$1,280</td>
                                <td>$1,280</td>
                                <td><img className="K_table_icon" src="/images/likes_gray.svg" alt="icon_likes_gray"/></td>
                                <td><img className="K_table_icon" src="/images/cancel.svg" alt="icon_cancel"/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <figure className="K_product_pic_s">
                                        <img src="/images/bear.jpg" alt="小熊配件"/>
                                    </figure>
                                </td>
                                <td>
                                    <h3>農夫小熊(配件)</h3>
                                    <p>材質:木/樹脂/鐵/鋼/塑膠</p>
                                    <p>尺寸:12.7X12.7X14.5CM</p>
                                </td>
                                <td>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </td>
                                <td>$200</td>
                                <td>$200</td>
                                <td>$200</td>
                                <td></td>
                                <td><img className="K_table_icon" src="/images/cancel.svg" alt="icon_cancel"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <figure className="K_free_shipping">
                        <img src="/images/free_shipping.svg" alt="免運說明"/>
                    </figure>
                    <div className="K_pay_way">
                        <form name="form1" onSubmit= {this.submitHandle}>
                            <div className="K_form-group_cart">
                                <label htmlFor="discountCoupon">電子折價券：0張</label>
                                <select id="discountCoupon" name="discountCoupon"
                                 value={this.state.discountCoupon} onChange={this.changeSelectHandler}>
                                    <option value="noneCoupon">不使用折價券</option>
                                    <option value="useCoupon">使用折價券</option>   
                                </select>
                            </div>
                            <div className="K_form-group_cart couponNum">
                                <label htmlFor="couponNum">折價券</label>
                                <input type="text" id="couponNum" name="couponNum" placeholder="輸入折扣碼"
                                value={this.state.couponNum} onChange={this.changeNameHandler}></input>
                                <button className="K_check_coupon_btn">確認</button>
                                <span className="errorMsg">請輸入折扣碼</span>
                            </div>
                            <div className="K_form-group_cart">
                                <label htmlFor="payWay">配送/付款方式</label>
                                <select id="payWay" name="payWay"
                                value={this.state.payWay} onChange={this.changeNameHandler}>
                                    <option value="cash">貨到付款</option>
                                    <option value="credit_card">線上付款</option>   
                                </select>
                                <select id="deliveryWay" name="deliveryWay"
                                value={this.state.deliveryWay} onChange={this.changeNameHandler}>
                                    <option value="home">宅配</option>
                                    <option value="store">便利商店取貨</option>   
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
                                    <span>$2,270</span>
                                </div>
                                <div className="K_total_pay_detail">
                                    <h5>運費</h5>
                                    <span>$50</span>
                                </div>
                                <div className="K_total_pay_detail">
                                    <h5>折價券</h5>
                                    <span>尚未選擇</span>
                                </div>
                                <div className="K_line_cart_s"></div>
                                <div className="K_total_pay_detail K_total_pay_sum">
                                    <h5>應付金額</h5>
                                    <span>NT $2,270</span>
                                </div>
                            </div>
                            <div className="K_cart_btn">
                                <button><Link to="/buy_items">繼續購物</Link></button>
                                <button type="submit" onClick={this.checkForm}>下一步</button>
                                {/* <button><Link to="/cart/Cart_info">下一步</Link></button> */}
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