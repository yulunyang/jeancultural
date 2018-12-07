import React, { Component } from "react";
import "./buy_items.scss";
import Sidemenu from "./Sidemenu";
import Buyitems_banner from "./Buyitems_banner";
import Pag_items from "./Pag_items";
import { oneLine } from "common-tags";
import Pag_items_list from "./Pag_items_list";
import{Link} from 'react-router-dom'

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
      Products_filter:[]
      // goods_list: []
      // product_test: []
      // products_brand: this.initState,
      // type: "add"
    };
  }
  componentDidMount() {
    let sid = this.props.match.params.sid
    console.log(sid)
    this.getProducts_brand();
    this.getAllProducts();
    this.getGoods_list();
    this.getProducts_filter(sid);
  }
  getProducts_filter = (sid) => {
    fetch("http://localhost:3000/api/goods_list/"+sid)
      .then(res => res.json())
      .then(Products_filter => this.setState({
        Products_filter:Products_filter,
      }))
       
      
  }

  getProducts_brand() {
    fetch("http://localhost:3000/api/products_brand/")
      .then(res => res.json())
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({
          Products_brand: data
        });
      });
  }

  getAllProducts() {
    fetch("http://localhost:3000/api/goods")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          product_all: data
        });
      });
  }

  getGoods_list = (sid) => {
    fetch("http://localhost:3000/api/goods_list/"+sid)
      .then(res => res.json())
      .then(Goods_list => this.setState({
        Goods_list: Goods_list,
      }))     
  }

  getCategoryProducts() {
    fetch("http://localhost:3000/api/goods/:category")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          product_all: data
        });
      });
  }
  render() {
    console.log(this.state.product_all);

      // const style = {
      //   cursor: 'pointer',
      //   padding: '5px'
      //   ,'hover': {
      //     padding: '5px',
      //     color:'#fff',
      //     background:'$orange_color'
      //   } 
      // };
        const datas = [
          {"sid":1,"Brand":"Wooderful life","parent_sid":0,"level":1},
          {"sid":2,"Brand":"來趣","parent_sid":0,"level":1},
          {"sid":3,"Brand":"紙風景","parent_sid":0,"level":1},
          {"sid":4,"Brand":"繡","parent_sid":0,"level":1},
          {"sid":5,"Brand":"I-Marker","parent_sid":0,"level":1},
          {"sid":6,"Brand":"Funtape","parent_sid":0,"level":1},
          {"sid":7,"Brand":"旋轉音樂鈴","parent_sid":1,"level":2},
          {"sid":8,"Brand":"授權聯名款","parent_sid":1,"level":2},
          {"sid":10,"Brand":"來趣-找黑熊系列","parent_sid":2,"level":2},
          {"sid":11,"Brand":"來趣-找謝謝系列","parent_sid":2,"level":2},
          {"sid":12,"Brand":"DIY紙花圈","parent_sid":3,"level":2},
          {"sid":13,"Brand":"瓶中景","parent_sid":3,"level":2},
          {"sid":14,"Brand":"十字繡","parent_sid":4,"level":2},
          {"sid":15,"Brand":"生活雜貨","parent_sid":4,"level":2},
          {"sid":16,"Brand":"i-Maker","parent_sid":5,"level":2},
          {"sid":17,"Brand":"單色系列","parent_sid":6,"level":2},
          {"sid":18,"Brand":"旅行系列","parent_sid":6,"level":2},
          {"sid":19,"Brand":"節日系列","parent_sid":6,"level":2}
        ];

        let level1s = datas.filter(function (data) {
          return data.level === 1;
        });
     

    return (
      <React.Fragment>
        <Buyitems_banner />
        {/* shop banne */}

        <div className="T_container">
          <div className="T_shop_all" />
          　{/* 商品篩選器↓ */}
          <ul className="T_products_select_box">
            <li className="T_products_select_list">價格</li>
            <li className="T_products_select_list">最新</li>
            <li className="T_products_select_list">熱銷</li>
            <li className="T_products_select_list">預設</li>
          </ul>
          {/* 側邊選單 */}  
          <Sidemenu />

          {/* 商店商品 */}

                
          <Pag_items_list Products_filter={this.state.Products_filter} />    
      

          {/* pages-Pagination */}
          {/* <div class="T_pages_items_box"> */}
                    
   
          
        {/* </div>    */}
              
          </div>
      </React.Fragment>
    );
  }
}

export default Buy_items;
