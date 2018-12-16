import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Buyitems_banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products_brand: []
    };
  }
  
  // componentDidUpdate(previousProps, previousState) {
  //   if (previousProps.Products_brand !== this.props.Products_brand) {
  //     this.setState(
  //       {Products_brand: this.props.Products_brand},
  //       () => {
  //         console.log(this.state.Products_brand);
  //       }
  //     );
  //   }
  // }

  componentDidMount() {
    this.getProducts_brand();
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
        <div className="T_long_color" />
        {this.state.Products_brand.map(Products_brand => (
        <div className="T_buy_items_banner">
          <figure className="T_buy_items_banner_pic">
            <img src={require(`./images/${Products_brand.	brand_pic}`)} alt="buy_items_banner"/>      
          </figure> 
          <div className="T_banner_logo">
            <img className="T_banner_logo_text" src="/images/brand_logo/wonderful.svg" alt="Wooderful"/>
          </div>
          <div className="T_banner_text">
            <span>
              木與自然，聯繫著人與萬物，人與木無法分離，亦如人有了木的庇護才得以休息。{Products_brand.Brand}
              <br />
              Wooderful
              life取自於＂木與美好生活＂的字義，用原木的溫暖點綴生活，讓自然流露出的溫潤特質
              <br />
              ，透過木的不同風貌賦予新的生命，也讓生活中擁有值得體會的溫度。
            </span>         
          </div> 
        </div>
                 ))} 
      </React.Fragment>
    );
  }
}

export default Buyitems_banner;
