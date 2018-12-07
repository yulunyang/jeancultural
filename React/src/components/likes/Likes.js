import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Likes.scss';

class Likes extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <React.Fragment>
            <div className="K_box_likes">
                <div className="K_container_likes">
                    <table className="K_likes_product_table">
                        <thead>
                            <tr>
                                <th colspan="3">收藏清單</th>
                                <th>數量</th>
                                <th>單價</th>
                                <th>折扣價</th>
                                <th>小計</th>
                                <th>購物車</th>
                                <th>刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <figure className="K_product_pic_l">
                                        <img src="images/musicbell.jpg" alt="音樂鈴"/>
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
                                <td><img className="K_table_icon" src="images/cart.svg" alt="icon_cancel"/></td>
                                <td><img className="K_table_icon" src="images/cancel.svg" alt="icon_cancel"/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <figure className="K_product_pic_s">
                                        <img src="images/bear.jpg" alt="小熊配件"/>
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
                                <td><img className="K_table_icon" src="images/cancel.svg" alt="icon_cancel"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
        );
    }
}   
export default Likes;