import React, { Component } from 'react';

import './Cart_info.scss';

class Cart_info_delivery_store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryStore:{
                pickup_store:"7-11",
                userName:"",
                mobile:""
            }
        };
    }
    changeNameHandler = (evt)=>{
        let inputName = evt.target.name;
        let inputValue = evt.target.value;
        this.setState( prevState =>{
                return{
                    deliveryStore: {
                        ...prevState.deliveryStore, [inputName]: inputValue
                    }
                }
            }, ()=>this.props.onDeliveryStoreChange(this.state)
        )
    }
    render() {
        return (
            <React.Fragment>
                <div className="K_form-group_cart_info">
                    <label htmlFor="pickup_store">取貨商店</label>
                    <select id="pickup_store" name="pickup_store" 
                    value={this.state.deliveryStore.pickup_store} onChange={this.changeNameHandler}>
                        <option value="7-11">7-11</option>
                        <option value="family">全家</option>
                        <option value="Hi-Life">萊爾富</option>
                        <option value="OK-Mart">OK Mart</option>
                    </select>
                </div>
                <div className="K_form-group_cart_info">
                    <span className="K_pickup_store_address">取貨門市：南雅門市</span>
                </div>
                <div className="K_form-group_cart_info">
                    <span className="K_pickup_store_address">門市地址：新北市板橋區新興里南雅南路一段8號1樓</span>
                </div>
                <div className="K_form-group_cart_info">
                    <button className="K_select_store_btn">選擇門市</button>
                </div>
                <p className="K_cart_info_notice_s">
                    ※ 若常用門市沒有在列表中，可能是該門市已暫停提供取貨服務。  
                </p>
                <div className="K_form-group_cart_info">
                    <label htmlFor="userName">收件人姓名</label>
                    <input type="text" name="userName" id="userName"
                    value={this.state.deliveryStore.userName} onChange={this.changeNameHandler}></input>
                    <span className="errorMsg">請輸入姓名</span>
                </div>
                <div className="K_form-group_cart_info">
                    <label htmlFor="mobile">手機</label>
                    <input type="text" name="mobile" id="mobile" maxLength="10"
                    value={this.state.deliveryStore.mobile} onChange={this.changeNameHandler}></input>
                    <span className="errorMsg">請輸入正確的手機號碼</span>
                </div>
            </React.Fragment>
        );
    }
}
export default Cart_info_delivery_store;