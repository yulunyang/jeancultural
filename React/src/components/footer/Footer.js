import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="F_footer">
          <div className="F_container F_footer_container">
            <div className="F_footer_text_box F_footer_text_box_about">
              <h4>關於知音<br /><span>ABOUT US</span></h4>
              <ul className="F_footer_about">
                <a href="">
                  <li>關於知音 About Jeancard</li>
                </a>
                <a href="">
                  <li>Wooderful life</li>
                </a>
                <a href="">
                  <li>來趣</li>
                </a>
                <a href="">
                  <li>紙風景</li>
                </a>
                <a href="">
                  <li>繡</li>
                </a>
                <a href="">
                  <li>i-Marker</li>
                </a>
                <a href="">
                  <li>Funtape</li>
                </a>
              </ul>
            </div>
            <div className="F_footer_text_box F_footer_text_box_members">
              <h4>會員功能<br /><span>MEMBER SERVICE</span></h4>
              <ul className="F_footer_members">
                <a href="">
                  <li>加入會員 Register</li>
                </a>
                <a href="">
                  <li>會員登入 Sign In</li>
                </a>
                <a href="">
                  <li>忘記密碼 Forget Password</li>
                </a>
                <a href="">
                  <li>會員條款 Membership terms</li>
                </a>
              </ul>
            </div>
            <div className="F_footer_text_box F_footer_text_box_contact">
              <h4>聯絡我們<br /><span>CONTACT US</span></h4>
              <ul className="F_footer_contact">
                <li>02-2917-1700</li>
                <li>Jeancard@gmail.com</li>
                <li>服務時間：8:00~19:00</li>
                <li>Line：@jeancard</li>
                <li>FB：https://www.facebook.com/jeancard1975/</li>
              </ul>
            </div>
            <div className="F_footer_text_box F_footer_text_box_logo">
              <div className="F_footer_logo"><a href=""><img src="/images/logo.svg" alt="logo" /></a></div>
              <li className="F_footer_icon_box">
                <a href=""><figure className="F_icon_range icon_range_fb"> <img src="/images/FB.png" alt="FB" /></figure></a>
                <a href=""><figure className="F_icon_range"><img src="/images/IG.png" alt="IG" /></figure></a>
                <a href=""><figure className="F_icon_range"><img src="/images/LINE.png" alt="LINE" /></figure></a>
              </li>
            </div>
          </div>
        </div>
        <div className="F_footer_gray">ⓒ 2018 Mercci22 CO., LTD. All RIGHTS RESERVED.</div>
      </React.Fragment >
    );
  }
}

export default Footer;
