import React, { Component } from 'react';
import './Home.scss';


class HomePlay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="F_play_home">
                    <img src="/images/home/play.svg" alt="play" className="F_index_title F_play_title" />
                    <div className="F_container">
                        <div className="F_paly_all F_paly_all_top">
                            <figure className="F_play_pic">
                                <img src="/images/home/play_wood.jpg" alt="布置桌子" />
                            </figure>
                            <div className="F_play_text">
                                <div className="F_triangle F_triangle_top"></div>
                                <div className="F_muise_box_box">
                                    <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line1" />
                                    <img src="/images/home/muise_box.svg" alt="音樂盒" className="F_muise_box" />
                                </div>
                                <h3>創作的心意，讓音樂為你傳遞</h3>
                                <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line2" />
                                <div className="F_orange_line"></div>
                                <p className="F_p_top">親自錄製樂曲、DIY演奏音樂鈴，將幸福的聲音送進對方心坎裡將難忘的旅行、結婚、生日 、或節日，化為零件融入演奏音樂鈴，再以鋼 琴、軟體編曲，錄製獨一無二的曲譜卡帶，量身打造專屬的場景與旋律，讓每次演奏、播放都能喚醒心中最溫暖的記憶。</p>
                                <a href="">
                                    <div className="F_know_more F_arrange">了解更多</div>
                                </a>
                            </div>
                        </div>
                        <div className="F_paly_all F_paly_all_bottom">
                            <div className="F_play_text F_play_text_bottom">
                                <div className="F_triangle F_triangle_bottom"></div>
                                <div className="F_muise_box_box F_muise_box_box_bottom">
                                    <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line3" />
                                    <img src="/images/home/muise_box.svg" alt="音樂盒" className="F_muise_box" />
                                </div>
                                <h3 className="F_h3_bottom">創作的心意，讓音樂為你傳遞</h3>
                                <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line4" />
                                <div className="F_orange_line"></div>
                                <p className="F_p_bottom">親自錄製樂曲、DIY演奏音樂鈴，將幸福的聲音送進對方心坎裡將難忘的旅行、結婚、生日 、或節日，化為零件融入演奏音樂鈴，再以鋼 琴、軟體編曲，錄製獨一無二的曲譜卡帶，量身打造專屬的場景與旋律，讓每次演奏、播放都能喚醒心中最溫暖的記憶。</p>
                                <a href="">
                                    <div className="F_know_more F_play_wood">了解更多</div>
                                </a>
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

export default HomePlay;