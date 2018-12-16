import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';


class NavOld extends Component {
  constructor(props) {
    super(props);

  }

  logout=(evt)=>{
    evt.preventDefault();
        
        fetch("/api/logout/",{
            method:"GET",
            mode: 'cors',
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.message=="登出成功"){
                alert(data.message)
                $(".F_member_list_icon").removeClass("F_go_login")  //人像消失
                $(".F_icon_logout").removeClass("F_logouting")  //登出字消失
                $(".F_icon_login").removeClass("F_logining")  //登入字出現
                $(".F_icon_registered").removeClass("F_logining")  //註冊字出現
                // console.log(data.session)
                //this.props.history.push("/home");
                document.location.href="/home";
            }else{
                
                alert(data.message)
               
            }
        })
  }



  render() {
    return (
      <React.Fragment>
        {/* 文字的nav */}

        <ul className="F_nav_box">
          <li className="F_nav_item F_nav_item_about">
            <Link className="nav-link_text" to="/about">
              關於知音
                </Link>
          </li>
          <li className="F_nav_item">
            <Link className="nav-link_text" to="/news">
              最新消息
            </Link>
          </li>
          <li className="F_nav_item F_spacial">
            <Link className="nav-link_text F_spacial_a" to="/customization">
              玩玩知音
              </Link>
          </li>

          <li className="F_nav_item">
            <Link className="nav-link_text" to="/buy_items_list">
              開始購物
                </Link>
          </li>
          <li className="F_nav_item">
            <Link className="nav-link_text" to="/where">
              銷售通路
                </Link>
          </li>
          <li className="F_nav_item">
            <Link className="nav-link_text" to="/contact">
              聯絡我們
                </Link>
          </li>
          <ul className="F_nav_icon">
            <li className="F_nav_item_icon F_nav_item_icon_member">
              <Link className="nav-link nav-link_icon F_member_list_icon" to="/member_list">
                <img src="/images/members.svg" alt="會員" />
              </Link>
            </li>
            {/* <li className="F_nav_item_icon F_icon_likes">
              <Link className="nav-link nav-link_icon" to="/likes">
                <img src="/images/likes.svg" alt="喜愛" />
              </Link>
            </li> */}
            <li className="F_nav_item_icon F_icon_buyitems">
              <Link className="nav-link nav-link_icon" to="/cart">
                <img src="/images/buyitems.svg" alt="購物車" />
              </Link>
            </li>
            <li className="F_nav_item_icon F_icon_logout">
              <Link className="nav-link nav-link_icon F_icon_logout_link" to="/sign_in_member" onClick={this.logout}>
                <img src="/images/logout.svg" alt="登出" />
              </Link>
            </li>
            <li className="F_nav_item_icon F_icon_login">
              <Link className="nav-link nav-link_icon F_icon_login_link" to="/sign_in_member">
                <img src="/images/login.svg" alt="登入" />
              </Link>
            </li>
            <li className="F_nav_item_icon F_icon_registered">
              <Link className="nav-link nav-link_icon F_icon_registered_link" to="/add_member">
                <img src="/images/registered.svg" alt="註冊" />
              </Link>
            </li>
          </ul>
        </ul>

        {/* icon的nav */}


      </React.Fragment >
    );

  }
  componentDidMount = () => {


  }

}

export default NavOld;
