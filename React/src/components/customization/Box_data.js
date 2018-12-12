import React, { Component } from 'react';
import './Customization.scss';
import $ from 'jquery';

class BoxData extends Component {
    constructor(props) {
        super(props)
        this.status = {
            isLoading: true,
            itemName: []

        }
    }
    componentWillMount(nextProps, nextState) {
        this.localStorage();

    }
    localStorage() {

    }

    clickHandlerBtn(e) {
        //選項也可以選擇
        //let sid = e.currentTarget.dataset.sid;
        let name = e.currentTarget.dataset.name;
        let numbering = e.currentTarget.dataset.numbering;
        let pay = e.currentTarget.dataset.pay;

        //進右邊盒子
        $(".F_number_box").text(numbering)
        $(".F_pay_box").text("$" + pay)
        //其他進盒子
        $(".F_del_box").text("X");
        $(".F_hidden_qty").text("1");
        //樣式
        var theImg = document.getElementById(numbering)
        $(".F_item_pic").removeClass("F_item_box_choice")
        $(theImg).addClass("F_item_box_choice")
        //按鈕
        $(".F_buy_button").removeClass("F_buy_button_check");
        $(theImg).parent().children(".F_buy_button").addClass("F_buy_button_check");


        //local
        let category = e.currentTarget.dataset.category;
        // console.log("分類:" + category)
        let item = {
            "itemName": name,
            "itemNumber": numbering,
            "price": pay,
            "category": category
        }
        // console.log("東西:" + item)
        // 判斷數量
        // console.log(theValue)
        item = { "itemName": name, "itemNumber": numbering, "price": pay, "category": category }
        localStorage.setItem(category, JSON.stringify(item))
    }


    render() {

        return (
            <React.Fragment>
                {/* <div className="F_bigbox"> */}
                {this.props.customization.map(customization =>
                    <div className="F_item_box">
                        <div className="F_item_pic F_item_pic_box" id={customization.muise_box_numbering} onClick={this.clickHandlerPic} data-name={customization.muise_box_name}
                            data-numbering={customization.muise_box_numbering}
                            data-pay={customization.muise_box_pay}
                            data-category={customization.category} data-sid={customization.sid}>
                            <img src={require(`./images/muise_box/${customization.muise_box_pic}.jpg`)} alt="底座1" />
                        </div>
                        <div className="F_item_text_box" id="F_item_text_box">
                            <div className="F_which_box">
                                <p className="F_which_box_number" name={customization.muise_box_numbering} data-sid={customization.sid}>{customization.muise_box_numbering}</p>
                                <span>-</span>
                                <p className="F_which_box_name" data-sid={customization.sid}>{customization.muise_box_name}</p>
                                <p className="F_box_category" data-sid={customization.sid}>{customization.category}</p>
                            </div>
                            <br />
                            <div className="F_how_much">NT$
                                <p className="F_how_much_pay" id="F_how_much_pay" data-sid={customization.sid}>{customization.muise_box_pay}</p>
                            </div>
                        </div>
                        <div id="F_buy_button" className="F_buy_button F_buy_button_box"
                            data-sid={customization.sid} data-name={customization.muise_box_name}
                            data-numbering={customization.muise_box_numbering}
                            data-pay={customization.muise_box_pay}
                            data-category={customization.category}
                            onClick={this.clickHandlerBtn.bind(this)}>選擇</div>
                    </div>
                )}
                 {/* </div> */}
            </React.Fragment>
        );
    }
    componentDidMount = () => {
        //如果有符合的資料樣式保留       
        this.readBox();
    }

    componentDidUpdate = () => {
        // console.log("update")
        this.readBox();
    }

    readBox() {

        $(document).ready(function () {
            var checkText_a = $(".F_number_box").text().toLowerCase();
            console.log("抓值:" + checkText_a)


            $('.F_item_box').each(function () {

                var num = $(this).find('.F_which_box_number').text().toLowerCase();
                if (num === checkText_a) {
                    console.log(num + "核對一樣")
                    $(this).find(".F_item_pic").addClass("F_item_box_choice");
                    //按鈕
                    $(this).find(".F_buy_button").addClass("F_buy_button_check");
                }
            });
        });


    }//尾端



}

export default BoxData;
