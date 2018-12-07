import React, { Component } from 'react';
import "./sign_in_member.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import cookie from 'react-cookies'


class Sign_in_member extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            member_email:"",
            member_keyword:"",
            
        }
        console.log(this.props.history)
    }
    


    fetchMember(data){
        return fetch("http://localhost:3000/api/checkmembers")
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
    }

    // check_Member = (evt) =>{
    //     let {member_email,member_keyword} = this.state;
    //     // console.log(member_email,member_keyword)

    //     this.fetchMember(member_email,member_keyword)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.length==1){

    //             cookie.save('userId', data);                
    //             this.props.history.push("/home"); //是的話轉跳到首頁
               
    //         }else{
    //               alert("帳號或密碼錯誤")
    //         }            
    //     })
        
        
    //     evt.preventDefault();
        
    // }



    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
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
                                <h2>Sign In 登入</h2><br></br>
                                <p>登入知音文創會員即可快速結帳</p>
                                <br></br>
                                <input type="email" id="member_email" className="O_form-control O_input"
                                 placeholder="&nbsp;&nbsp;E-mail 登入信箱" name="member_email"
                                 value={this.state.member_email} onChange={this.onChange} />

                                <input type="password" id="member_keyword" className="O_form-control O_input"
                                 placeholder="&nbsp;&nbsp;Password 請輸入密碼" name="member_keyword"
                                 value={this.state.member_keyword} onChange={this.onChange} />

                                <input type="text" id="Verification_code" className="O_form-control O_input"
                                 placeholder="&nbsp;&nbsp;Verification_code 請輸入驗證碼" name="Verification_code"  />


                                <button className="O_sign_in_form_left_btn">驗證碼</button>
                                <div className="O_checkbox">
                                    <input type="checkbox" className="O_checkbox_input"></input>
                                    <label for="remember" className="O_checkbox_label">記住我</label>
                                </div>

                                <button className="O_sign_btn" onClick={this.fetchMember}>立即登入</button>


                                <div className="O_SNS_sign">
                                    <button className="O_SNS_sign_btn">Facebook登入</button>
                                    <button className="O_SNS_sign_btn">Google登入</button>
                                </div>
                            </div>
                            <div className="O_sign_in_form_right">
                                <h2>REGISTER 註冊</h2>
                                <p>
                                    登入知音文創會員即可快速結帳<br></br>
                                    現在起結帳成功後系統將自動為您升級為會員!<br></br>
                                    將喜愛的商品放入購物車完成訂購步驟，<br></br>
                                    最後留下個人資料，系統將自動為您升級為會員。<br></br>
                                    立即享受，如此輕鬆的快速線上購物!<br></br>
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
                        <a href="http://localhost:3000/home" className="O_to_home">回首頁</a>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Sign_in_member;