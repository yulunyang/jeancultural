import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

class Pag_items_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
    Products_filter: []
    };
    // console.log(this.props.Products_filter);
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.Products_filter !== this.props.Products_filter) {
      this.setState(
        {Products_filter: this.props.Products_filter},
        () => {
          console.log(this.state.Products_filter);
        }
      );
    }
  }

  //排序判斷
  sortItem = evt => {
    //console.log(evt.target.dataset.item);
    var products = this.state.Products_filter;
    var sortItem = evt.target.dataset.item;
    // console.log(evt.target.dataset.item);
    products.sort(function(a, b) {
      // console.log(a[sortItem]);
      if (a[sortItem] === b[sortItem]) return 0;
      if (a[sortItem] < b[sortItem]) return -1;
      if (a[sortItem] > b[sortItem]) return 1;
    });
    this.setState({ Products_filter: products });
  };

  render() {
    return (
      <React.Fragment>
        <ul className="T_products_select_box">
          <li className="T_products_select T_products_select1" data-item="discount_price" onClick={this.sortItem}>價格</li>
          <li className="T_products_select T_products_select2" data-item="sid" onClick={this.sortItem}>最新</li>
          <li className="T_products_select T_products_select3" data-item="hot" onClick={this.sortItem}> 熱銷</li>
          <li className="T_products_select T_products_select4" data-item="price" onClick={this.sortItem}>預設</li>
        </ul>
        <div className="T_product_all">
          {this.state.Products_filter.map(Products_filter => (
            <div className="T_product_body"
              data-hot-value={Products_filter.hot}>
              <Link className="00" to={`/Product_page/${Products_filter.sid}`}>
                <div
                  className="T_product_pic"
                  onClick={this.clickHandlerPic}
                  data-name={Products_filter.good_name}
                  data-numbering={Products_filter.price}
                  data-pay={Products_filter.price}
                  data-sid={Products_filter.sid}>
                  <img src={require(`./images/${Products_filter.mainpic_dir}`)} alt="商品圖"/>
                </div>
              </Link>

              <div className="T_Product_text">
                <p className="T_Product_name" data-sid={Products_filter.price}>
                  {Products_filter.good_name}
                </p>
                <p className="T_Product_price" data-sid={Products_filter.price}>
                  ${Products_filter.price}
                </p>
                <div className="T_Product_sele">NT$
                 <p className="T_how_much_pay"id="T_how_much_pay" data-sid={Products_filter.sid}>{Products_filter.discount_price}
                  </p>
                </div>
              </div>
            </div>
          ))}
           
        </div>
      </React.Fragment>
    );
  }
}

export default Pag_items_list;
