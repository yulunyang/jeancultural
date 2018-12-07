import React, { Component } from 'react';

import './Cart_info.scss';
import $ from 'jquery';

class Cart_info_creditcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditCard:{
                creditName:"",
                creditNum:"",
                creditMonth:"",
                creditYear:"",
                creditCVC:""
            }
        };
    }
    changeNameHandler = (evt)=>{
        let inputName = evt.target.name;
        let inputValue = evt.target.value;
        this.setState( prevState =>{
            return{
                creditCard: {
                    ...prevState.creditCard, [inputName]: inputValue
                }
            }
        }, ()=>this.props.onCreditCardChange(this.state))
        
        // 限制信用卡號碼格式(每4碼為1組)
        $('#creditNum').keyup(function(){
            var val = $(this).val();
            val = val.replace(/(\d  {4})(?=\d)/g, "$1-");
            $(this).val(val);
        });
    }
    render() {
        return (
            <React.Fragment>
                <h3>信用卡/VISA金融卡</h3>
                <div className="K_line_cart_info"></div>
                <div className="K_form-group_cart_info">
                    <label htmlFor="creditName">持卡人姓名</label>
                    <input type="text" name="creditName" id="creditName" 
                    value={this.state.creditCard.creditName} onChange={this.changeNameHandler}></input>
                    <span className="errorMsg">請輸入姓名</span>
                </div>
                <div className="K_form-group_cart_info">
                    <label htmlFor="creditNum">信用卡號碼</label>
                    <input type="text" name="creditNum" id="creditNum" placeholder="xxxx-xxxx-xxxx-xxxx" maxLength="19"
                    value={this.state.creditCard.creditNum} onChange={this.changeNameHandler}></input>
                    <span className="errorMsg">請輸入正確的信用卡號碼</span>
                </div>
                <div className="K_form-group_cart_info">
                    <label htmlFor="creditMonth">到期日</label>
                    <input type="text" name="creditMonth" id="creditMonth" placeholder="MM" maxLength="2"
                    value={this.state.creditMonth} onChange={this.changeNameHandler}></input>
                    <span>月</span>
                    <input type="text" name="creditYear" id="creditYear" placeholder="YY" maxLength="2"
                    value={this.state.creditCard.creditYear} onChange={this.changeNameHandler}></input>
                    <span>年</span>
                    <span className="errorMsg">請輸入正確的到期日</span>
                </div>
                <div className="K_form-group_cart_info">
                    <label htmlFor="creditCVC">安全驗證碼(3碼)</label>
                    <input type="text" name="creditCVC" id="creditCVC" placeholder="xxx" maxLength="3"
                    value={this.state.creditCard.creditCVC} onChange={this.changeNameHandler}></input>
                    <span className="errorMsg">請輸入正確的驗證碼</span>
                </div>
                <div className="K_line_cart_info"></div>
            </React.Fragment>
        );
    }
}
export default Cart_info_creditcard;