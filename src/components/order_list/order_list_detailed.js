import React, { Component } from 'react';
import "./order_list_detailed.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";



class Order_list_detailed extends Component{
    constructor(props){
        super(props);
   
    }

    render(){
        return(
            <React.Fragment>
                <div className="O_order_detailed_white_background">
                    <div className="O_container">
                        <div className="O_order_detailed_info">
                            <div className="O_order_detailed_T">
                                <h2>訂單詳情</h2>
                            </div>
                            <table className="O_order_detailed_table">
                                <thead>
                                    <tr>
                                        <th>編號</th>
                                        <th>商品名稱</th>
                                        <th></th>
                                        <th>單價</th>
                                        <th>折扣價</th>
                                        <th>數量</th>
                                        <th>小計</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td> <img src="/images/play_wood.jpg" className="O_order_detailed_img"></img> </td>
                                        <td>雙旋上下動音樂鈴/DN三眼怪<br></br>商品編號:<br></br>H0000000001</td> 
                                        <td>$1680</td>
                                        <td>$1130</td>
                                        <td>1</td>
                                        <td>$1130</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td> <img src="/images/play_wood.jpg" className="O_order_detailed_img"></img> </td>
                                        <td>雙旋上下動音樂鈴/DN三眼怪<br></br>商品編號:<br></br>H0000000001</td> 
                                        <td>$1680</td>
                                        <td>$1130</td>
                                        <td>1</td>
                                        <td>$1130</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td> <img src="/images/play_wood.jpg" className="O_order_detailed_img"></img> </td>
                                        <td>雙旋上下動音樂鈴/DN三眼怪<br></br>商品編號:<br></br>H0000000001</td> 
                                        <td>$1680</td>
                                        <td>$1130</td>
                                        <td>1</td>
                                        <td>$1130</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                            <div className="O_order_detailed_count">                            
                                <h3><div className="O_order_detailed_count_line"></div>訂單總額:$5750</h3>
                            </div>
                        </div>
                    </div>
                </div>
       
       
            </React.Fragment>

        )
    }
}

export default Order_list_detailed;