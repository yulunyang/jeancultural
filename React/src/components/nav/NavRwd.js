import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class NavRwd extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <React.Fragment>
            {/* 文字的nav */}
            <div className="F_nav_box_forrwd">
            <ul className="F_nav_box F_nav_box_rwd">
              <li className="F_nav_item F_nav_item_rwd">
                <Link className="nav-link_text nav-link_text_rwd" to="/about">
                  關於知音
                </Link>
              </li>
              <li className="F_nav_item F_nav_item_rwd">
                <Link className="nav-link_text nav-link_text_rwd" to="/news">
                  最新消息
            </Link>
              </li>
              <li className="F_nav_item F_nav_item_rwd F_spacial">
                <Link className="nav-link_text nav-link_text_rwd F_spacial_a" to="/customization">
                  玩玩知音
              </Link>
              </li>

              <li className="F_nav_item F_nav_item_rwd">
                <Link className="nav-link_text nav-link_text_rwd" to="/buy_items_list">
                  開始購物
                </Link>
              </li>
              <li className="F_nav_item F_nav_item_rwd">
                <Link className="nav-link_text nav-link_text_rwd" to="/where">
                  銷售通路
                </Link>
              </li>
              <li className="F_nav_item F_nav_item_rwd">
                <Link className="nav-link_text nav-link_text_rwd" to="/contact">
                  聯絡我們
                </Link>
              </li>
            </ul>

            {/* icon的nav */}
            <ul className="F_nav_icon F_log F_nav_icon_rwd">
            <li className="F_nav_item_rwd_log">
                <Link className="nav-link_text nav-link_text_rwd nav-link_text_rwd_logout" to="/home">
                [登出]             
                </Link>
              </li>
              <li className="F_nav_item_rwd_log">
                <Link className="nav-link_text nav-link_text_rwd" to="/sign_in_member">
                [登錄]             
                </Link>
              </li>
              <li className="F_nav_item_rwd_log">
                <Link className="nav-link_text nav-link_text_rwd" to="/add_member">
                [註冊]                
                </Link>
              </li>
            </ul>

            <ul className="F_nav_icon F_nav_icon_rwd">
              <li className="F_nav_item_icon F_nav_item_icon_rwd F_member_list_icon">
                <Link className="nav-link nav-link_icon" to="/member_list">
                  <img src="/images/members.svg" alt="會員" />
                </Link>
              </li>
              <li className="F_nav_item_icon F_nav_item_icon_rwd F_icon_likes">
                <Link className="nav-link nav-link_icon" to="/likes">
                  <img src="/images/likes.svg" alt="喜愛" />
                </Link>
              </li>
              <li className="F_nav_item_icon F_nav_item_icon_rwd F_icon_buyitems">
                <Link className="nav-link nav-link_icon" to="/cart">
                  <img src="/images/buyitems.svg" alt="購物車" />
                </Link>
              </li>
            </ul>
           
            </div>
      </React.Fragment >
    );

  }
  componentDidMount = () => {
    

  }

}

export default NavRwd;
