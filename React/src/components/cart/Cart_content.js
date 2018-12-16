import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Cart.scss';
import $ from 'jquery';

class Cart_content extends Component {
    constructor(props) {
        super(props);
        this.state={
            quantity:{}
        }
    };
    // changeNameHandler = (evt)=>{
    //     var target = evt.target;
    //     this.setState(function(previousState) {
    //     return {
    //         quantity: {
    //       ...previousState.quantity, 
    //       [target.name]: target.value
    //     }
    //   }
    // },()=>this.props.GoodsNumChange(target.value)
    // )              
    // };

    render(){
        return (
            <React.Fragment>                  
                {this.props.cart.map(cart =>
                    <tr id="listNum">
                        <td></td>
                        <td>
                            <figure className="K_product_pic_l">
                                <img src={require(`./images/${cart.product_id}.jpg`)} alt="產品圖片" />
                            </figure>
                        </td>
                        <td>
                            <h3>{cart.good_name}</h3>
                            <p>{cart.material}</p>
                            <p>{cart.size}</p>
                            <p></p>
                        </td>
                        <td>
                        <div className="K_form-group_cart_info">
                            <input type="text" name="goodsNum" id="goodsNum" 
                            value={cart.quantity} onChange={this.props.GoodsNumChange}></input>
                        </div>
                        </td>
                        <td>{cart.price}</td>
                        <td>{cart.discount_price}</td>
                        <td>{cart.quantity*cart.discount_price}</td>
                        <td><img className="K_table_icon" src="/images/likes_gray.svg" alt="icon_likes_gray" /></td>
                        <td className="cancel" onClick={this.props.cancelGood} data-sid={cart.sid}>
                            <img className="K_table_icon" src="/images/cancel.svg" alt="icon_cancel" onClick={this.delGoods} />
                        </td>
                    </tr>
                )}    
            </React.Fragment>
        );
    }
}
export default Cart_content;