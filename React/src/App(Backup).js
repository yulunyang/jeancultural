import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import logo from "./logo.svg";
import "./App.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Nav from "./components/Nav";
import Member from './components/member/Member';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <div className="row mt-4">
            <div className="col-12">
              <div className="card">
                <div className="card-header" />
                <div className="card-body">
                  {/* http://localhost:3000/ */}
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  {/* http://localhost:3000/about */}
                  <Route path="/about" component={About} />
                  {/* http://localhost:3000/contact */}
                  <Route path="/contact" component={Contact} />
                  {/* http://localhost:3000/store */}
                  <Route exact path="/store" component={Store} />
                  {/* http://localhost:3000/store/*any* */}
                  <Route path="/store/:category" component={Store} />
                  {/*  http://localhost:3000/member */}
                  <Route path="/member" component={Member} />
                </div>
              </div>
            </div>
            {/* <div className="col-3">
              <h3>SASS</h3>
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
            </div> */}
          
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
