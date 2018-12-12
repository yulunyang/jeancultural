import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


class HomePlayRwd extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="F_play_home_rwd">
                    <img src="/images/home/play.svg" alt="play" className="F_index_title F_play_title" />
                    <div className="F_container F_container_play_rwd">
                        <div className="F_paly_box_rwd">
                            <div className="F_play_pic">
                                <img src="/images/home/play_wood.jpg" alt="布置桌子" />
                            </div>
                            <div className="F_play_text_rwd">
                                <div className="F_triangle F_triangle_top"></div>
                                <div className="F_muise_box_box F_muise_box_box_top">
                                    <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line1" />
                                    <img src="/images/home/muise_box.svg" alt="音樂盒" className="F_muise_box" />
                                </div>
                                <h3 className="F_h3_bottom_rwd">創作的心意，讓音樂為你傳遞</h3>
                                <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line2" />
                                
                                <p className="F_paly_rwd">親自錄製樂曲、DIY演奏音樂鈴，將幸福的聲音送進對方心坎裡將難忘的旅行、結婚、生日 、或節日，化為零件融入演奏音樂鈴，再以鋼 琴、軟體編曲，錄製獨一無二的曲譜卡帶，量身打造專屬的場景與旋律，讓每次演奏、播放都能喚醒心中最溫暖的記憶</p>
                                {/* <a href="">
                                    <div className="F_know_more_rwd F_arrange_rwd">了解更多</div>
                                </a> */}
                            </div>
                        </div>
                        <div className="F_paly_box_rwd F_paly_box_rwd_bottom">
                            <div className="F_play_text_rwd F_play_text_bottom_rwd">
                                <div className="F_triangle F_triangle_bottom"></div>
                                <div className="F_muise_box_box F_muise_box_box_bottom">
                                    <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line1" />
                                    <img src="/images/home/muise_box.svg" alt="音樂盒" className="F_muise_box" />
                                </div>
                                <h3 className="F_h3_bottom_rwd">創作的心意，讓音樂為你傳遞</h3>
                                <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line2" />
                                <p className="F_paly_rwd">親自錄製樂曲、DIY演奏音樂鈴，將幸福的聲音送進對方心坎裡將難忘的旅行、結婚、生日 、或節日，化為零件融入演奏音樂鈴，再以鋼 琴、軟體編曲，錄製獨一無二的曲譜卡帶，量身打造專屬的場景與旋律，讓每次演奏、播放都能喚醒心中最溫暖的記憶。</p>
                                <Link  to="/customization">
                                    <div className="F_know_more_rwd">了解更多</div>
                                </Link>
                            </div>
                            <figure className="F_play_pic">
                                <img src="/images/home/cus.jpg" alt="玩木頭" />
                            </figure>
                        </div>
                    </div>
                </div>
            </React.Fragment >

        );
    }
    componentDidMount = () => {

    }
}

export default HomePlayRwd;