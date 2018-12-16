import React, { Component } from "react";
import "./buy_items.scss";
import Sidemenu from "./Sidemenu";
import Buyitems_banner from "./Buyitems_banner";
import Pag_items from "./Pag_items";
import { oneLine } from "common-tags";
import { Link } from "react-router-dom";
import $ from "jquery";

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
    };
  }
  
  componentDidMount() {
    let sid = this.props.match.params.sid;
    console.log(sid);
    this.getProducts_brand();
    this.getProducts_color();
  }

  getProducts_color() {
    $(".T_products_select").on("click", function() {
    });
  }

  getProducts_brand() {
    fetch("/api/products_brand/")
      .then(res => res.json())
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({
          Products_brand: data
        });
      });
  }

  render() {

    return (
      <React.Fragment>
         <Buyitems_banner  Products_brand={this.state.Products_brand} />

        {/* shop banne */}
        <div className="T_container">
        <div className="T_shop_all">                    
            {/* 側邊選單 */}
            <Sidemenu />
            {/* 商店商品 */}
            <Pag_items />
        </div>
        </div>
      </React.Fragment>
      
    );
  }
}

export default Buy_items;
