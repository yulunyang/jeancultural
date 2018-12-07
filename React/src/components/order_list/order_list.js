import React, { Component } from 'react';
import "./order_list.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Order_list_form from '../order_list/order_list_form';


class Order_list extends Component{
    constructor(props){
        super(props);
   
    }
    

    render(){
        return(
            <React.Fragment>
                <div className="O_white_background_order_list">
                    <div className="O_container">
                        <div className="O_order_list_info">
                            <div className="O_order_list_T">
                                <h2>訂單查詢</h2>
                            </div>
                            <Order_list_form/>
                            <p className="O_logistics_status">
        共3筆訂單&nbsp;&nbsp;(未出貨:&nbsp;0，&nbsp;已到門市:&nbsp;1，已寄出:&nbsp;2)</p>
                            <div className="O_page_mark">
                                <ul className="O_page_number">
                                    <li><a href="#">«</a></li>
                                    <li><a className="active" href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">6</a></li>
                                    <li><a href="#">7</a></li>
                                    <li><a href="#">»</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>

            

        )
    }
}

export default Order_list;