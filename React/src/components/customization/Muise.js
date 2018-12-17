import React, { Component } from 'react';
import $ from 'jquery';
import MuiseData from './Muise_data';


class Muise extends Component {
    constructor(props) {
        super(props)
        //連資料庫
        this.initState = {
            muise_muise_pic: "",
            muise_muise_numbering: "",
            muise_muise_name: "",
            muise_muise_pay: "",
            muise_muise_long: "",
            muise_muise_song: "",
            muise_muise_category: "",
            sid: ""
        }

        this.state = {
            custommuise: [],
            custommuisebox: this.initState,
            type: 'add'
        }

    }

    getCustommuise() {
        fetch("/api/custommuise")
            .then(res => res.json())
            .then(custommuise => {
                //console.log(custommuise)
                this.setState({
                    custommuise: custommuise,
                    custommuisebox: this.initState,
                    type: 'add'
                })
            })

    }


    render() {
        return (
            <React.Fragment>
                <MuiseData custommuise={this.state.custommuise} modify={this.modify} />
            </React.Fragment>

        );
    }
    componentDidMount = () => {
        this.getCustommuise();
        
        //恢復可以按叉叉
        $(".F_del_muise").removeClass("noclick");

        //有人不可以按叉叉
        $(".F_del_box").addClass("noclick");
        $(".F_del_item").addClass("noclick");
        
        //刪除
        $(".F_del_muise").click(function () {
            //編號
            $(this).siblings().text("");
            //其他
            $(this).siblings().text("");
            $(this).text("");
            //效果消失
            $(".F_buy_button_muise").removeClass("F_buy_button_check");
            $(".F_item_pic_muise").removeClass("F_item_box_choice");

            //local
            for (let i = 0, max = localStorage.length; i < max; i++) {
                let id = localStorage.key(i);
                if (id == "boxMuise") {
                    localStorage.removeItem(id);
                }
            }
        })

        
    }

}

export default Muise;
