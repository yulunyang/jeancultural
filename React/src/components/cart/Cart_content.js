import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Cart.scss';
import $ from 'jquery';

class Cart_content extends Component {
    constructor(props) {
        super(props);
        this.state={
            goodsNum:"1",
        }
    };
    changeNameHandler = (evt)=>{
        this.setState({
            goodsNum:evt.target.value
        });
        this.props.onGoodsNumChange(evt.target.value);       
    };



    render(){
        return (
            <React.Fragment>
                   
                {this.props.cart.map(cart =>
                    <tr id="listNum">
                        <td></td>
                        <td>
                            <figure className="K_product_pic_l">
                                <img src="/images/musicbell.jpg" alt="音樂鈴" />
                            </figure>
                        </td>
                        <td>
                            <h3>{cart.good_name}</h3>
                            <p>{cart.material}</p>
                            <p>{cart.size}</p>
                        </td>
                        <td>
                        <div className="K_form-group_cart_info">
                            <input type="text" name="goodsNum" id="goodsNum" value={cart.quantity} onChange={this.changeNameHandler}></input>
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