import React, { Component } from 'react';
import './Home.scss';

class Brand extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="F_shop">
                    <img src="/images/home/brand.svg" alt="brand" className="F_index_title F_brand" />
                    <img src="/images/home/long_text.svg" alt="裝飾文字" className="F_long_text_home F_long_text_home_left" />
                    <img src="/images/home/long_text.svg" alt="裝飾文字" className="F_long_text_home F_long_text_home_right" />
                    <div className="F_container">
                        <div className="F_shop_all">
                            <div className="F_shop_box F_shop_box_left">
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_tape">
                                        <img src="images/home/tape.jpg" alt="紙膠帶" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_carving">
                                        <img src="images/home/carving.jpg" alt="手工" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            <div className="F_shop_box">
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_wood">
                                        <img src="images/home/wood.jpg" alt="木製" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            <div className="F_shop_box shop_box_right">
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_embroidery">
                                        <img src="images/home/embroidery.jpg" alt="織" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_paper">
                                        <img src="images/home/paper.JPG" alt="玩玩紙雕" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
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

export default Brand;