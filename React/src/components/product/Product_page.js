import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./Product_pag.scss";
import $ from "jquery";

class Product_page extends Component {
  constructor(props) {
    super(props);

    this.getProduct_items(this.props.match.params.product_id);
    this.state = {
      Product_items: []
    };
    // console.log("constructor：" + this.props.match.params.product_id);
  }

  getProduct_items = sid => {
    fetch("/api/goods_contnet/" + sid)
      .then(res => res.json())
      .then(Product_items => {
        // console.log(Product_items);
        this.setState({
          Product_items: Product_items
        });
      });
  };



  goBuyCard=()=>{
    var sid =$("#T_Product_sid").val();
    var qty =$("#select_amount").val();
    var myList = JSON.stringify({ "sid": sid, "qty": qty });
    console.log(myList)
    
    fetch("/api/cart", {
      method: 'POST',
      mode: 'cors',
      body: myList,               
      headers: new Headers({
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
    })
    .then(res => res.json())
    .then(data => {
        if(data.message == "登出狀態"){
          document.location.href="/sign_in_member";    
        }else if(data.message == "資料庫沒有這個商品"){
          alert('沒有此商品'); 
        }else{
          alert('已加入購物車');
        }
    })
  }

  goBuyNow=()=>{
    var sid =$("#T_Product_sid").val();
    var qty =$("#select_amount").val();
    var myList = JSON.stringify({ "sid": sid, "qty": qty });
    
    fetch("/api/cart", {
      method: 'POST',
      mode: 'cors',
      body: myList,               
      headers: new Headers({
          "Content-Type": "application/json",
          "Accept": "application/json"
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.message == "登出狀態"){
        document.location.href="/sign_in_member";    
      }else if(data.message == "資料庫沒有這個商品"){
        alert('沒有此商品'); 
      }else{
        alert('已加入購物車');
      }
    })    
  }


  

  goBack(){
    window.history.back();
  }


  render() {
    return (
      <React.Fragment>
        <div className="T_container">
        {/* <from type = 'post'>          */}
          <p className="T_back_icon" onClick={this.goBack}>
          <i class="fas fa-angle-double-left"></i>回商品列表</p>
          
          {this.state.Product_items.map(Product_items => (
            <div className="T_jn_product_box">
              <div className="T_jn_product_big_body">
                <div className="T_jn_product_body">
                  <div className="T_jn_product_pic">
                    <img className="T_jn_mainpic_dir"src={require(`../buy_items/images/${ Product_items.mainpic_dir}`)}alt="商品圖"/>
                  </div>

                  {/* 判斷類別顯示次要圖片 */}
                  { Product_items.category === 4|| Product_items.category === 5 || Product_items.category === 6 || Product_items.category === 7?
                   <img className="T_jn_secondpic_dir"src={require(`../buy_items/images/${ Product_items.secondpic_dir }`)} alt="次商品圖"/> 
                  :
                  <span></span>
                  }

                 <div className="T_jn_product_about_text" dangerouslySetInnerHTML={{__html: Product_items.description}}/>
                 </div>
              </div>
         
            <div className="T_product_type">
                <div className="T_product_logo">
                <img className="T_product_logo img" src={require(`../buy_items/images/${Product_items.brand}`)}alt="商品Logo"/>
                </div>
                <p className="T_product_titles">{Product_items.good_name}</p>
                <div className="T_product_describe">
                <p className="T_product_text" dangerouslySetInnerHTML={{__html: Product_items.narrative}}/>
                {/* Save Sid */}
                <input type="hidden" id="T_Product_sid" value={Product_items.sid}></input>
                <p className="T_Product_price">{Product_items.price}</p>
                <div className="T_Product_sele">NT$ {Product_items.discount_price}</div>
                <hr/>
                {/* 判斷類別選色 */}
                { Product_items.category === 4|| Product_items.category === 5 ?
                  <div className="T_product_select_color">
                  <button className="T_product_select_color coloritem1" />
                  <button className="T_product_select_color coloritem2" />
                  <button className="T_product_select_color coloritem3" />
                  </div>
                  :
                  <span></span>               
                  }
             
                  {/* 判斷類別選尺寸 */}  
                  { Product_items.category === 4|| Product_items.category === 5 ?
             
                  <div className="T_product_select_quantity">
                    <span className="T_product_select_amount_P">尺寸</span>
                    <select className="T_product_select_size">
                      <option value="30*150">30*150</option>
                      <option value="35*150">35*150</option>
                      <option value="40*150">40*150</option>
                    </select>
                  </div>
                  :
                  <span></span>
                  }
                    <span className="T_product_select_amount_P">數量</span>
                    <select className="T_product_select_amount" id='select_amount'>
                      <option  value='1'>1</option>
                      <option  value='2'>2</option>
                      <option  value='3'>3</option>
                    </select>
                  

                  {/* 加入購物車按鈕 */}
                   <div className="T_product_add">
                   <button class="T_product_add_cart" type="submit" onClick={this.goBuyCard}>   
                   加入購物車
                   </button>
                   <button className="T_product_add_buy"type="submit"data-pay={Product_items.discount_price} onClick={this.goBuyNow}>
                   立即購買
                   </button>
                   <div className="T_product_add_likes" type="submit" data-pay={Product_items.discount_price}>
                   {/* <i class="fas fa-heart"/> */} 
                   </div>
                  </div>


                  <ul className="T_product_send">
                      <li className="T_product_send_p">
                      <h4>付款與運送 </h4>
                      </li>
                      <li className="T_product_send_li">
                      <img className="T_product_send_icon" src="/images/send/familymart.jpg" alt="物流icon"/>
                      </li>
                      <li className="T_product_send_li">
                      <img  className="T_product_send_icon"src="/images/send/seveneleven.jpg" alt="物流icon"/>
                      </li>
                      <li className="T_product_send_li">
                      <img className="T_product_send_icon" src="/images/send/icon_deliver_home_v2.svg" alt="物流icon"/>
                      </li>
                  </ul>
                  <hr />


                  <div className="T_product_about_send">
                     <h4 className="T_product_send_text">付款方式: </h4>
                      <p className="T_product_send_pay">
                      超商取貨付款．貨到付款．信用卡一次付款
                      </p>
                      <h4 className="T_product_send_text">運送方式: </h4>
                      <p className="T_product_send_pay">
                      全家取貨付款60元，7-11取貨付款60元
                      <br />
                      黑貓哥哥送到家，每筆150元
                      <br />
                      滿3000元(含以上)免運費喔~
                      </p>
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
                    <li>
                      <p className="T_about_product_words">{Product_items.size}</p>
                    </li>
                    <li>
                      <p className="T_about_product_words"dangerouslySetInnerHTML={{__html: Product_items.items}}/>
                    </li>
                    <li>
                      <p className="T_about_product_words"dangerouslySetInnerHTML={{ __html: Product_items.material }}/>
                    </li>
                 </ul>
                </div>

              </div>
           </div>
           </div>
          ))}
          {/* </from> */}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    //商品內容頁籤
    $(document).on("click", "li.T_product_tabs", function() { var slide = 0; slide = $(this).index();
     var width = 0 - 320 * slide + "px"; 
     $(this).parent().siblings(".T_product_tab_container").children(".T_tab_content").css("left", width);
     $(this).siblings().css("backgroundColor", "transparent").css("color", "#606060").end().css("backgroundColor", "#e8aa67").css("color", "#fff");
    });
  };
}
export default Product_page;
