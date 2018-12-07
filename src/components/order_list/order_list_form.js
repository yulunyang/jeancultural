import React, { Component } from 'react';
import "./order_list_form.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";



class Order_list_form extends Component{
    constructor(props){
        super(props);
   
    }
    

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
                            <tr>
                                <td className="O_latest_order_table_td">1</td>
                                <td className="O_latest_order_table_td">2018/08/27<br></br>11:48:30</td>
                                <td className="O_latest_order_table_td_a"><Link to="/order_list_detailed"> HA00000003</Link></td> 
                                <td className="O_latest_order_table_td">$1480</td>
                                <td className="O_latest_order_table_td">信用卡付款</td>
                                <td className="O_latest_order_table_td">3</td>
                                <td className="O_latest_order_table_td">2018/08/27<br></br>11:48:30<br></br> <u>訂單處理中</u> </td>
                                
                            </tr>
                            <tr>
                                <td className="O_latest_order_table_td">2</td>
                                <td className="O_latest_order_table_td">2018/09/08<br></br>21:26:40</td>
                                <td className="O_latest_order_table_td_a"><Link to="/order_list_detailed"> HA00000003</Link></td> 
                                <td className="O_latest_order_table_td">$2880</td>
                                <td className="O_latest_order_table_td">信用卡付款</td>
                                <td className="O_latest_order_table_td">5</td>
                                <td className="O_latest_order_table_td">2018/09/09<br></br>10:28:35<br></br> <u>訂單處理中</u> </td>
                                
                            </tr>
                            <tr>
                                <td className="O_latest_order_table_td">3</td>
                                <td className="O_latest_order_table_td">2018/10/17<br></br>17:06:17</td>
                                <td className="O_latest_order_table_td_a"><Link to="/order_list_detailed"> HA00000003</Link></td> 
                                <td className="O_latest_order_table_td">$480</td>
                                <td className="O_latest_order_table_td">信用卡付款</td>
                                <td className="O_latest_order_table_td">1</td>
                                <td className="O_latest_order_table_td">2018/10/17<br></br>21:48:30<br></br> <u>訂單處理中</u> </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>

        )
    }
}

export default Order_list_form;