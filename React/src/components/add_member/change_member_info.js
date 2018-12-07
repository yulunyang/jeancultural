import React, { Component } from 'react';
import "./change_member_info.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Change_member_info extends Component{
    constructor(props){
        super(props);
        this.state = {
            member_email:"",
            member_name:"",
            member_keyword:"",
            member_birthday:"",
            member_mobile:"",
            member_address:"",
                      
       }  
    }

    changeNameHandler = (evt)=>{
        const inputName = evt.target.name;
        let inputValue = evt.target.value;
        this.setState({
            [inputName]: inputValue
        });
    };

    // putData=(evt)=>{
    //     evt.preventDefault();
    //     var isPass = true;

    //     if (isPass) {
    //         fetch("http://localhost:3000/api/members", {
    //             method:"PUT",
    //             body:JSON.stringify(this.state),
    //             headers:new Headers({
    //                 "content-Type":'application/json'
    //             })
    //         })
    //         .then(res => res.json())
    //         .then(data=>{
    //             alert(data.message)
    //         })
    //     }
    // }


    // handleChange = (evt) => {
    //     let key = evt.target.id;
    //     let value = evt.target.value;
    //     this.setState({
    //         [key]:value,           
    //     })
    // }

    

    render(){
        return(
            <React.Fragment>
                <div className="O_white_background_member_add">
                    <div className="O_container">                    
                        <div className="O_SignUpT"><h2>修改會員資料</h2></div>                        
                        <div className="O_emailSignUp">                            
                            <div >
                                <form className="O_form_big">
                                    <div className="O_form">
                                        <label className="O_label" htmlFor="email">*電子郵件</label>
                                        <input type="email" id="email" className="form-control O_input" placeholder="&nbsp;&nbsp;Email 請輸入電子郵件"/>
                                    </div>          
                                    <div className="O_form">
                                        <label className="O_label" htmlFor="name">*姓名</label>
                                        <input type="text" id="name"  className="form-control O_input" placeholder="&nbsp;&nbsp;Name 請輸入姓名"/>
                                    </div>   
                                    <div className="O_form_data">
                                        <label className="O_label" htmlFor="password">*密碼</label>
                                        <input type="password" id="password"  className="form-control O_input" placeholder="&nbsp;&nbsp;Password 請輸入密碼"/>
                                    </div>
                                    <div className="O_form_data">
                                        <label className="O_label" htmlFor="password">*再次確認密碼</label>
                                        <input type="password" id="password"  className="form-control O_input" placeholder="&nbsp;&nbsp;Check Password 請再次輸入密碼"/>
                                    </div>
                                    <div className="O_form_data">
                                        <label className="O_label" htmlFor="birthday">&nbsp;生日</label>
                                        <input type="date" id="birthday"  className="form-control O_input" />
                                    </div>
                                    <div className="O_form_data">
                                        <label className="O_label" htmlFor="mobile">*手機號碼</label>
                                        <input type="mobile" id="mobile" className="form-control O_input" placeholder="&nbsp;&nbsp;Mobile 請輸入手機"/>
                                    </div>
                                    <div className="O_form_data">
                                        <label className="O_label" htmlFor="address">&nbsp;地址</label>
                                        <select className="O_select">
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

                                        </select>
                                
                                        <input type="text" id="address"  className="form-control O_input" placeholder="Address 請輸入聯絡地址"/>
                                    </div>
                                    
                                    <div className="O_dashedLine"></div>
                                    
                                        <button  className="O_add_btn" >確認修改</button>

                                    
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