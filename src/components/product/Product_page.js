import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./Product_pag.scss"
import $ from 'jquery';

class Product_page extends Component {
  constructor(props) {
    super(props);
      this.initState = {
        Brand: "",
        parent_sid: "",
        level: ""
      };
  
      this.state = {
        products_brand: [],
        product_all: []
        // product_test: []
        // products_brand: this.initState,
        // type: "add"
      };
    }
    componentDidMount() {
      this.getProducts_brand();
      this.getAllProducts();
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
    return (
      <React.Fragment>
        <div className="T_container">
        <div className="T_product_box">
        <div className="T_product_pic">
        {/* <img src={require(`./images/${ct.mainpic_dir}`)} alt="商品圖" /> */}
        </div>
        {/* 商品圖↑ */}
        <div className="T_product_type">
        <div className="T_product_logo">
        <img className="T_product_logo img" src="/images/toropic/funtape_logo.jpg"alt="Funtape"/>
        </div>
        <p className="T_product_titles">
        知音文創｜100選色紙膠帶<br/>
        全色系 X 100捲各一入</p>
        <div className="T_product_describe">
            <p className="T_product_text">知音文創｜100選色 ‧ 個人的色彩學
               ［100種顏色紙膠帶］<br /> 
                100種色彩的心理<br/>
                100種 生活的模樣<br/>
                100種 收藏的欲望<br/>
                It Is Your COLOR<br/>
                That Determines Your Altitude
            </p>
            <h3 className="T_product_price"> NT$<span>3000</span></h3>
            <hr/>
            <div className="T_product_select_color">
            <button className="T_product_select_color coloritem1" />
            <button className="T_product_select_color coloritem2" />
            <button className="T_product_select_color coloritem3" />
            </div>
            <div className="T_product_select_quantity">
            <select className="T_product_select_size">
              <option className="T_product_select_size1" value="30*150">30*150</option>
              <option className="T_product_select_size2" value="35*150">35*150</option>
              <option className="T_product_select_size3" value="40*150">40*150</option>
            </select>
            <select className="T_product_select_amount">
            <option className="T_product_select_amount1" value={Number}>1</option>
            <option className="T_product_select_amount2" value={Number}>2</option>
            <option className="T_product_select_amount3" value={Number}>3</option>
            </select>
            </div>
      {/* 加入購物車按鈕 */}
            <div className="T_product_add">
            <button class="T_product_add_cart" type="submit" data-price="3000">加入購物車</button>
            <button class="T_product_add_likes" type="submit" data-price="3000">加入購物清單</button>
            </div>
      </div>
         {/* 商品資訊 */}
          <div className="T_about_productbox">
              <ul class="T_product_tabs">
	          		<li class="T_product_tabs T_product_tabs1">商品規格</li>
		          	<li class="T_product_tabs T_product_tabs2">詳細說明</li>
	           		<li class="T_product_tabs T_product_tabs3">素材產地</li>
	          	</ul>
                     <div className="T_product_tab_container">
                        <ul className="T_tab_content">
                             <li><p className="T_about_product_words">
                             【紙膠帶注意事項】 <br /> 因膠可能會損壞物品表面，請在黏貼前先作重複黏貼的測試
                              ‧可使用有機溶劑清理物品表面的殘膠 ‧請勿黏貼於貴重物品
                              ‧建議使用鉛筆或油性筆書寫 【退換貨須知】
                              購買前請確實瞭解退換貨說明，以保障您的權益。 購物說明頁面
                             http://www.pcstore.com.tw/balagogo/HM/payinfo.htm
                             </p></li>
                             <li> <p className="T_about_product_words">
                                   因拍攝及螢幕會產生些微色差，故圖片僅供參考，
                                   顏色請以實際收到的商品為準。
                            </p></li>
                             <li><p className="T_about_product_words">
                             素材產地 / Taiwan 加工產地 / Taiwan</p></li>
                        </ul>
                     </div>                             
          </div>
               
            </div>
          </div>
        </div>
      </React.Fragment>
 );

}
componentDidMount = () => {
         //商品內容頁籤
    $(".T_product_tabs li").click(function () {
        var slide = 0;
        slide = $(this).index();
        var width = 0 - 320 * slide + "px";
        $(this).parent().siblings(".T_product_tab_container").children(".T_tab_content").css("left", width);
      
        $(this).siblings().css("backgroundColor","transparent")
        .end().css("backgroundColor","#e8aa67").css("color","#fff");
    });
}
}
export default Product_page;
