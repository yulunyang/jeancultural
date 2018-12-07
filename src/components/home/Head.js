import React, { Component } from "react";
import './Head.scss';
import $ from 'jquery';



class Head extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="F_head">
                    <figure className="F_head_banner"><img src="/images/home/head_banner.jpg" alt="首頁" className="F_put_banner" /></figure>
                    <div className="F_filter"></div>
                    <figure className="F_nav_logo"><img src="/images/logo.svg" alt="logo" /></figure>
                    <h1>以感動 製造感動</h1>
                    <h5 className="F_header_h5">知音結合了紙藝、創意、情感、環保與自然
                        <br /> 從平凡的事物中找到新奇的小點子
                        <br /> 從不間斷的嘗試與創新，是我們秉持不變的信念！
                    </h5>
                    <img className="F_see-more" src="/images/home/see_more.png" alt="看更多" />
                </div>
            </React.Fragment >
        );
    }
    componentDidMount = () => {
        // 視差捲動
        $(window).scroll(function (event) {
            var st = $(this).scrollTop();
            if (st > 50) {
                $(".F_head_banner img").addClass('F_show');
                $(".F_filter").addClass("F_filter_over")
            } else {
                $(".F_head_banner img").removeClass('F_show');
                $(".F_filter").removeClass("F_filter_over")
            }
        });

    }
}

export default Head;
