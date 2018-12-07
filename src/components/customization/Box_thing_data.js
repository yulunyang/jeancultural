import React, { Component } from 'react';
import './Customization.scss';
import $ from 'jquery';

class ThingsData extends Component {
    constructor(props) {
        super(props)
    }
    changekHandlerBtn(e) {
        // $(this).siblings(".F_item_pic").addClass("F_item_box_choice")
        let name = e.currentTarget.dataset.name;
        let numbering = e.currentTarget.dataset.numbering;
        let pay = e.currentTarget.dataset.pay;
        let change = document.getElementById(numbering)
        // console.log(numbering)
        //三個邏輯
        // for (var i = 1; i <= 4; i++) {
        if ($(".F_number_item_1").text() == "") {
            // console.log($(".F_number_item_1").text() == "")
            //編號
            $(".F_number_item_1").text(numbering);
            //$$$
            $(".F_pay_item_1").text("$" + pay);
            //刪除
            $(".F_del_item_1").text("X");
            $(".F_hidden_qty").text("1");
        } else if ($(".F_number_item_2").text() == "") {
            //編號
            $(".F_number_item_2").text(numbering);
            //$$$$$
            $(".F_pay_item_2").text("$" + pay);
            //刪除
            $(".F_del_item_2").text("X");
            $(".F_hidden_qty").text("1");
        } else if ($(".F_number_item_3").text() == "") {
            //編號
            $(".F_number_item_3").text(numbering);
            //$$$$$
            $(".F_pay_item_3").text("$" + pay);
            //刪除
            $(".F_del_item_3").text("X");
            $(".F_hidden_qty").text("1");
            //
            alert("選擇三個配件囉!請刪減選擇的配件~~或直接加入購物車~~~")
            $(".F_buy_button").css("display", "none")
            //如果有符合的資料樣式保留
            $(function () {
                var checkText1 = $(".F_number_item_1").text().toLowerCase();
                var checkText2 = $(".F_number_item_2").text().toLowerCase();
                var checkText3 = $(".F_number_item_3").text().toLowerCase();
                $('.F_item_text .F_which_item .F_which_item_number').each(function () {
                    if ($(this).text().toLowerCase() == checkText1) {
                        $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_item_pic").addClass("F_item_box_choice");
                    } if ($(this).text().toLowerCase() == checkText2) {
                        $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_item_pic").addClass("F_item_box_choice");
                    } if ($(this).text().toLowerCase() == checkText3) {
                        $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_item_pic").addClass("F_item_box_choice");
                    }
                });
            });
        } else {
            alert("選擇超過三個配件了!請刪減選擇的配件或直接確認選擇加入購物車~")
            $(".F_buy_button_things").css("display", "none")
        }
        // }
        //local
        let category = e.currentTarget.dataset.category;
        let name2 = e.currentTarget.dataset.numbering;
        // let qty = e.currentTarget.dataset.qty;
        var theValue = localStorage.getItem(category + name2);
        // console.log(theValue)
        if (theValue) {
            //購物車有此商品，數量+1
            var qty = JSON.parse(theValue).qty + 1
            var item = {
                "itemName": name,
                "qty": qty,
                "itemNumber": numbering,
                "price": pay,
                "category": category
            }
            localStorage.setItem(category + numbering, JSON.stringify(item))
        } else {
            item = { "itemName": name, "qty": 1, "itemNumber": numbering, "price": pay, "category": category }
            localStorage.setItem(category + numbering, JSON.stringify(item))
        }
    }



    render() {
        return (
            <React.Fragment>
               
                {this.props.customthing.map(customthing =>
                    <div className="F_item_box" data-thing-value={customthing.muise_thing_value}>
                        <div className="F_item_pic F_item_pic_item" >
                            <img src={require(`./images/muise_animals/${customthing.muise_thing_pic}.jpg`)} />
                        </div>
                        <div className="F_item_text">
                            <div className="F_which_item"><p className="F_which_item_number" name={customthing.muise_thing_numbering} data-sid={customthing.sid}>{customthing.muise_thing_numbering}</p>
                                <span>-</span> <p className="F_which_item_name" data-sid={customthing.sid}>{customthing.muise_thing_name}</p></div>
                            <br /><p className="F_how_much">NT$<p className="F_how_much_pay_item" data-sid={customthing.sid}>{customthing.muise_thing_pay}</p></p>
                            <p className="F_box_category" data-sid={customthing.sid}>{customthing.category}</p>
                        </div>
                        <div className="F_buy_button F_buy_button_thing"
                            id={customthing.muise_thing_numbering}
                            data-name={customthing.muise_thing_name}
                            data-numbering={customthing.muise_thing_numbering}
                            data-pay={customthing.muise_thing_pay}
                            data-sid={customthing.sid}
                            data-category={customthing.category}
                            onClick={this.changekHandlerBtn}>
                            選擇
                        </div>

                    </div>
                )}

            </React.Fragment>
        );
    }
    componentDidMount = (e) => {
        //read
        this.readThing()
    }
    componentDidUpdate = () => {     
        this.readThing();
    }
    


    readThing() {

        $(document).ready(function () {

            var checkText1 = $(".F_number_item_1").text();
            var checkText2 = $(".F_number_item_2").text();
            var checkText3 = $(".F_number_item_3").text();

            $('.F_item_box').each(function () {

                var num = $(this).find('.F_which_item_number').text().toLowerCase();
                if (checkText1 == "" || checkText2 == "" || checkText3 == "") {
                    $(".F_buy_button").css("display", "block")
                } else {
                    $(".F_buy_button").css("display", "none")
                } if (num == checkText1) {
                    $(this).find(".F_item_pic").addClass("F_item_box_choice");
                    $(this).find(".F_buy_button_thing").addClass("F_buy_button_check");
                } else if (num == checkText2) {
                    $(this).find(".F_item_pic").addClass("F_item_box_choice");
                    $(this).find(".F_buy_button_thing").addClass("F_buy_button_check");
                } else if (num == checkText3) {
                    $(this).find(".F_item_pic").addClass("F_item_box_choice");
                }

            })

        })
    }//尾端


}


export default ThingsData;
