import React, { Component } from 'react';
import $ from 'jquery';
import ThingsData from './Box_thing_data';



class Box_thing extends Component {
    constructor(props) {
        super(props)
        //連資料庫
        this.initState = {
            muise_thing_pic: "",
            muise_thing_numbering: "",
            muise_thing_name: "",
            muise_thing_pay: "",
            muise_thing_qty: "",
            muise_thing_value: "",
            sid: ""
        }

        this.state = {
            customthing: [],
            customthingbox: this.initState,
            type: 'add'
        }

    }

    getCustomthing() {
        fetch("http://localhost:3000/api/customthing")
            .then(res => res.json())
            .then(customthing => {
                //console.log(customthing)
                this.setState({
                    customthing: customthing,
                    customthingbox: this.initState,
                    type: 'add'
                })
            })


    }
    getTryFilter() {

        $(document).ready(function () {

            $(".F_filter_p").on("click", function () {

                console.log($(this).data())
                $(".F_item_box").hide();

                if ($(this).data("thingValue") == 'all') {
                    $(".F_item_box").show();
                   
                }else{
                    $("div[data-thing-value='" + $(this).data("thingValue") + "']").show();
                }
            })
        });

    }

    render() {
        return (
            <React.Fragment>
                 <div className="F_filter_choice">
                    <p className="F_filter_p F_filter_p1" data-thing-value="animals">動物系列</p>
                    <p className="F_filter_p F_filter_p2" data-thing-value="people">人名系列</p>
                    <p className="F_filter_p F_filter_p3" data-thing-value="everyone">聯名系列</p>
                </div>
                <ThingsData customthing={this.state.customthing} modify={this.modify} />
            </React.Fragment>

        );

    }
    componentDidMount = () => {
        this.getCustomthing()
        this.getTryFilter()
        //綠盒子和上下步的判斷式

        //恢復可以按叉叉
        $(".F_del_item").removeClass("noclick");

        //篩選器顏色
        $(".F_filter_p").click(function () {
            $(this).siblings(".F_filter_p").removeClass("F_filter_p_click").end().addClass("F_filter_p_click");
        })

        //有人不可以按叉叉
        $(".F_del_box").addClass("noclick");
        $(".F_del_muise").addClass("noclick");


    }
}

export default Box_thing;
