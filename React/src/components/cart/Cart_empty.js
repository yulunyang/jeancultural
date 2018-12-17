import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Cart.scss';

class Cart_empty extends Component{
    constructor(props){
        super(props);
    }    
    
    render(){
        return(
        <React.Fragment>
            <div className="K_box_cart_empty">
                <h3>你的購物車尚未有商品</h3>
                <button className="go_shopping_btn1"><Link to="/buy_items_list">去逛逛最新的商品吧!</Link></button>                   
            </div>          
        </React.Fragment>   
        );
    } 
}
export default Cart_empty;