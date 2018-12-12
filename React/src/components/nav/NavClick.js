import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { html } from "common-tags";

class NavClick extends Component {
  constructor(props) {
    super(props);
  }

  clickHandle(){
    //沒在頂端被點開
    if ($(".F_three_line1").addClass("F_three_line1_click")) {
      $(".F_index_nav").addClass("F_index_nav_to_fixed");
      $("body,html").animate({ scrollTop: 0 }, 500)
      $(".F_nav_logo_head").css("display", "none")
    }
  }

  nowHandle() {
    $(document).ready(function () {
      //一開始
      $(".F_nav_box_forrwd").hide();
      $(".F_three_line1").removeClass("F_three_line1_click");
      $(".F_three_line2").removeClass("F_three_line2_click");
      $(".F_three_line3").removeClass("F_three_line3_click");
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* 文字的nav */}
        <div className="F_three_box">
          <div className="F_three_line F_three_line1"></div>
          <div className="F_three_line F_three_line2"></div>
          <div className="F_three_line F_three_line3"></div>
        </div>
      </React.Fragment >
    );

  }
  componentDidMount = () => {
    //一開始
    this.nowHandle();

    // // //點擊
    $(".F_three_box").on("click", function () {

      $(".F_three_line1").toggleClass("F_three_line1_click");
      $(".F_three_line2").toggleClass("F_three_line2_click");
      $(".F_three_line3").toggleClass("F_three_line3_click");

      $(".F_nav_box_forrwd").toggle("fast");

    })

    //  //禁止滾輪
    //  if ($(".F_three_line2").removeClass("F_three_line2_click")) {
    //   var w1 = $(window).width();
    //   $('body').addClass('fancybox-lock-test');
    //   var w2 = $(window).width();
    //   $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    // }else if($(".F_nav_box_forrwd").hide()){
    //   $('body').removeClass('fancybox-lock-test');
    // }


    //點去其他地方
    if ($(".F_nav_item").click()) {
      $(".F_nav_box_forrwd").hide();
    }
    //如果被點開就往上
    //this.clickHandle()

  }

  componentDidUpdate = () => {
    //一開始
    this.nowHandle();

  }



}

export default NavClick;
