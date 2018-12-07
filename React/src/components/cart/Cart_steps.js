import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Cart_steps.scss';

class  Cart_steps extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <div className="K_box">
                    <div className="K_step" >
                        {/* 圓形步驟className=true時，表示正在當頁步驟(橘底白字) */}
                        <div className={this.props.step1===true ? "K_step_circle_now":"K_step_circle"} >
                            <h5>Step1</h5>
                            <p>購物清單確認
                            <br/>及選擇付款方式</p>
                        </div>
                        <img src="/images/arrow-right.svg" alt="icon_arrow-right"/>
                        <div className={this.props.step2===true ? "K_step_circle_now":"K_step_circle"} >
                            <h5>Step2</h5>  
                            <p>填寫訂購資料</p>
                        </div>
                        <img src="/images/arrow-right.svg" alt="icon_arrow-right"/>
                        <div className={this.props.step3===true ? "K_step_circle_now":"K_step_circle"} >
                            <h5>Step3</h5>
                            <p>完成購物</p>
                        </div>  
                    </div>                   
                </div>                
            </React.Fragment>
        );
    } 
}
export default Cart_steps;