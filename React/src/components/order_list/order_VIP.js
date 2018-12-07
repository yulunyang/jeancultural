import React, { Component } from 'react';
import "./order_VIP.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Order_VIP extends Component{
    constructor(props){
        super(props);
   
    }
    

    render(){
        return(
            <React.Fragment>
                <div className="O_VIP_info">
                    <table className="O_VIP_way">
                        <thead>
                            <tr>
                                <th>會員等級</th>
                                <th>一般會員</th>
                                <th>VIP會員</th>
                                <th>VVIP會員</th>
                                                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>目前等級</td>
                                <td></td>
                                <td> <img src="./images/crown.svg"></img> </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>折扣優惠</td>
                                <td></td>
                                <td>單筆訂單享9折</td>
                                <td>單筆訂單享85折</td> 
                            </tr>
                            <tr>
                                <td>升級辦法</td>
                                <td></td>
                                <td>累積消費滿$10,000</td>
                                <td>累積消費滿$25,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

        
       
            </React.Fragment>

        )
    }
}

export default Order_VIP;