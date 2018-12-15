import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { html } from "common-tags";

class NavClick extends Component {
  constructor(props) {
    super(props);
  }

  clickHandle() {
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

      $(".F_nav_box").toggleClass("height");

      //點去其他地方
      $(".F_nav_item").click(function (e) {
        $(".F_nav_box").removeClass("height");
        //一開始
        $(".F_three_line1").removeClass("F_three_line1_click");
        $(".F_three_line2").removeClass("F_three_line2_click");
        $(".F_three_line3").removeClass("F_three_line3_click");
      })
      $(".F_nav_item_icon").click(function (e) {
        $(".F_nav_box").removeClass("height");
        //一開始
        $(".F_three_line1").removeClass("F_three_line1_click");
        $(".F_three_line2").removeClass("F_three_line2_click");
        $(".F_three_line3").removeClass("F_three_line3_click");
      })
    })





  }

  componentDidUpdate = () => {
    //一開始
    this.nowHandle();

  }
  componentDidUpdate = () => {
    //一開始
    this.nowHandle();
  }




}

export default NavClick;
