import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';


class Fixed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="F_toTop">
                    <img src="/images/Top.svg" className="F_toTop_img" alt="Top" />
                </div>
            </React.Fragment >

        );
    }
    //往下
    TopHandle() {
        // 視差捲動
        var toTop = $(".F_toTop").offset().top;
        var footer = $(".F_footer_gray").offset().top;
        var height = $(".F_footer_text_box").height() + 100;

        console.log(footer)

        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            if (scrollTop + windowHeight == scrollHeight) {
                $(".F_toTop").css("bottom", height + "px")
            } else {
                $(".F_toTop").css("bottom", "30px")
            }

        });
    }


    componentDidMount = () => {

        $(".F_toTop").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });

        this.TopHandle();
    }

    componentDidUpdate = () =>{
        //this.TopHandle();
    }
}

export default Fixed;