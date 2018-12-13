import React, { Component } from 'react';
import './Customization.scss';
import $ from 'jquery';

class MuiseData extends Component {
    constructor(props) {
        super(props)
    }
    MuiseHandler(e) {
        let numbering = e.currentTarget.dataset.numbering;
        let pay = e.currentTarget.dataset.pay;
        var theImg = document.getElementById(numbering)

        // $(".F_item_pic_filter_img").removeClass("F_item_pic_filter_img_click")
        $(theImg).addClass("F_item_pic_filter_img_click");
        // $(".F_play_muise").removeClass("F_play_muise_click");
        $(theImg).siblings(".F_play_muise").addClass("F_play_muise_click");
        //
        let song = e.currentTarget.dataset.song;
        // let chick_audio = new Audio(`/muise/${song}.mp3`);
        let test_song = document.getElementById(song)
        let other_song = document.querySelectorAll(".F_play_muise_audio")
        console.log(other_song.paused)
        if (test_song.paused) {
            test_song.play()
            $(theImg).siblings(".F_play_muise").attr("src", "/images/muise_muise/play_muise.png");
        } else if (test_song.play) {
            test_song.pause()
            $(theImg).siblings(".F_play_muise").attr("src", "/images/muise_muise/play_stop.png");
        }
        // this.setState({ play: !this.state.play });
        // // console.log(chick_audio);
        // this.state.play ? chick_audio.pause() : chick_audio.play();
    }

    MuiseHandlerBtn(e) {
        //選項也可以選擇
        console.log(e)
        let sid = e.currentTarget.dataset.sid;
        let name = e.currentTarget.dataset.name;
        let numbering = e.currentTarget.dataset.numbering;
        let pay = e.currentTarget.dataset.pay;

        //編號進右邊盒子
        $(".F_number_muise").text(numbering);
        //金額進右邊盒子
        $(".F_pay_muise").text("$" + pay);
        //其他進盒子
        $(".F_del_muise").text("X");
        $(".F_hidden_qty").text("1");
        //
        // $(".F_buy_button_muise").css("display", "none")
        //
        var theImg = document.getElementById(numbering)
        $(".F_item_pic").removeClass("F_item_box_choice")
        $(theImg).parent(".F_item_pic").addClass("F_item_box_choice")
        //按鈕
        $(".F_buy_button").removeClass("F_buy_button_check");
        $(theImg).parent().siblings(".F_buy_button").addClass("F_buy_button_check");
        //     


        //local
        let category = e.currentTarget.dataset.category;
        let item = {
            "itemName": name,
            "itemNumber": numbering,
            "price": pay,
            "category": category
        }
        // 判斷數量
        let theValue = localStorage.category;
        item = { "itemName": name, "itemNumber": numbering, "price": pay, "category": category }
        localStorage.setItem(category, JSON.stringify(item))
    }

    render() {
        console.log(this.props.custommuise)
        return (
            <React.Fragment>
                {/* <div className="F_bigbox"> */}
                {this.props.custommuise.map(custommuise =>
                    <div className="F_item_box">
                        <div className="F_item_pic F_item_pic_muise" data-name={custommuise.muise_muise_name}
                            data-numbering={custommuise.muise_muise_numbering}
                            data-pay={custommuise.muise_muise_pay}
                            data-sid={custommuise.sid}
                            data-song={custommuise.muise_muise_song} onClick={this.MuiseHandler}>
                            {/* {this.state.play ? '' : ''} */}
                            <img className="F_play_muise" onClick={this.StopHandler} src="/images/muise_muise/play_muise.png" alt="play_muise" data-song={custommuise.muise_muise_song} />
                            <img className="F_item_pic_filter_img" id={custommuise.muise_muise_numbering} src={require(`./images/muise_muise/${custommuise.muise_muise_pic}.jpg`)} alt="底座1" />
                            <audio className="F_play_muise_audio" id={custommuise.muise_muise_song} >
                                <source src={require(`./muise/${custommuise.muise_muise_song}.mp3`)} />
                            </audio>
                        </div>
                        <div className="F_item_text" id="F_item_text">
                            <div className="F_which_muise">
                                <p className="F_which_muise_number" name={custommuise.muise_muise_numbering} data-sid={custommuise.sid}>{custommuise.muise_muise_numbering}</p>
                                <span>-</span>
                                <p className="F_which_muise_name" data-sid={custommuise.sid}>{custommuise.muise_muise_name}</p>
                                <p className="F_how_long">{custommuise.muise_muise_long}</p>
                                <p className="F_box_category" data-sid={custommuise.sid}>{custommuise.category}</p>
                            </div>
                            <br />
                            <div className="F_how_much">NT$
                            <p className="F_how_much_pay" data-sid={custommuise.sid}>{custommuise.muise_muise_pay}</p>
                            </div>
                        </div>
                        <div className="F_buy_button F_buy_button_muise" id="F_buy_button"
                            data-name={custommuise.muise_muise_name}
                            data-numbering={custommuise.muise_muise_numbering}
                            data-pay={custommuise.muise_muise_pay}
                            data-sid={custommuise.sid}
                            data-category={custommuise.category}
                            onClick={this.MuiseHandlerBtn}>選擇</div>
                    </div>
                )}
                {/* </div> */}
            </React.Fragment>
        );
    }
    componentDidMount = () => {    
        //樣式
        this.readBox()
    }
    componentDidUpdate = () =>{
        // console.log("update")
        this.readBox();
    }

    readBox() {

        $(document).ready(function () {
            var checkText_b = $(".F_number_muise").text().toLowerCase();
            console.log("抓值:"+ checkText_b)

          
            $('.F_item_box').each(function () {
               
                var num = $(this).find('.F_which_muise_number').text().toLowerCase();
                if (num == checkText_b) {
                    console.log(num + "核對一樣")
                    $(this).find(".F_item_pic").addClass("F_item_box_choice");
                    //按鈕
                    $(this).find(".F_buy_button").addClass("F_buy_button_check");
                }
            });
        });

    }

    

}

export default MuiseData;
