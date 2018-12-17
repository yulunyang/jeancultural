import React, { Component } from 'react';
import './Customization.scss';
import $ from 'jquery';
import BoxData from './Box_data';

class Box extends Component {
    constructor(props) {
        super(props)
        //連資料庫
        this.initState = {
            muise_box_pic: "",
            muise_box_numbering: "",
            muise_box_name: "",
            muise_box_pay: "",
            category: "",
            sid: ""
        }

        this.state = {
            customization: [],

            customizationbox: this.initState,
            type: 'add'
        }

    }

    getCustomization() {
        fetch("/api/customization")
            .then(res => res.json())
            .then(customization => {
                //console.log(customization)
                this.setState({
                    customization: customization,
                    customizationbox: this.initState,
                    type: 'add'
                })
            })
    }



    render() {
        return (
            <React.Fragment>
                <BoxData customization={this.state.customization} modify={this.modify} />
            </React.Fragment>
        );
    }

    componentDidMount = () => {
        this.getCustomization();

        //恢復可以按叉叉
        $(".F_del_box").removeClass("noclick");

        //有人不可以按叉叉
        $(".F_del_item").addClass("noclick");
        $(".F_del_muise").addClass("noclick");


        //刪除
        $(".F_del_box").click(function () {
            //編號
            $(this).siblings().text("");
            //其他
            $(this).siblings().text("");
            $(this).text("");
            //效果消失
            $(".F_buy_button_box").removeClass("F_buy_button_check");
            $(".F_item_pic_box").removeClass("F_item_box_choice");

            //local
            for (let i = 0, max = localStorage.length; i < max; i++) {
                let id = localStorage.key(i);
                if (id == "box_box") {
                    localStorage.removeItem(id);
                }
            }
                
            
        })


    }
}

export default Box;
