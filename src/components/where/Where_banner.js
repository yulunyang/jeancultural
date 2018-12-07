import React, { Component } from 'react';
import './Where.scss';

class Where_banner extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="F_customization_banner">
                    <figure className="F_about_banner_pic">
                        <img src="images/where/banner_where.jpg" alt="banner" />
                    </figure>
                    <h2>銷售通路
                <br />
                        <span>Bricks&Mortar</span>
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

export default Where_banner;