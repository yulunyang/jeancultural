import React, { Component } from 'react';
import $ from 'jquery';
import{Link} from 'react-router-dom'

class Pag_items_list extends Component {
  constructor(props) {
    super(props);
    
  }
 
  render() {
    // console.log(this.props.Products_brands)
    return (
      <React.Fragment>
<div className="T_product_all">
     
     {/* <div className="T_product_all"> */}
       {this.props.Products_filter.map(Products_filter =>
         // <div className="page">
         //   <div className="card-body">
         //   <img src={require(`./images/${goods.mainpic_dir}`)} alt="商品圖" />
         //   </div>
         // </div>
         <div className="T_product_body"> 
         <Link className="00" to={(`/Product_page/${Products_filter.sid}`)}>
       <div className="T_product_pic" 
       onClick={this.clickHandlerPic} data-name={Products_filter.good_name}
         data-numbering={Products_filter.price}data-pay={Products_filter.price} data-sid={Products_filter.sid}>
        <img src={require(`./images/${Products_filter.mainpic_dir}`)} alt="商品圖" />
        </div>
        </Link>
       <div className="T_Product_name">
                  <div className="T_which_box">
                      <p className="T_which_box_name" data-sid={Products_filter.price}>{Products_filter.good_name}</p>
                  </div>
                  <br />
                  <div className="T_Product_price">NT$
                      <p className="T_how_much_pay" id="T_how_much_pay" data-sid={Products_filter.sid}>{Products_filter.price}</p>
                  </div>
              </div> 
       </div> 
       )}
    </div> 
      </React.Fragment>
    );
  }
}

export default Pag_items_list;