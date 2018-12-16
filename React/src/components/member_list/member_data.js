import React, { Component } from 'react';
import "./member_data.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";


class Member_data extends Component{
    constructor(props){
        super(props);
        this.initState = {
            member_email:"",
            member_name:"",
            member_birthday: "",
            member_mobile: "",
            member_address: "",            
        }
        this.state = {
            Memberinfo:[],
            member_email:"",
            member_name:"",
            member_birthday: "",
            member_mobile: "",
            member_address: "",                    
        }
    }

    // showTime=()=>{
        // var moment = require('moment');   moment js 用法
        // var date = moment().format("YYYY-MM-DD");
        // var dd = document.getElementById("O_date");
        // dd.innerHTML = date

        
    // }

    getMemberinfo = () => {
        fetch("/api/members/",{
            method: 'GET',
            mode: 'cors'
        })
          .then(res => res.json())
          .then(Memberinfo => {
            console.log(Memberinfo);
            this.setState({
                // Memberinfo: Memberinfo,
                ...Memberinfo[0] 
            });
          });
      };

      componentDidMount=()=> {
        this.getMemberinfo();
        // this.showTime();
        // console.log(this.state)
    };
    

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
                            <li>{this.state.member_email}</li>
                            <li>{this.state.member_name}</li>
                            <li id="O_date">{this.state.member_birthday}</li>
                            <li>{this.state.member_mobile}</li>
                            <li>{this.state.member_address}</li>
                        </ul>
                        {/* <li id="O_date"><script type="text">{this.state.member_birthday}</script></li>*/}
                    </div>
                <div><img src="images/O_grey.png" className="O_greyP"></img></div>
            </React.Fragment>

        )
    }
}

export default Member_data;