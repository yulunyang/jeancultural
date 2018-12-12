import React, { Component } from 'react';

import $ from 'jquery';


class Sticky extends Component {
    constructor(props) {
        super(props)
    }

    random() {
        $(document).ready(function () {
            //進去
            $(".F_sticky").hover(function (e) {
                $(".F_sticky").css("right", "200px");
                var cont = document.getElementById('F_blessing');
                var ar = new Array
                    ("生日快樂,祝你有個美好的一天~",
                    "聖誕快樂，寫一個網站不容易",
                    "客製化一個音樂鈴給自己一天的好心情",
                    "買一點廢廢萌萌的小東西放在桌上吧~",
                    "嗚嗚嗚嗚嗚嗚嗚嗚嗚",
                    "我覬覦你的錢包",
                    "開玩笑啦~");

                ar.sort(function (a, b) {
                    return Math.random() - .5;
                });

                cont.innerHTML = ar[2];
                e.preventDefault()
            },function(){
                $(".F_sticky").css("right", "-80px");
            })
    
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="F_sticky">
                    <img src="/images/sticky.png" className="F_sticky_img" alt="祝福" />
                    <p id="F_blessing"></p>
                </div>
            </React.Fragment >

        );
    }
    componentDidMount = () => {
        this.random()
    }
}

export default Sticky;