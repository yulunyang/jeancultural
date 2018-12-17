import React, { Component } from 'react';
import './Customization.scss';
import $ from 'jquery';

class CardBox extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <React.Fragment>
                <div className="F_items_buy_car_box">
                    <div className="F_items_buy_car_text">您選擇的組合是</div>
                    <div className="F_items_buy_car_small_box">
                        <div className="F_buy_car_title F_buy_car_title_top">音樂盒:</div>
                        <div className="F_buy_car_details" id="F_buy_car_details_box">
                            <p className="F_number F_number_box" id="F_number_box"></p>
                            <p className="F_hidden_qty"></p>
                            <span className="F_pay F_pay_box" id="F_pay_box"></span>
                            <span className="F_del F_del_box" id="F_del_box"></span>
                        </div>
                        <div className="F_buy_car_title">配樂:</div>
                        <div className="F_buy_car_details" id="F_buy_car_details_muise">
                            <p className="F_number F_number_muise" id="F_number_muise"></p>
                            <p className="F_hidden_qty"></p>
                            <span className="F_pay F_pay_muise" id="F_pay_muise"></span>
                            <span className="F_del F_del_muise" id="F_del_muise"></span>
                        </div>
                        <div className="F_buy_car_title">配件:</div>
                        <div className="F_buy_car_details">
                            <p className="F_number F_number_item F_number_item_1" id="F_number_item_1"></p>
                            <p className="F_hidden_qty F_hidden_qty1"></p>
                            <p className="F_pay F_pay_item F_pay_item_1" id="F_pay_item_1"></p>
                            <p className="F_del F_del_item F_del_item_1" id="F_del_item_1" ></p>
                        </div>
                        <div className="F_buy_car_details">
                            <p className="F_number F_number_item F_number_item_2" id="F_number_item_2"></p>
                            <p className="F_hidden_qty F_hidden_qty2"></p>
                            <p className="F_pay F_pay_item F_pay_item_2" id="F_pay_item_2"></p>
                            <p className="F_del F_del_item F_del_item_2" id="F_del_item_2" ></p>
                        </div>
                        <div className="F_buy_car_details">
                            <p className="F_number F_number_item F_number_item_3" id="F_number_item_3"></p>
                            <p className="F_hidden_qty F_hidden_qty3"></p>
                            <p className="F_pay F_pay_item F_pay_item_3" id="F_pay_item_3"></p>
                            <p className="F_del F_del_item F_del_item_3" id="F_del_item_3" ></p>
                        </div>
                        <div className="F_buy_car_total">
                            {/* <p>總金額：</p>
                                        <div className="F_buy_car_total_is">NT 0</div> */}
                        </div>
                    </div>
                    <div className="F_button_box">
                        <div className="F_button F_putin" onClick={this.goBuyCard}>加入購物車</div>
                        <div className="F_button F_put_likes" onClick={this.delete}>刪除全部</div>
                    </div>

                </div>
            </React.Fragment>
        );
    }

    componentDidMount = () => {
        this.delClick()
    }
    componentDidUpdate = () => {
        // console.log("update")
        //this.delClick()
    }

    goBuyCard() {
        let myList = [];
        let sidCheckBox = $(".F_number_box").text();
        let sidCheckMuise = $(".F_number_muise").text();
        let sidCheckThing = $(".F_number_item").text();

        if (sidCheckBox == "" || sidCheckMuise == "" || sidCheckThing == "") {

            alert('請選擇齊全');

        } else {

            // $(".F_buy_car_details").each(function (n) {

                // let sid = $(this).find(".F_number").text();
                // console.log("sid:" + sid)
            var List = JSON.stringify({ "sid": 1000, "qty": 1 });

            fetch("/api/cart", {
                method: 'POST',
                mode: 'cors',
                body: List,               
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                })
            })  .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.message == "登出狀態"){
                        alert('請先登入會員');   
                    }else if(data.message == "資料庫沒有這個商品"){
                        alert('沒有此商品'); 
                    }else{
                        $(".F_number").text("");
                        $(".F_pay").text("");
                        $(".F_del").text("");
                        $(".F_hidden_qty").text("")
                        localStorage.clear();
                        alert('加到購物車');
                    }
                })
            // })
           
            // $(".F_number").text("");
            // $(".F_pay").text("");
            // $(".F_del").text("");
            // $(".F_hidden_qty").text("")
            // localStorage.clear();
            // alert('加到購物車');
        }
    }
    
    //刪除全部
    delete(){
        $(".F_number").text("");
            $(".F_pay").text("");
            $(".F_del").text("");
            $(".F_hidden_qty").text("")
            localStorage.clear();
            alert('刪除所有東西!');
            $(".F_item_pic").removeClass("F_item_box_choice")
            $(".F_buy_button").removeClass("F_buy_button_check");
    }
    
    //刪除
    delClick() {
        $(".F_del_item").click(function () {
            //local     
            //let id = localStorage.key(i);
            let id = "boxItim" + $(this).siblings(".F_number_item").text();
            console.log(id)
            let item = JSON.parse(localStorage.getItem(id));
            let qty = item.qty;
            let name = item.itemName;
            let numbering = item.itemNumber;
            let pay = item.price;
            let category = item.category;

            //console.log(name + qty + numbering + pay + category)


            if (id == "boxItim" + $(this).siblings(".F_number_item").text() && qty == 3) {
                let item = {
                    "itemName": name,
                    "qty": 2,
                    "itemNumber": numbering,
                    "price": pay,
                    "category": category
                }
                localStorage.setItem(id, JSON.stringify(item))
            } else if (id == "boxItim" + $(this).siblings(".F_number_item").text() && qty == 2) {
                let item = {
                    "itemName": name,
                    "qty": 1,
                    "itemNumber": numbering,
                    "price": pay,
                    "category": category
                }
                localStorage.setItem(id, JSON.stringify(item))
            } else if (id == "boxItim" + $(this).siblings(".F_number_item").text() && qty == 1) {
                localStorage.removeItem("boxItim" + $(this).siblings(".F_number_item").text())
            } else {
                localStorage.removeItem("boxItim" + $(this).siblings(".F_number_item").text())
            }

            console.log("測試他還在不在:" + $(this).siblings().text())
            $(".F_buy_button_thing").css("display", "block")
            $(".F_item_pic_item").removeClass("F_item_box_choice");
            // 編號
            $(this).siblings().text("");
            // 其他
            $(this).text("");

        })
    }


}

export default CardBox;
