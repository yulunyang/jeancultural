import React, { Component } from "react";
import "./buy_items.scss";
import Sidemenu from "./Sidemenu";
import Buyitems_banner from "./Buyitems_banner";
import Pag_items from "./Pag_items";
import { oneLine } from "common-tags";
import Pag_items_list from "./Pag_items_list";
import { Link } from "react-router-dom";

class Buy_items extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      Brand: "",
      parent_sid: "",
      level: ""
    };

    this.state = {
      products_brand: [],
      product_all: [],
      Products_filter: [],
      Discount_price: [],
      sortType: "" | "asc" | "desc" //排序test
    };
  }
  componentDidMount() {
    let sid = this.props.match.params.sid;
    // console.log(sid);
    this.getProducts_brand();
    this.getAllProducts();
    this.getGoods_list();
    this.getProducts_filter(sid);
  }

  getProducts_filter = sid => {
    fetch("/api/goods_list/" + sid)
      .then(res => res.json())
      .then(Products_filter =>
        this.setState({
          Products_filter: Products_filter
        })
      );
  };

  getProducts_brand() {
    fetch("/api/products_brand/")
      .then(res => res.json())
      .then(data => {
        //  console.log(JSON.stringify(data));
        this.setState({
          Products_brand: data
        });
      });
  }

  getAllProducts() {
    fetch("/api/goods")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          product_all: data
        });
      });
  }

  getGoods_list = sid => {
    fetch("/api/goods_list/" + sid)
      .then(res => res.json())
      .then(Goods_list =>
        this.setState({
          Goods_list: Goods_list
        })
      );
  };

  getCategoryProducts() {
    fetch("/api/goods/:category")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          product_all: data
        });
      });
  }


  render() {
    return (
      <React.Fragment>
            {/* shop banne */}
        <Buyitems_banner Products_brand={this.state.Products_brand}modify={this.modify}/>
        <div className="T_container">
        <div className="T_shop_all">
            {/* 側邊選單 */}
            <Sidemenu />
            {/* 商店商品 */}
            <Pag_items_list Products_filter={this.state.Products_filter}  modify={this.modify}/>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Buy_items;
