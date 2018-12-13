import React, { Component } from 'react';
import "./sign_in_member.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import cookie from 'react-cookies'
import $ from 'jquery';

class Sign_in_member extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            member_email:"",
            member_password:"",
        }
        
    }
    

    check_Member = (evt) =>{
        evt.preventDefault();
        console.log(this.state)
        // var email = this.state.member_email;
        // console.log(email)
        // var password = this.state.member_password;
        //  console.log(password)
        // var userData = JSON.stringify({ "member_email": email, "member_password": password });
        var userData = JSON.stringify(this.state);
        console.log(userData);

        fetch("/api/login/",{
            method:"POST",
            mode: 'cors',
            body: userData,
            headers:new Headers({
                "Content-Type":"application/json",
                "Accept": "application/json"
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.message=="登入成功"){
                alert(data.message)
                this.props.history.push("/home");
            }else{
                alert(data.message)
            }
        })
    }



    onChange=(e)=>{
        let key = e.target.name;
        let data = e.target.value;
        this.setState({
            [key]:data
        })
        // this.setState({[e.target.name]:e.target.value});
        // console.log(this.state);
        // console.log("YEE");
    }


    render() {
        return (
            <React.Fragment>
                <div className="O_container">
                    <div className="O_banner_logo">
                        <img src='images/logo_black.svg' className="O_logo_black"></img>
                        <img src="images/color_line.svg" className="O_color_line"></img>
                    </div>
                </div>
                <div className="F_white_background_member_sign">
                    <div className="O_container">
                        <div className="O_sign_in_form">
                            <div className="O_sign_in_form_left">
                            <form>
                                <h2>Sign In 登入</h2><br></br>
                                <p>登入知音文創會員即可快速結帳</p>
                                <br></br>
                                <input type="email" className="O_form-control O_input"
                                 placeholder="&nbsp;&nbsp;E-mail 登入信箱" name="member_email"
                                 value={this.state.member_email} onChange={this.onChange} />

                                <input type="password" className="O_form-control O_input"
                                 placeholder="&nbsp;&nbsp; Password 請輸入密碼" name="member_password"
                                 value={this.state.member_password} onChange={this.onChange} />

                                <input type="text" id="Verification_code" className="O_form-control O_input"
                                 placeholder="&nbsp;&nbsp;Verification_code 請輸入驗證碼" name="Verification_code"  />

                                <br></br>
                                <button className="O_sign_in_form_left_btn">驗證碼</button>
                                <div className="O_checkbox">
                                    <input type="checkbox" className="O_checkbox_input"></input>
                                    <label for="remember" className="O_checkbox_label">記住我</label>
                                </div>

                                <button type="click" className="O_sign_btn" onClick={this.check_Member}>立即登入</button>


                                {/* <div className="O_SNS_sign">
                                    <button className="O_SNS_sign_btn">Facebook登入</button>
                                    <button className="O_SNS_sign_btn">Google登入</button>
                                </div> */}
                                </form>
                            </div>
                        
                            <div className="O_sign_in_form_right">
                                <h2>REGISTER 註冊</h2>
                                <p>
                                    還不是會員嗎 ? <br></br>                                                                         
                                    留下個人資料，系統將快速將您註冊為會員。<br></br>
                                    登入知音文創會員即可快速結帳<br></br>
                                    立即享受，如此輕鬆的快速線上購物!<br></br>
                                    快快加入知音會員吧!<br></br>
                                </p>
                                <br></br>
                                <div className="O_sign_up_btn">
                                    <Link to="buy_item"> <button className="O_register_btn"><img src="./images/play-button.svg"></img> 前往購物</button></Link>
                                    <br></br>
                                    <br></br>
                                    <Link to="add_member"><button className="O_register_btn"><img src="./images/play-button.svg"></img> 立即註冊</button></Link> 
                                </div>
                            </div>
                        </div>                   
                        <Link to="/home" className="O_to_home">回首頁</Link>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Sign_in_member;