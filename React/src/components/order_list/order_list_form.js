import React, { Component } from 'react';
import "./order_list_form.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';



// var moment = require('moment');
// var now = moment().format('LL');
class Order_list_form extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            orders:[],
            // details:[],
            url:""
        }
    }
    


    componentDidMount=()=> {
        this.getOrderList();
        
    };
    

    
    getOrderList=()=> {
        
        fetch("/api/orderList/",{
            method: 'GET',
            mode: 'cors'
        })
        .then(res => res.json())
        .then(orders => {
            // console.log(data);
        // console.log(orders[0]);
            this.setState({
                orders:orders,
            
                ...orders[0]       //將資料展開丟入表格           
            })
        })
    };

    
    

    

    render(){

        return(
            <React.Fragment>
                 
                <div className="O_latest_order">
                    <table className="O_latest_order_table">
                        <thead>
                            <tr>
                                <th className="O_latest_order_table_th">編號</th>
                                <th className="O_latest_order_table_th">訂購時間</th>
                                <th className="O_latest_order_table_th">訂單編號</th>
                                <th className="O_latest_order_table_th">訂單金額</th>
                                <th className="O_latest_order_table_th">付款方式</th>
                                <th className="O_latest_order_table_th">商品數量</th>
                                <th className="O_latest_order_table_th">處理狀態</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.orders.map(orders =>
                            <tr>
                                <td className="O_latest_order_table_td" >{orders.sid}</td>
                                <td className="O_latest_order_table_td" name="order_at" >{orders.order_at}</td>
                                <td className="O_latest_order_table_td_a" name="sid" ><Link to={`/order_list/${orders.sid}`}> {orders.sid} </Link></td> 
                                <td className="O_latest_order_table_td" name="total" >{orders.total}</td>
                                <td className="O_latest_order_table_td"name="payWay" >{orders.payWay}</td>
                                <td className="O_latest_order_table_td"name="quantity" >{orders.quantity}</td>
                                <td className="O_latest_order_table_td"name="Processing_status">{orders.Processing_status}</td>
                                 
                            </tr>
                        )}
                        </tbody>
                    </table>
                   
                </div>
            
                
            </React.Fragment>

        )
    }
}

export default Order_list_form;