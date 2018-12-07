import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
class Nav extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <React.Fragment>
        <div className="F_index_nav_box">
          <nav className="F_index_nav">
            <Link className="F_nav_logo" to="/home">
              <img src="/images/logo_black.svg" alt="logo" />
            </Link>

            {/* 文字的nav */}

            <ul className="F_nav_box">
              <li className="F_nav_item">
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
                <Link className="nav-link_text F_spacial_a" to="/play/customization">
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
            </ul>

            {/* icon的nav */}
            <ul className="F_nav_icon">
              <li className="F_nav_item_icon">
                <Link className="nav-link nav-link_icon" to="/member_list">
                  <img src="/images/members.svg" alt="會員" />
                </Link>
              </li>
              <li className="F_nav_item_icon F_icon_likes">
                <Link className="nav-link nav-link_icon" to="/likes">
                  <img src="/images/likes.svg" alt="喜愛" />
                </Link>
              </li>
              <li className="F_nav_item_icon F_icon_buyitems">
                <Link className="nav-link nav-link_icon" to="/cart">
                  <img src="/images/buyitems.svg" alt="購物車" />
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
          </nav>
          <div className="F_none_block">
            <ul>
              <li className="F_nav_item F_nav_item_spacial">
                <Link className="nav-link_text F_nav-link_spacial" to="/play">
                  布置桌子
            </Link>
              </li>
              <li className="F_nav_item F_nav_item_spacial">
                <Link className="nav-link_text F_nav-link_spacial F_nav-link_spacial_cus" to="/customization">
                  客製音樂鈴
            </Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment >
    );

  }
  componentDidMount = () => {
    // 視差捲動
    var navTop = $(".F_index_nav").offset().top;

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      if (scrollTop >= navTop) {
        $(".F_index_nav").addClass("F_index_nav_to_fixed");
        $(".F_none_block").addClass("F_none_block_fixed");
      } else {
        $(".F_index_nav").removeClass("F_index_nav_to_fixed");
        $(".F_none_block").removeClass("F_none_block_fixed");
      }
    });
    //隱藏的nav
    $(".F_spacial").mousemove(function () {
      $(".F_none_block").addClass("F_none_block_height");
    });
    $(".F_spacial").mouseout(function () {
      $(".F_none_block").removeClass("F_none_block_height");
    });
    $(".F_none_block").mousemove(function () {
      $(".F_none_block").addClass("F_none_block_height");
      $(".F_spacial_a").addClass("F_spacial_color");
    });
    $(".F_none_block").mouseout(function () {
      $(".F_none_block").removeClass("F_none_block_height");
      $(".F_spacial_a").removeClass("F_spacial_color");
    });

    //客製化
    $(".F_nav-link_spacial_cus").click(function () {
      $(".F_step_green_box").css("backgroundColor", "transparent");
      $(".F_step_green_box1").css("backgroundColor", "#879d4d");
    })


  }

}

export default Nav;
