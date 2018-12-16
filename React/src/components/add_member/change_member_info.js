import React, { Component } from 'react';
import "./change_member_info.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Change_member_info extends Component{
    constructor(props){
        super(props);
        this.initState = {
            member_email:"",
            member_name:"",
            member_password:"",
            // member_password2:"",
            member_birthday: "",
            member_mobile: "",
            member_address: "",            
        }


        this.state = {
            member:[],
            member_email:"",
            member_name:"",
            member_password:"",
            // member_password2:"",
            member_birthday: "",
            member_mobile: "",
            member_address: "",     
            
                      
       }  
    }
    
    
    componentDidMount=()=> {
        this.getMemberContent();
        // console.log(this.state)
    };

    

    getMemberContent() {
        
        fetch("/api/members/",{
            method: 'GET',
            mode: 'cors'
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
        console.log(data[0]);
            this.setState({
               // member:data,
                ...data[0]       //將資料展開丟入表格           
            })
        
        
        })

    };
    

    
    

    changeNameHandler = (evt)=>{
        const inputName = evt.target.name;
        let inputValue = evt.target.value;
        console.log(inputValue);
        this.setState({
            [inputName]: inputValue
        });
    };

    putData=()=>{
        
        fetch("/api/members", {
            method:"PUT",
            mode: 'cors',
            body:JSON.stringify(this.state),
            headers:new Headers({
                "content-Type":'application/json'
            })
        })
        .then(res => res.json())
        .then(data=>{
            alert(data.message)
        })
        .then(this.props.history.push("/member_list"));
    }

    

    render(){
        
        return(
            
            <React.Fragment>
            <div className="O_white_background_member_add">
            <div className="O_container">
            
                <div className="O_SignUpT"><h2>修改會員資料</h2></div>
               
                
                <div className="O_emailSignUp">
                    <h2 className="O_emailSignUpT">會員資料</h2>
                    <div >
                   
                        <form className="O_form_big" name="O_form_1">
                            <div className="O_form" >
                                <label className="O_label" htmlFor="email">*電子郵件</label>
                                <input type="email" id="email" className="form-control O_input" name="member_email" value={this.state.member_email}
                                placeholder="&nbsp;&nbsp;請輸入電子郵件" onChange={this.changeNameHandler}  />
                                <span className="O_errorMsg O_errorMsg_email">&nbsp;&nbsp;&nbsp;&nbsp;請輸入正確電子郵件</span> 
                                <span className="O_errorMsg_mail2" id="O_errorMsg_email2">&nbsp;&nbsp;&nbsp;&nbsp;電子郵件格式不正確</span> 

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
                            {/* <div className="O_form_data">
                                <label className="O_label" htmlFor="password" >*再次確認密碼</label>
                                <input type="password" id="member_password2"  className="form-control O_input" name="member_password2" value={this.state.member_password2}
                                placeholder=" 請再次輸入密碼"onChange={this.changeNameHandler} />
                                <span className="O_errorMsg">&nbsp;&nbsp;&nbsp;&nbsp;請再次輸入密碼</span>
                                <span className="O_chk_password" id="chk_password">&nbsp;&nbsp;&nbsp;&nbsp;密碼輸入不一致</span>
                            </div> */}
                            <div className="O_form_data">
                                <label className="O_label" htmlFor="birthday">&nbsp;生日</label>
                                <input type="date" id="member_birthday" name="member_birthday" className="form-control O_input" 
                                 value={this.state.member_birthday } onChange={this.changeNameHandler} />
                            </div>
                            <div className="O_form_data">
                                <label className="O_label" htmlFor="mobile">*手機號碼</label>
                                <input type="mobile" id="mobile" className="form-control O_input" name="member_mobile" value={this.state.member_mobile}
                                placeholder="&nbsp;&nbsp;請輸入手機"onChange={this.changeNameHandler}/>
                                <span className="O_errorMsg">&nbsp;&nbsp;&nbsp;&nbsp;請輸入正確手機號碼</span>

                            </div>
                            <div className="O_form_data">
                                <label className="O_label" htmlFor="address" id="address">&nbsp;地址</label>                      
                                <input type="text" id="address"  className="form-control O_input" name="member_address" value={this.state.member_address}
                                onChange={this.changeNameHandler} placeholder="&nbsp;&nbsp; 請輸入聯絡地址"/>
                            </div>
                            
                            <div className="O_dashedLine"></div>
                            
                            <button  type="submit" className="O_add_btn" onClick={this.putData} >確認修改</button>

                            
                        </form>
                    
                    </div>
                </div>
            </div>
            </div>

            </React.Fragment>
        )
    }
}

export default Change_member_info;