import React, { Component } from 'react';
import './Home.scss';
import Brand from './Brand';
import HomePlay from './HomePlay';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Brand />
                <HomePlay />

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
                                <a href="">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </a>
                            </div>
                            <div className="F_news_box">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <a href="">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </a>
                            </div>
                            <div className="F_news_box">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <a href="">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >

        );
    }
    componentDidMount = () => {

    }
}

export default Home;