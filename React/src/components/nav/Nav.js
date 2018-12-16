import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import NavOld from './NavOld';
import NavRwd from './NavRwd';
import NavSmall from './NavSmall'
import NavClick from './NavClick'

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  navHandle() {
    // 視差捲動
    var navTop = $(".F_index_nav_box").offset().top;

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      if (scrollTop >= navTop) {
        $(".F_index_nav").addClass("F_index_nav_to_fixed");
        $(".F_none_block").addClass("F_none_block_fixed");
        $(".F_toTop").css("display", "block")

      } else {
        $(".F_index_nav").removeClass("F_index_nav_to_fixed");
        $(".F_none_block").removeClass("F_none_block_fixed");
        $(".F_toTop").css("display", "none")
      }

    });
  }



  render() {
    return (
      <React.Fragment>
        <div className="F_index_nav_box">
          <nav className="F_index_nav">
            <Link className="F_nav_logo F_nav_logo_black" to="/home">
              <img src="/images/logo_black.svg" alt="logo" />
            </Link>

            {/* 文字的nav */}
            <NavOld />
            <NavClick />
            {/* <NavRwd /> */}
          </nav>

          <NavSmall />
        </div>
      </React.Fragment >
    );

  }
  componentDidMount = () => {
    this.navHandle();

    //隱藏的nav
    $(".F_spacial").mousemove(function () {
      $(".F_none_block").addClass("F_none_block_height");
    });
    $(".F_spacial").mouseout(function () {
      $(".F_none_block").removeClass("F_none_block_height");
    });
    $(".F_none_block").mousemove(function () {
      $(".F_none_block").addClass("F_none_block_height");
      $(".F_spacial_a").addClass("F_spacial_color");
    });
    $(".F_none_block").mouseout(function () {
      $(".F_none_block").removeClass("F_none_block_height");
      $(".F_spacial_a").removeClass("F_spacial_color");
    });

    //客製化
    $(".F_nav-link_spacial_cus").click(function () {
      $(".F_step_green_box").css("backgroundColor", "transparent");
      $(".F_step_green_box1").css("backgroundColor", "#879d4d");
    })

    //hover{
      $(".nav-link_text").hover(function(){
        $(".F_nav_item").removeClass("hover")
        $(this).parents(".F_nav_item").addClass("hover")
      },function(){
        $(".F_nav_item").removeClass("hover")
      })

  }
  componentDidUpdate = () => {
    this.navHandle()
  }

}

export default Nav;
