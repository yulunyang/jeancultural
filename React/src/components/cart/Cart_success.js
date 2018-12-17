import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Cart_steps from './Cart_steps.js';

import './Cart_success.scss';

class Cart_success extends Component{
    constructor(props){
        super(props);
        this.state={
            stepStyle3: true,
        };
    };
    render(){
        return(
        <React.Fragment>
            <div className="K_box_cart_success">
                <div className="K_container_cart_success">
                    <Cart_steps step3={this.state.stepStyle3}/>
                    <div className="K_order_success">
                        <h4>
                        商品訂購完成!
                        <br/>您的訂單編號：201812{sessionStorage.cartListSid}
                        <br/>歡迎您隨時到站上查詢到貨!
                        </h4>
                    </div>
                    <button className="go_shopping_btn"><Link  to="/buy_items_list">KEEP SHOPPING</Link></button>                   
                </div>
            </div>
        </React.Fragment>
        );
    }
}   
export default Cart_success;