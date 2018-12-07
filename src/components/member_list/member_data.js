import React, { Component } from 'react';
import "./member_data.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";


class Member_data extends Component{
    constructor(props){
        super(props);
   
    }
    

    render(){
        return(
            <React.Fragment>
                
                    <div className="O_member_info">
                        <ul>
                            <li>帳號</li>
                            <li>姓名</li>
                            <li>生日</li>
                            <li>手機號碼</li>
                            <li>聯絡地址</li>
                        </ul>
                        <ul>
                            <li>ya123456@gmail.com</li>
                            <li>王小名</li>
                            <li>1978/09/25</li>
                            <li>0987987987</li>
                            <li>台北市大安區106復興南路一段390號2樓</li>
                        </ul>
                        
                    </div>
                    
            </React.Fragment>

        )
    }
}

export default Member_data;