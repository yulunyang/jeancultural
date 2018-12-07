import React, { Component } from 'react';
import "./member_list.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Order_list_form from '../order_list/order_list_form';
import Order_VIP from '../order_list/order_VIP';
import Member_data from './member_data';
import Change_member_info from '../add_member/change_member_info'

class Member_list extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
                <div className="O_background_white_member_list">
                    <div className="O_container">
                        <div className="O_member_list_info">
                            <div className="O_latest_order_data_T">
                                <h2>最新訂單</h2>
                            </div>
                            <Order_list_form />
                            <div>
                                <Link to="/order_list/order_list"> <p className="O_latest_order_p">查看更多訂單</p></Link>
                            </div>
                            <div className="O_member_data_T">
                                <h2>會員資料</h2>
                            </div>
                            <Member_data />
                            <div>
                                <Link to="/change_member_info"> <p className="O_member_info_change">修改會員資料</p></Link>
                            </div>
                            <div className="O_VIP_way_T">
                                <h2>會員身分等級表</h2>
                            </div>
                            <Order_VIP />
                        </div>
                    </div>
                </div>
                
            </React.Fragment >

        )
    }
}

export default Member_list;