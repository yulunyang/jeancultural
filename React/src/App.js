import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';

import "./App.scss";
import "./AppRwd.scss";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Head from "./components/home/Head";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Customization from './components/customization/Customization';
import Where from './components/where/Where';
import Fixed from './components/home/fixed';
import Top from './components/home/Top';
//小君的部分
import Add_member from './components/add_member/add_member';
import Change_member_info from './components/add_member/change_member_info';
import Member_list from './components/member_list/member_list';
import Sign_in_member from './components/sign_in_member/sign_in_member';
import Order_list from './components/order_list/order_list';
import Order_list_detailed from './components/order_list/order_list_detailed';

//小周的部分
import Likes from './components/likes/Likes';
import Cart from './components/cart/Cart';
import Cart_info from './components/cart/Cart_info';
import Cart_success from './components/cart/Cart_success';

//水晶的部分
import News from './components/news/News';
import Play from './components/play/Play';

//TORO的部分
import Buy_items from "./components/buy_items/buy_items";
import Buy_items_list from "./components/buy_items/buy_items_list";
import Product_page from "./components/product/Product_page";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="F_big_body">
          <Route exact path="/" component={Head} />
          <Route path="/home" component={Head} />
          <Nav />
          <div className="F_body">
            {/*首頁*/}
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            {/*關於我們*/}
            <Route path="/about" component={About} />
            {/*聯絡我們//銷售據點*/}
            <Route path="/contact" component={Contact} />
            <Route path="/where" component={Where} />
            {/*  客製化的部分 */}
            <Route path="/customization" component={Customization} />
            {/* 會員部分//註冊會員//修改會員資料 //會員表單//登入會員//訂單資料//訂單細節*/}
            <Route path="/add_member" component={Add_member} />
            <Route path="/change_member_info" component={Change_member_info} />
            <Route path="/member_list" component={Member_list} />
            <Route path="/sign_in_member" component={Sign_in_member} />
            <Route path="/order_list" component={Order_list} />
            {/* <Route path="/order_list_detailed" component={Order_list_detailed} /> */}
            <Route path="/order_list/:orderid" component={Order_list_detailed} />
            {/* 我的最愛//購物車1//購物車步驟2-3*/}
            <Route path="/likes" component={Likes} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/cart/Cart_info" component={Cart_info} />
            <Route path="/cart/Cart_success" component={Cart_success} />
            {/* 購物清單//購物細節//購物車步驟2-3*/}
            <Route exact path="/Pag_items_list/:sid" component={Buy_items} />
            <Route path="/buy_items_list" component={Buy_items_list} />
            <Route path="/Product_page/:product_id" component={Product_page} />
            {/* 最新消息和玩玩的部分*/}
            <Route path="/news" component={News} />
            <Route path="/play" component={Play} />

            <Fixed />

          </div>
          {/* <Top /> */}
          <div className="F_footer">
            <div className="F_container F_footer_container" id="F_home_footer">
              <div className="F_footer_text_box F_footer_text_box_about">
                <h4>關於知音<br /><span>ABOUT US</span></h4>
                <ul className="F_footer_about">
                  <li><Link className="F_nav-link" to="/about">
                    關於知音 About Jeancard
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    Wooderful life
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    來趣
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    紙風景
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    繡
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    i-Marker
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    Funtape
                </Link></li>
                </ul>
              </div>
              <div className="F_footer_text_box F_footer_text_box_members">
                <h4>會員功能<br /><span>MEMBER SERVICE</span></h4>
                <ul className="F_footer_members">
                  <li> <Link className="F_nav-link" to="/add_member">
                    加入會員 Register
                </Link></li>
                  <li> <Link className="F_nav-link" to="/sign_in_member">
                    會員登入 Sign In
                </Link></li>
                  <li> <Link className="F_nav-link" to="/change_member_info">
                    忘記密碼 Forget Password
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    會員條款 Membership terms
                </Link></li>
                </ul>
              </div>
              <div className="F_footer_text_box F_footer_text_box_contact">
                <h4>聯絡我們<br /><span>CONTACT US</span></h4>
                <ul className="F_footer_contact">
                  <li>+886 2-2917-1700</li>
                  <li>Jeancard@gmail.com</li>
                  <li>服務時間：8:00~19:00</li>
                  <li>Line：@jeancard</li>
                  <li>FB：https://www.facebook.com/jeancard1975/</li>
                </ul>
              </div>
              <div className="F_footer_text_box F_footer_text_box_logo">
                <div className="F_footer_logo"><a href="https://github.com"><img src="/images/logo.svg" alt="logo" /></a></div>
                <li className="F_footer_icon_box">
                  <a href="https://github.com"><figure className="F_icon_range icon_range_fb"> <img src="/images/FB.png" alt="FB" /></figure></a>
                  <a href="https://github.com"><figure className="F_icon_range"><img src="/images/IG.png" alt="IG" /></figure></a>
                  <a href="https://github.com"><figure className="F_icon_range"><img src="/images/LINE.png" alt="LINE" /></figure></a>
                </li>
                <div className="F_footer_rwd">
                知音文創產業股份有限公司<br/>
                新北市新店區寶中路95之6號．TEL : +886 2-2917-1700<br/>
                服務時間：8:00~19:00
                </div>
              </div>
            </div>
          </div>
          <div className="F_footer_gray">ⓒ 2018 Mercci22 CO., LTD. All RIGHTS RESERVED. 
          {/* <span>Top⧋</span> */}
          </div>
        </div >
      </BrowserRouter >

    );
  }
  componentDidMount = () => {
    

  }
}

export default App;
