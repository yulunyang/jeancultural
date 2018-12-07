import React, { Component } from 'react';
import "./member_list.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Order_list_form from '../order_list/order_list_form';
import Order_VIP from '../order_list/order_VIP';
import Member_data from './member_data';
import Change_member_info from '../add_member/change_member_info';
import Empty_order_list_form from '../order_list/empty_order_list_form'

class Empty_member_list extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
                <div className="O_background_white_member_list_empty">
                    <div className="O_empty_member_list_info"></div>
                    <div className="O_container F_container_member_list">
                        <div className="O_latest_order_data_T">
                            <h2>最新訂單</h2>
                        </div>
                        <Empty_order_list_form />
                    </div>
                    <div className="F_white_background_member_list">
                        <div className="O_container F_container_over">
                            <div className="O_member_data_T">
                                <h2>會員資料</h2>
                            </div>
                            <Member_data />
                            <div>
                                <Link to="/change_member_info"> <span className="O_member_info_change">修改會員資料</span></Link>
                            </div>
                            <div className="O_VIP_way_T">
                                <h2>會員身分等級表</h2>
                            </div>
                            <Order_VIP />
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Empty_member_list;