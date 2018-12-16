import React, { Component } from 'react';
import "./add_member.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';



class Add_member extends Component{
    constructor(props){
        super(props);
        this.state = {
            member_email:"",
            member_name:"",
            member_password:"",
            member_password2:"",
            member_birthday:"",
            member_mobile:"",
            member_address:"",
            create_at:"",                    
       }  
    }


    changeNameHandler = (evt)=>{
        const inputName = evt.target.name;
        let inputValue = evt.target.value;
        console.log(inputValue);
        this.setState({
            [inputName]: inputValue
        });
    };



    submitAdd=(evt)=>{
        evt.preventDefault();
        var pwd1 = document.getElementById("member_password").value;
        var pwd2 = document.getElementById("member_password2").value;
        var chk_passwordf = document.getElementById("chk_password");
        
              

        var errorMsg = document.querySelectorAll(".O_errorMsg"),
            errorMail = document.querySelector(".O_errorMsg_mail2"),
            errorMobile = document.querySelector(".O_errorMsg_mobile2"),
            isPass = true;

        var email = document.getElementById('email').value;
        var emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
        // var emailRegxp =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([az]{2,6}(?:\.[a-z]{2})?)$/i;
        var phone = document.getElementById('mobile').value;
        var mobileRegxp =/^09\d{8}$/;

        errorMsg.forEach(function(el){
            el.style.display = "none";
        });

        if(!document.O_form_1.email.value){
            
            errorMsg[0].style.display = "inline-block"; 
            isPass = false;
        }else if(emailRegxp.test(email) != true){
            errorMail.style.display = "inline-block"; 
            isPass = false;
        }else{
            errorMsg[0].style.display = "none"; 
            errorMail.style.display = "none"; 
        }

        if(!document.O_form_1.name.value){
            
            errorMsg[1].style.display = "inline-block"; 
            isPass = false;
        }
        if(!document.O_form_1.member_password.value){
            errorMsg[2].style.display = "inline-block"; 
            isPass = false;
        }else{
            isPass=true;
        }
        if(!document.O_form_1.member_password2.value){
            errorMsg[3].style.display = "inline-block"; 
            isPass = false;
        }
        if(pwd1 !== pwd2) 
         {  chk_passwordf.style.display = "inline-block"; 
            isPass=false;
        }else{
            chk_passwordf.style.display = "none";
            isPass=true;
        }
      

        if(!document.O_form_1.member_mobile.value){
           
            errorMsg[4].style.display = "inline-block"; 
            isPass = false;
        }else if(mobileRegxp.test(phone) != true){
            errorMobile.style.display = "inline-block"; 
            isPass = false;
        }else{
            errorMsg[4].style.display = "none"; 
            errorMobile.style.display = "none";
        }

        // var email = document.getElementById('email').value;
        // var emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
        //     if (emailRegxp.test(email) != true){
        //         errorMail.style.display = "inline-block"; 
        //         isPass = false;
        // }
        // var phone = document.getElementById('mobile').value;
        // var mobileRegxp =/^09\d{8}$/;
        //     if(mobileRegxp.test(phone) != true){
        //         errorMobile.style.display = "inline-block"; 
        //         isPass = false;
        //     }


        // return isPass;
        
        if (isPass) {
            delete this.state["member_password2"];
            console.log(this.state)
            fetch("/api/members", {
                method:"POST",
                body:JSON.stringify(this.state),
                headers:new Headers({
                    "content-Type":'application/json'
                })
            })
            
            .then(res => res.json())
            .then(data=>{
                alert(data.message)
            })
            .then(this.props.history.push("/home"));
        }
        
    }

    submitHandle=(evt)=>{
        console.log(this.state);
        evt.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <div className="O_white_background_member_add">
                <div className="O_container">
                
                    <div className="O_SignUpT"><h2>註冊會員</h2></div>
                    {/* <div>
                        <button className="O_googleSignUp">GOOGLE註冊</button>
                        <button className="O_FBSignUp">Facebook註冊</button>
                    </div> */}
                    
                    <div className="O_emailSignUp">
                        <h2 className="O_emailSignUpT">電子郵件註冊</h2>
                        <div >
                            <form className="O_form_big" name="O_form_1">
                            <h2>*號為必填項目</h2>
                                <div className="O_form" >
                                    <label className="O_label" htmlFor="email">*電子郵件</label>
                                    <input type="email" id="email" className="form-control O_input" name="member_email" value={this.state.member_email}
                                    placeholder="&nbsp;&nbsp;請輸入電子郵件"  onChange={this.changeNameHandler}/>
                                    <span className="O_errorMsg O_errorMsg_email">&nbsp;&nbsp;&nbsp;&nbsp;請輸入正確電子郵件</span> 
                                    <span className="O_errorMsg_mail2" id="O_errorMsg_email2">&nbsp;&nbsp;&nbsp;&nbsp;電子郵件格式不正確，請輸入包含@之電子郵件</span> 

                                </div>          
                                <div className="O_form">
                                    <label className="O_label" htmlFor="name">*姓名</label>
                                    <input type="text" id="name"  className="form-control O_input" name="member_name"  value={this.state.member_name}
                                    placeholder="&nbsp;&nbsp;請輸入姓名" onChange={this.changeNameHandler}/>
                                    <span className="O_errorMsg">&nbsp;&nbsp;&nbsp;&nbsp;請輸入姓名</span>
                                </div>   
                                <div className="O_form_data">
                                    <label className="O_label" htmlFor="password" >*密碼</label>
                                    <input type="password" id="member_password"  className="form-control O_input" name="member_password" value={this.state.member_password }
                                     placeholder=" 請輸入密碼"onChange={this.changeNameHandler}/>
                                    <span className="O_errorMsg">&nbsp;&nbsp;&nbsp;&nbsp;請輸入密碼</span>
                                </div>
                                <div className="O_form_data">
                                    <label className="O_label" htmlFor="password" >*再次確認密碼</label>
                                    <input type="password" id="member_password2"  className="form-control O_input" name="member_password2" value={this.state.member_password2}
                                    placeholder=" 請再次輸入密碼"onChange={this.changeNameHandler} />
                                    <span className="O_errorMsg">&nbsp;&nbsp;&nbsp;&nbsp;請再次輸入密碼</span>
                                    <span className="O_chk_password" id="chk_password">&nbsp;&nbsp;&nbsp;&nbsp;密碼輸入不一致</span>
                                </div>
                                <div className="O_form_data">
                                    <label className="O_label" htmlFor="birthday">&nbsp;生日</label>
                                    <input type="date" id="member_birthday"  name="member_birthday" className="form-control O_input"
                                     value={this.state.member_birthday} onChange={this.changeNameHandler} />
                                </div>
                                <div className="O_form_data">
                                    <label className="O_label" htmlFor="mobile">*手機號碼</label>
                                    <input type="mobile" id="mobile" className="form-control O_input" name="member_mobile" value={this.state.member_mobile}
                                    placeholder="&nbsp;&nbsp;請輸入手機"onChange={this.changeNameHandler}/>
                                    <span className="O_errorMsg">&nbsp;&nbsp;&nbsp;&nbsp;請輸入正確手機號碼</span>
                                    <span className="O_errorMsg_mobile2" id="O_errorMsg_mobile2">&nbsp;&nbsp;&nbsp;&nbsp;手機格式不正確，請輸入包含09開頭之10碼</span> 

                                </div>
                                <div className="O_form_data">
                                    <label className="O_label" htmlFor="address" id="address">&nbsp;地址</label>
                                    {/* <select className="O_select">
                                        <option value="Taipei City">台北市</option>
                                        <option value="New Taipei City">新北市</option>
                                        <option value="Taoyuan City">桃園市</option>
                                        <option value="Hsinchu City">新竹市</option>
                                        <option value="Hsinchu County">新竹縣</option>
                                        <option value="Miaoli County">苗栗縣</option>
                                        <option value="Taichung City">台中市</option>
                                        <option value="Changhua County ">彰化市</option>
                                        <option value="Yunlin County">雲林縣</option>
                                        <option value="Chiayi City">嘉義市</option>
                                        <option value="Chiayi County">嘉義縣</option>
                                        <option value="Tainan City ">台南市</option>
                                        <option value="Nantou County">南投縣</option>
                                        <option value="Kaohsiung City">高雄市</option>
                                        <option value="Pingtung County">屏東縣</option>
                                        <option value="Taitung County">台東縣</option>
                                        <option value="Hualien County">花蓮縣</option>
                                        <option value=" Keelung City">基隆市</option>
                                        <option value="Yilan County">宜蘭縣</option>
                                        <option value="Kinmen County">金門縣</option>
                                        <option value="Penghu County">澎湖縣</option>

                                    </select> */}
                              
                                    <input type="text" id="address"  className="form-control O_input" name="member_address" value={this.state.member_address}
                                    onChange={this.changeNameHandler} placeholder="&nbsp;&nbsp; 請輸入聯絡地址"/>
                                </div>
                                
                                <div className="O_dashedLine"></div>
                                
                                    <button  type="submit" className="O_add_btn" onClick={this.submitAdd}>確認送出</button>

                                
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                </React.Fragment>

        )
    }
}

export default Add_member;