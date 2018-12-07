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
    // delGoods =()=>{
    //     let tr = $(this).closest('tr');
    // }
    render() {
        return (
            <React.Fragment>
                   
                {this.props.cart.map(cart =>
                    <tr>
                        <td>1</td>
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
                        <select id="goodsNum" name="goodsNum" value={cart.goodsNum} onChange={this.changeNameHandler}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </td>
                        <td>{cart.price}</td>
                        <td>{cart.discount_price}</td>
                        <td>{cart.discount_price}</td>
                        <td><img className="K_table_icon" src="/images/likes_gray.svg" alt="icon_likes_gray" /></td>
                        <td><img className="K_table_icon" src="/images/cancel.svg" alt="icon_cancel" onClick={this.delGoods} /></td>
                    </tr>
                )}
                
            </React.Fragment>
        );
    }
}
export default Cart_content;