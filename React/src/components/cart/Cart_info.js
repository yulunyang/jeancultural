import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Cart_steps from './Cart_steps.js';
import Cart_info_delivery_home from './Cart_info_delivery_home.js';
import Cart_info_delivery_store from './Cart_info_delivery_store.js';
import Cart_info_creditcard from './Cart_info_creditcard.js';

import './Cart_info.scss';
import $ from 'jquery';

class Cart_info extends Component{
    constructor(props){
        super(props);
        this.state = {
            deliveryStore:{},
            deliveryHome:{},
            creditCard:{},
            selectedOption:"paper",
            addressCountyReceipt:"Taipei",
            addressDistrict:"Daan district",
            address:"",
            tax_id:"",
            acceptChecked:false,
            stepStyle2:true,
        };
    };
    optionChangeHandle = (evt)=>{
        this.setState({
            selectedOption: evt.target.value
        });
        if(evt.target.value === "paper"){
            $(".addressReceipt").css("display","block");
        } else{
            $(".addressReceipt").css("display","none");
        }
        if(evt.target.value === "company"){
            $(".tax_id").css("display","block");
        } else{
            $(".tax_id").css("display","none");
        }   
    }
    changeNameHandler_deliveryStore = (data)=>{
        this.setState(data);
    }
    changeNameHandler_deliveryHome = (data)=>{
        this.setState(data);
    }
    changeNameHandler_creditCard = (data)=>{
        this.setState(data);
    }
    changeNameHandler = (evt)=>{
        const inputName = evt.target.name;  
        let inputValue = evt.target.value;
        this.setState({
            [inputName]: inputValue
        });
    };
    checkChangeHandle = ()=>{
        this.setState({
            acceptChecked: !this.state.acceptChecked
        });
    };
    checkForm = ()=>{
        // var errorMsg = document.querySelectorAll(".errorMsg"),
        //     mobile_pattern = /^[09]{2}[0-9]{8}$/,
        //     tax_id_pattern = /^\d{8}$/,
        //     creditNum_pattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/,
        //     creditMonth_pattern = /^\d{2}$/,
        //     creditYear_pattern = /^\d{2}$/,
        //     creditCVC_pattern = /^\d{3}$/,
        //     isPass = true;

        // errorMsg.forEach(function(el){
        //     el.style.display = "none";
        // });
        
        // if(! document.form2.userName.value){                   
        //     errorMsg[0].style.display = "block"; 
        //     isPass = false;
        // };

        // if(! mobile_pattern.test(document.form2.mobile.value)){                   
        //     errorMsg[1].style.display = "block"; 
        //     isPass = false;
        // };
        
        // if(! document.form2.receipt.value){                   
        //     errorMsg[1].style.display = "block";
        //     isPass = false; 
        // };

        // if(! document.form2.address.value){                   
        //     errorMsg[3].style.display = "block"; 
        //     isPass = false;
        // };

        // if(! tax_id_pattern.test(document.form2.tax_id.value)){                   
        //     errorMsg[4].style.display = "block"; 
        //     isPass = false;
        // };

        // if(! document.form2.creditName.value){                   
        //     errorMsg[5].style.display = "block"; 
        //     isPass = false;
        // };
        
        // if(! creditNum_pattern.test(document.form2.creditNum.value)){                   
        //     errorMsg[6].style.display = "block"; 
        //     isPass = false;
        // };

        // if(! creditMonth_pattern.test(document.form2.creditMonth.value)){                   
        //     errorMsg[7].style.display = "block"; 
        //     isPass = false;
        // };

        // if(! creditYear_pattern.test(document.form2.creditYear.value)){                   
        //     errorMsg[8].style.display = "block"; 
        //     isPass = false;
        // };

        // if(! creditCVC_pattern.test(document.form2.creditCVC.value)){                   
        //     errorMsg[9].style.display = "block"; 
        //     isPass = false;
        // };

        // if(!document.form2.check.checked){
        //     errorMsg[10].style.display = 'block';
        //     isPass = false;
        // }
    
    //    return isPass;
    };
    submitHandle = (evt)=>{
        console.log(this.state);
        evt.preventDefault();   
    };
    render(){
        return(
            <React.Fragment>
                <div className="K_box_cart">
                    <div className="K_container_cart_info">
                        <Cart_steps step2={this.state.stepStyle2}/>    
                        <div className="K_cart_info">
                            <h3>訂購資料</h3>
                            <div className="K_line_cart_info"></div>
                            <form name="form2" onSubmit= {this.submitHandle} >
                                <Cart_info_delivery_home onDeliveryHomeChange={this.changeNameHandler_deliveryHome}/>
                                {/* <Cart_info_delivery_store onDeliveryStoreChange={this.changeNameHandler_deliveryStore}/> */}
                                <div className="K_line_cart_info"></div>
                                <div className="K_form-group_cart_info">
                                    <label htmlFor="receipt">發票資訊</label>
                                    
                                    <input type="radio" id="receipt-paper" name="receipt" 
                                    value="paper" checked={this.state.selectedOption === "paper"}
                                    onChange={this.optionChangeHandle}/>
                                    <span>實體發票</span> 
                                    
                                    <input type="radio" id="receipt-electronic" name="receipt" 
                                    value="electronic" checked={this.state.selectedOption === "electronic"}
                                    onChange={this.optionChangeHandle}/>
                                    <span>電子發票</span> 
                                    
                                    <input type="radio" id="receipt-company" name="receipt" 
                                    value="company" checked={this.state.selectedOption === "company"}
                                    onChange={this.optionChangeHandle} />
                                    <span>統編(公司戶)發票</span> 
                                    
                                    <input type="radio" id="receipt-donate" name="receipt" 
                                    value="donate" checked={this.state.selectedOption === "donate"}
                                    onChange={this.optionChangeHandle}/>
                                    <span>捐贈發票</span>
                                    <span className="errorMsg">請選擇發票資訊</span> 
                                </div>
                                <div className="K_form-group_cart_info addressReceipt">
                                    <label htmlFor="addressCountyReceipt">中獎發票寄送地址</label>
                                    
                                    <select id="addressCountyReceipt" name="addressCountyReceipt"
                                    value={this.state.addressCountyReceipt} onChange={this.changeNameHandler}>
                                        <option value="Taipei">台北市</option>
                                        <option value="New Taipei">新北市</option>   
                                    </select>
                                    
                                    <select id="addressDistrict" name="addressDistrict"
                                    value={this.state.addressDistrict} onChange={this.changeNameHandler}>
                                        <option value="Daan district">大安區</option>
                                        <option value="Zhongshan district">中山區</option>   
                                    </select>
                                    
                                    <br/><input type="text" name="address" id="address" size="50"
                                    value={this.state.address} onChange={this.changeNameHandler}></input>
                                    <span className="errorMsg">請輸入地址</span>
                                </div>
                                <div className="K_form-group_cart_info display tax_id">
                                    <label htmlFor="tax_id">統一編號</label>
                                    <input type="text" name="tax_id" id="tax_id"
                                    value={this.state.tax_id} onChange={this.changeNameHandler}></input>
                                    <span className="errorMsg">統一編號不可為空白或格式錯誤</span>
                                </div>
                                <h4>核准文號：北區國稅北縣三字第1000002660號，電子發票說明。</h4>
                                <h4>依統一發票使用辦法規定：發票一經開立不得任意更改或改開發票。</h4>
                                <Cart_info_creditcard onCreditCardChange={this.changeNameHandler_creditCard}/>
                                <div className="K_form-group_cart_info">
                                    <input type="checkbox" id="acceptChecked" name="acceptChecked"
                                    defaultChecked={this.state.acceptChecked}
                                    onChange={this.checkChangeHandle}></input>我同意接受知音文創服務條款和隱私權政策。
                                </div>
                                <span className="errorMsg">請勾選同意隱私權政策</span>  
                                <p className="K_cart_info_notice">
                                    ※ 提醒您：
                                    <br/>若您訂的商品無法於正常期限內出貨，我們將以e-mail通知您調貨狀況，如商品無法順利出貨或缺貨，
                                    <br/>為避免您久候商品，也將主動提醒您建議取消該品項。
                                    <br/>請務必檢查並確認訂購人之姓名、聯絡電話、地址，以確保商品到貨後可快速且正確的通知到您本人。
                                    <br/>如遇特殊狀況或其他不可抗力之因素或貨量不足，導致商品無法送抵，本公司得保留出貨與否之權利。
                                    <br/>訂單填寫完畢後，即表示確認且同意上述事項，日後如有爭議依本公司規定辦理。
                                    <br/>如發現惡意取消訂單達三次者，本公司將停止提供您的預訂服務。
                                </p>
                                <div className="K_cart_info_btn">
                                    <button><Link to="/cart">重選付款方式</Link></button>
                                    <button type="submit" onClick={this.checkForm}>確認訂購</button>
                                    {/* <button type="submit"><Link to="/cart/Cart_success">確認訂購</Link></button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );      
    };        
};     
export default Cart_info;