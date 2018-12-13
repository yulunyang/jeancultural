import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      Brand: "",
      parent_sid: "",
      level: "",
      sid: ""
    };

    this.state = {
      Products_brands:[],
    };

  }

  componentDidMount() {
    this.getProducts_brand()
  
  }
  getProducts_brand = (sid) => {
    fetch("/api/goods_list/"+sid)
      .then(res => res.json())
      .then(Products_brands => this.setState({
        Products_brands:Products_brands,
      }))     
  }

  render() {
    const style = {
      cursor: 'pointer',
      padding: '5px'
      ,'hover': {
        padding: '5px',
        color:'#fff',
        background:'$orange_color'
      } 
    };

  
    const datas = [
    {"sid":1,"Brand":"Wooderful life","parent_sid":0,"level":1},
    {"sid":2,"Brand":"來趣","parent_sid":0,"level":1},
    {"sid":3,"Brand":"紙風景","parent_sid":0,"level":1},
    {"sid":4,"Brand":"繡","parent_sid":0,"level":1},
    {"sid":5,"Brand":"I-Marker","parent_sid":0,"level":1},
    {"sid":6,"Brand":"Funtape","parent_sid":0,"level":1},
    {"sid":1,"Brand":"旋轉音樂鈴","parent_sid":1,"level":2},
    {"sid":2,"Brand":"授權聯名款","parent_sid":1,"level":2},
    {"sid":3,"Brand":"來趣-找黑熊系列","parent_sid":2,"level":2},
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
          
          //  <ul className="T_products_sidemenu">
          //   {level1s.map((level)=>{
                // let level2s = datas.filter(function (data) {
                //    return data.parent_sid === level.sid;
                // });
          //       return (
          //         <li className="T_sidemenu_title" >{level.Brand}
          //            <ul >
                       
          //              {this.state.Products_brands.map(Products_brand => 
          //                 <li className="T_sidemenu_list_li" style={style}>
                            
          //                 <a className="00" href={(`/buy_items/buy_items_list/${Products_brand.category}`)}> {Products_brand.items}</a>
          //                 </li>
          //               )}
                           
                           
                          
          //            </ul>                  
          //         </li>)
          //    })} 
                    
          // </ul>     
          <ul className="T_products_sidemenu">
            {level1s.map((level)=>{
                // let level2s = datas.filter(function (data) {
                //    return data.parent_sid === level.sid;
                // });
                let level2s = datas.filter(function (data) {
                  return data.parent_sid === level.sid;
               });
                return (
                  
                  <li className="T_sidemenu_title" >{level.Brand}
                     <ul >   
                          
                     {level2s.map((level)=>{
                             return (
                            <li className="T_sidemenu_list_li" style={style}> 
                             <a href={(`/Pag_items_list/${level.sid}`)}> {level.Brand}</a>
                             </li>   )
                          })}

                                       
                          
                     </ul>                  
                  </li>)
             })} 
                    
          </ul>    
            
    );
   
    // componentDidMount = () => {

    // $(".T_sidemenu_title").click(function(){
    //   $(this).toggleClass('active');
    // });  
           
  
  }

}
export default Sidemenu;
