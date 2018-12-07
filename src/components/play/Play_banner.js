import React, { Component } from 'react';
import './Play.scss';

class Play_banner extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="F_customization_banner">
                    <figure className="F_about_banner_pic">
                        <img src="images/brand/Wooderful Life-99s.jpg" alt="客製化banner" />
                    </figure>
                    <h2>玩玩知音
                <br />
                        <span>Play&Events</span>
                    </h2>
                    <figure className="F_customization_color">
                        <img src="images/color_line.svg" alt="color_line" />
                    </figure>
                    <div className="F_triangle_banner"></div>
                    <div className="F_long_color"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Play_banner;