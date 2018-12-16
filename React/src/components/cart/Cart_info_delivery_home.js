import React, { Component } from 'react';

import './Cart_info.scss';



class Cart_info_delivery_home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryHome:{
                time:"none",
                remarks:"none",
                userName:"",
                mobile:"",
                address_county:"Taipei",
                address_district:"Daan district ",
                address:""  
            }
        }
    }
    changeNameHandler = (evt)=>{
        
        let inputName = evt.target.name;
        let inputValue = evt.target.value;
        this.setState( prevState =>{
            return{
                deliveryHome: {
                    ...prevState.deliveryHome, [inputName]: inputValue
                }
            }
        }, ()=>this.props.onDeliveryHomeChange(this.state)
    )}
    optionChangeHandle = (evt)=>{
        this.setState({
            selectedOption: evt.target.value
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className={this.props.deliveryHomeState===true ? "K_step_show":"K_step_hidden"}>
                    <div className="K_form-group_cart_info">
                        <label htmlFor="none">宅配時段</label>
                        <select id="time" name="time" 
                        value={this.state.deliveryHome.time} onChange={this.changeNameHandler}>
                            <option value="none">不指定</option>
                            <option value="morning">8:00~13:00</option>
                            <option value="evening">13:00~17:00</option>
                        </select>
                    </div>
                    <div className="K_form-group_cart_info">
                        <label htmlFor="remarks">備註</label>
                        <select id="remarks" name="remarks" 
                        value={this.state.deliveryHome.remarks} onChange={this.changeNameHandler}>
                            <option value="none">無</option>
                            <option value="no_holidays">假日不配送</option>
                        </select>
                    </div>
                    <div className="K_form-group_cart_info">
                        <label htmlFor="userName" id="name_lab">收件人姓名</label>
                        <input type="text" name="userName" id="userName" 
                        value={this.state.deliveryHome.userName} onChange={this.changeNameHandler} ></input>
                        <span className="errorMsg">請輸入姓名</span>
                    </div>
                    <div className="K_form-group_cart_info">
                        <label htmlFor="mobile" id="mobile_lab">手機</label>
                        <input type="mobile" name="mobile" id="mobile" pattern="/^09[0-9]{8}$/,/^[0-9]+$/" maxLength="10"  
                        value={this.state.deliveryHome.mobile} onChange={this.changeNameHandler}></input>
                        <span className="errorMsg">請輸入正確的手機號碼</span>
                    </div>
                    <div className="K_form-group_cart_info">
                        <label htmlFor="address_county" id="address_lab">地址</label>
                        <select id="address_county" name="address_county"
                        value={this.state.deliveryHome.address_county} onChange={this.changeNameHandler}>
                            <option value="Taipei">台北市</option>
                            <option value="New Taipei">新北市</option>
                        </select>
                        <select id="address_district" name="address_district"
                        value={this.state.deliveryHome.address_district} onChange={this.changeNameHandler}>
                            <option value="Daan district">大安區</option>
                            <option value="Zhongshan district">中山區</option>
                        </select>
                        <input type="text" name="address" id="address" size="50"
                        value={this.state.deliveryHome.address} onChange={this.changeNameHandler}></input>
                        <span className="errorMsg">請輸入地址</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }   
}
export default Cart_info_delivery_home;