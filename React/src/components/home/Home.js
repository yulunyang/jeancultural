import React, { Component } from 'react';
import './Home.scss';
import Brand from './Brand';
import HomePlay from './HomePlay';
import HomePlayRwd from './HomePlayRwd';
import Sticky from './Sticky';
import $ from 'jquery';
import { BrowserRouter, Route, Link } from "react-router-dom";

//外掛
//import owlCarousel from 'owl.carousel/dist/assets/owl.carousel.css';
//import owlCarousel from 'owl-carousel';
//import owlCarousel from 'owl.carousel';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Brand />
                <HomePlay />
                <HomePlayRwd />
                <div className="F_news">
                    <img src="/images/home/new.svg" alt="news" className="F_index_title F_news_title" />
                    <div className="F_container">
                        <div className="F_news_container">
                            <div className="F_news_box">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="/images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <Link to="/news">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </Link>
                            </div>
                            <div className="F_news_box F_news_box_rwd_2">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <Link to="/news">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </Link>
                            </div>
                            <div className="F_news_box F_news_box_rwd">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <Link to="/news">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Sticky />
            </React.Fragment >

        );
    }
    componentDidMount = () => {


    }
}

export default Home;