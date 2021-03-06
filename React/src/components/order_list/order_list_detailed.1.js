import React, { Component } from 'react';
import "./order_list_detailed.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";



class Order_list_detailed extends Component{
    constructor(props){
        super(props);
        // this.initState={
        //     order_detail_sid:"",
        //     order_number:"",
        //     good_sid:"",
        //     good_name:"",
        //     price:"",
        //     discount_price:"",
        //     quantity:"",
        //     member_sid:"",
        //     total:""
        // }
         this.state = {
            detail:[],
            // O_detail:this.initState
         }
        // this.order_detail = props.match.params.order_detail
    }

    componentDidMount=()=> {
        
        let orderid = this.props.match.params.orderid
        console.log(orderid)
        this.getOrderListDetailed(orderid);
        // console.log(this.state)
    };

    getOrderListDetailed=(orderid)=> {
        
        fetch("/api/orderList/"+orderid)
        .then(res => res.json())
        .then(detail => {
            
        console.log(detail);
            this.setState({
                detail:detail,
            
                ...detail       //將資料展開丟入表格           
            })
        })
    };
  


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
                                        <th>圖片</th>
                                        <th>單價</th>
                                        <th>折扣價</th>
                                        <th>數量</th>
                                        <th>小計</th>
                                        
                                    </tr>
                                </thead>
                               
                                <tbody>
                                 {this.state.detail.map(detail=>
                                    <tr>
                                        <td>{detail.order_number}</td>
                                        <td>{detail.good_name}</td>
                                        <td> <img src="/images/play_wood.jpg" className="O_order_detailed_img"></img> </td>
                                        <td>{detail.price}</td>
                                        <td>{detail.discount_price}</td>
                                        <td>{detail.quantity}</td>
                                        <td>{detail.total}</td>
                                        
                                    </tr>
                                 )}
                                </tbody>
                                
                            </table>
                            <div className="O_order_detailed_count">                            
                                <h3><div className="O_order_detailed_count_line"></div>訂單總額:</h3>
                            </div>
                        </div>
                    </div>
                </div>
       
       
            </React.Fragment>

        )
    }
}

export default Order_list_detailed;