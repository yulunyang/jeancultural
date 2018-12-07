import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            MFEE02 App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  首頁
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  關於我們
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  聯絡我們
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">
                  24商城
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/member">
                  會員管理
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Contact;
