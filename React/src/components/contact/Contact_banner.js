import React, { Component } from 'react';
import './Contact.scss';

class Contact_banner extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="F_customization_banner">
                    <figure className="F_about_banner_pic">
                        <img src="images/content_icon/contact_us_banner.jpg" alt="客製化banner" />
                    </figure>
                    <h2>聯絡我們
                <br />
                        <span>Contact Us</span>
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

export default Contact_banner;