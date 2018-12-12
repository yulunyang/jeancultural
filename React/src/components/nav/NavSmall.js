import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class NavSmall extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <React.Fragment>
            {/* 文字的nav */}
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
        
      </React.Fragment >
    );

  }
  componentDidMount = () => {
    

  }

}

export default NavSmall;
