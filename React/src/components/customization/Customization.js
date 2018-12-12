import React, { Component } from 'react';
import './Customization.scss';
import './CustomizationRwd.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';

import Box from './Box';
import Muise from './Muise';
import Box_thing from './Box_thing';
import Step1 from './Step/Step1';
import Step2 from './Step/Step2';
import Step3 from './Step/Step3';
import CardBox from './CardBox';


class Customization extends Component {
    constructor(props) {
        super(props)
    }
    showA() {
        for (let i = 0, max = localStorage.length; i < max; i++) {

            var id = localStorage.key(i);  //key(0)回傳keyname
            var item = JSON.parse(localStorage.getItem(id)); //{}
            // var items=localStorage.getItem('item1') ;     
            var name = localStorage.getItem('itemName');
            var qty = localStorage.getItem('qty');
            var price = localStorage.getItem('price');
            var number = localStorage.getItem('itemNumber');
            var category = localStorage.getItem('category');


            if (id == "box_box") {
                number = item.itemNumber
                var cell1 = document.getElementById("F_number_box");//<td></td>
                var txt1 = document.createTextNode(number);//CASIO Exilim PRO EX-P505
                cell1.appendChild(txt1);

                price = item.price
                var cell2 = document.getElementById("F_pay_box");
                var txt2 = document.createTextNode("$" + price);
                cell2.appendChild(txt2);//<td>9,900</td> 

                var cell3 = document.getElementById("F_del_box");
                var txt3 = document.createTextNode('X');
                cell3.appendChild(txt3);//<td>9,900</td> 

            } else if (id == "boxMuise") {
                number = item.itemNumber
                var cellB1 = document.getElementById("F_number_muise");//<td></td>
                var txtB1 = document.createTextNode(number);//CASIO Exilim PRO EX-P505
                cellB1.appendChild(txtB1);

                price = item.price
                var cellB2 = document.getElementById("F_pay_muise");
                var txtB2 = document.createTextNode("$" + price);
                cellB2.appendChild(txtB2);//<td>9,900</td> 

                var cellB3 = document.getElementById("F_del_muise");
                var txtB3 = document.createTextNode('X');
                cellB3.appendChild(txtB3);//<td>9,900</td> 

            } else if (id == "boxItim" + item.itemNumber) {
                for (let z = 0; z <= 3; z++) {
                    var testId = document.querySelectorAll(".F_number_item");
                    var testPrice = document.querySelectorAll(".F_pay_item");
                    var testDel = document.querySelectorAll(".F_del_item");
                    var qty = item.qty
                    //console.log(qty)

                    number = item.itemNumber
                    testId[i].textContent = number

                    price = item.price
                    testPrice[i].textContent = '$' + price

                    testDel[i].textContent = "X"

                    if (qty == 2) {
                        testId[i + 1].textContent = number
                        testPrice[i + 1].textContent = '$' + price
                        testDel[i + 1].textContent = "X"
                    } else if (qty == 3) {
                        testId[i + 1].textContent = number
                        testId[i + 2].textContent = number
                        testPrice[i + 1].textContent = '$' + price
                        testDel[i + 1].textContent = "X"
                        testPrice[i + 2].textContent = '$' + price
                        testDel[i + 2].textContent = "X"
                    }
                }
            }
        }
    }//showA尾端
    clickStep() {
        if (window.location.pathname == "/customization") {
            $(".F_step_green_box1").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
            $(".F_for_margin").removeClass("F_for_margin_end")
            $(".F_to_down").css("display", "block")
            $(".F_to_up").css("display", "none")
            $(".F_to_down").click(function () {
                window.location.href = "/customization/muise"
            })
        } else if (window.location.pathname == "/customization/muise") {
            $(".F_step_green_box2").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
            $(".F_to_down").css("display", "block")
            $(".F_to_up").css("display", "block")
            $(".F_for_margin").addClass("F_for_margin_end")
            $(".F_to_up").click(function () {
                window.location.href = "/customization/"
            })
            $(".F_to_down").click(function () {
                window.location.href = "/customization/box_thing"
            })
        }

    }//尾端

    UpDown() {
        //綠盒子和上下步的判斷式
        $(document).ready(function () {
            if (window.location.pathname == "/customization/box_thing") {
                $(".F_step_green_box3").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
                $(".F_to_up").css("display", "block")
                $(".F_to_down").css("display", "none")
                $(".F_for_margin").addClass("F_for_margin_end")
                $(".F_to_up").click(function () {
                    window.location.href = "/customization/muise"
                })

            }
            if (window.location.pathname == "/customization/muise") {
                $(".F_step_green_box2").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
                $(".F_to_down").css("display", "block")
                $(".F_to_up").css("display", "block")
                $(".F_for_margin").addClass("F_for_margin_end")
                $(".F_to_up").click(function () {
                    window.location.href = "/customization/"
                })
                $(".F_to_down").click(function () {
                    window.location.href = "/customization/box_thing"
                })
            }
            if (window.location.pathname == "/customization/") {
                $(".F_step_green_box1").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
                $(".F_for_margin").removeClass("F_for_margin_end")
                $(".F_to_down").css("display", "block")
                $(".F_to_up").css("display", "none")
                $(".F_to_down").click(function () {
                    window.location.href = "/customization/muise"
                })
            }
        })

    }//Down尾端

    render() {
        return (
            <React.Fragment>
                <div className="F_customization_banner">
                    <figure className="F_customization_banner_pic"><img src="/images/customization.jpg" alt="客製化banner" /></figure>
                    <h2>客製音樂鈴<br /><span>Customization</span></h2>
                    <figure className="F_customization_color"><img src="/images/color_line.svg" alt="color_line" /></figure>
                    <div className="F_triangle_banner"></div>
                    <div className="F_long_color"></div>
                </div>
                {/* <!-- 一個範圍 --> */}
                <div className="F_container_cus">
                    <div className="F_small_title_box">
                        <div className="F_color_icon"><img src="/images/color_icon.svg" alt="color_icon" /></div>
                        <h3>客製化自己的音樂鈴吧！</h3>
                    </div>
                    <div className="F_small_title_step_box">
                        <Route exact path="/customization" component={Step1} />
                        <Route path="/customization/box" component={Step1} />
                        <Route path="/customization/muise" component={Step2} />
                        <Route path="/customization/box_thing" component={Step3} />
                    </div>
                    {/* <!-- 左邊範圍 --> */}
                    <div className="F_for_two_box">
                        <div className="F_left_step">
                            <div className="F_step_line"><img src="/images/step_line.png" alt="進度條" /></div>
                            <div className="F_left_step_for_box">
                                <Link className="F_step_green_box F_step_green_box1" to="/customization">
                                    <p className="F_step_green_box_text">Step1</p>
                                </Link>
                                <Link className="F_step_green_box F_step_green_box2" to="/customization/muise">
                                    <p className="F_step_green_box_text">Step2</p>
                                </Link>
                                <Link className="F_step_green_box F_step_green_box3" to="/customization/box_thing">
                                    <p className="F_step_green_box_text">Step3</p>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- 大盒子 --> */}
                        <div className="F_center_big_box">
                            {/* <!-- 中中範圍 --> */}
                            <div className="F_items_choice_box" >
                                <Route exact path="/customization" component={Box} />
                                <Route path="/customization/muise" component={Muise} />
                                <Route path="/customization/box_thing" component={Box_thing} />
                            </div>
                            {/* <!-- 中右邊範圍 --> */}
                            <CardBox />
                        </div>
                    </div>
                    {/* <CardBoxRwd /> */}
                    <div className="F_for_margin">
                        <div className="F_to_up">〈〈上一步</div>
                        <Link to="/customization/muise">
                        <div className="F_to_down" onClick={this.clickStep()}>下一步 〉〉</div>
                        </Link>
                    </div>
                </div>
            </React.Fragment >
        );
    }

    componentDidMount = () => {
        this.showA()

        // console.log(window.location.pathname == "/customization/")

        //綠色盒子//F_green_link
        $(".F_step_green_box").click(function () {
            $(this).siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
        })
        //綠盒子點擊
        $(".F_step_green_box1").click(function () {
            $(".F_to_down").css("display", "block")
            $(".F_to_up").css("display", "none")
        })
        $(".F_step_green_box2").click(function () {
            $(".F_to_down").css("display", "block")
            $(".F_to_up").css("display", "block")
        })
        $(".F_step_green_box3").click(function () {
            $(".F_to_up").css("display", "block")
            $(".F_to_down").css("display", "none")
        })

        //綠盒子和上下步的判斷式
        this.UpDown();
    }

    componentDidUpdate = () => {
        this.UpDown();
        this.clickStep();
    }

}


export default Customization;