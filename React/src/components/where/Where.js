import React, { Component } from 'react';
import './Where.scss';
import './WhereRwd.scss';
import Where_banner from './Where_banner';
import $ from 'jquery';

class Where extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const place=["誠品各門市","松菸小賣所","有趣日月潭","黃金博物館-金采","昇恆昌各門市","三創文具","台隆手創館京站門市"];
        const where=["請洽各門","台北市信義區光復南路133號"," 南投市南投縣魚池鄉水社村中山路102號","新北市瑞芳區金光路8號金瓜石","請洽各門","台北市中正區市民大道三段2號","台北市大同區承德路一段1號京站時尚廣場3樓"];
        const tel=["","TEL : 02-6636-5555","","","","",""];
        const lists=[];
        for(let i=0;i<=place.length-1;i++){
            //記得在JSX中使用JS變數要用花括號包著
            lists.push(<div className="F_where_small_text">
            <i className="material-icons orange600 md-48">place</i>
            <p className="F_where_palce">{place[i]}</p>
            <div className="F_where_talk_box">
                <div className="mwt_border">
                    <span className="arrow_t_int"></span>
                    <span className="arrow_t_out"></span>
                    {where[i]} <br />{tel[i]}
                    </div>
            </div>
        </div>)
        }
        return (
            <React.Fragment>
                <Where_banner />
                <div className="F_white_back_where">
                    <div className="F_container_where">
                        <div className="F_where_store_p">門市據點</div>
                        <div className="F_where_box_big">
                            <div className="F_where_box F_where_box_rwd">
                                <div className="F_where_pic">
                                    <img src="images/where/place1-1.jpg" alt="門市照片" />
                                </div>
                                <div className="F_where_text_box">
                                    <a href="https://reurl.cc/35R3X" target="_blank">
                                        <div className="F_map_icon_top"><img className="F_map_icon_img" src="images/where/mapicon.svg" alt="地圖" /></div>
                                    </a>
                                    <h3>Wooderful life華山門市</h3>
                                    <h4>台北市中正區八德路一段1號(中四B長廊)</h4>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">TIME</p>
                                        <p className="F_p_where_bc">週一 至 週日 11:00 ~ 21:00</p></div>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">TEL</p>
                                        <p className="F_p_where_bc">02-23416905</p></div>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">MEMO</p>
                                        <p className="F_p_where_bc">DIY手作時間:11:00-18:00 /木育森林開放時間:11:00-20:00</p></div>
                                </div>
                                <a href="https://reurl.cc/35R3X" target="_blank">
                                    <div className="F_where_map"><img src="images/where/place1-2.jpg" alt="地圖" /></div>
                                </a>
                                <a href="https://reurl.cc/35R3X" target="_blank">
                                    <div className="F_map_icon"><img className="F_map_icon_img" src="images/where/mapicon.svg" alt="地圖" /></div>
                                </a>
                            </div>
                            {/* /// */}
                            <div className="F_where_box F_where_box_rwd">
                                <div className="F_where_pic"><img src="images/where/place2-1.jpg" alt="門市照片" /></div>
                                <div className="F_where_text_box">
                                <a href="https://reurl.cc/OkzER" target="_blank">
                                    <div className="F_map_icon_top"><img className="F_map_icon_img" src="images/where/mapicon.svg" alt="地圖" /></div>
                                </a>
                                    <h3>Wooderful life台中歌劇院門市</h3>
                                    <h4>台中市西屯區惠來路二段101號</h4>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">TIME</p>
                                        <p className="F_p_where_bc">週日 至 週四 11:30 ~ 21:00 / 週五 至 週六 11:30 ~ 22:00</p></div>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">TEL</p>
                                        <p className="F_p_where_bc">0975762291</p></div>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">MEMO</p>
                                        <p className="F_p_where_bc">DIY手作時間: 閉店時間前一小時截止入場</p></div>
                                </div>
                                <a href="https://reurl.cc/OkzER" target="_blank">
                                    <div className="F_where_map"><img src="images/where/place2-2.jpg" alt="地圖" /></div>
                                </a>
                                <a href="https://reurl.cc/OkzER" target="_blank">
                                    <div className="F_map_icon"><img className="F_map_icon_img" src="images/where/mapicon.svg" alt="地圖" /></div>
                                </a>
                            </div>
                            {/* /// */}
                            <div className="F_where_box F_where_box_rwd">
                                <div className="F_where_pic"><img src="images/where/place3-1.jpg" alt="門市照片" /></div>
                                <div className="F_where_text_box">
                                <a href="https://reurl.cc/GbQXp" target="_blank">
                                    <div className="F_map_icon_top"><img className="F_map_icon_img" src="images/where/mapicon.svg" alt="地圖" /></div>
                                </a>
                                    <h3>繡〔Xiu〕Crafts-誠品松菸門市</h3>
                                    <h4>台北市信義區松菸路８８號２Ｆ</h4>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">TIME</p>
                                        <p className="F_p_where_bc">週一 至 週四 11:00 ~ 22:00 / 週五 至 週日 11:00 ~ 23:00</p></div>
                                    <div className="F_where_text_box_detail">
                                        <p className="F_where_text_small_title">TEL</p>
                                        <p className="F_p_where_bc">02-6636-5888#1621</p></div>
                                </div>
                                <a href="https://reurl.cc/GbQXp" target="_blank">
                                    <div className="F_where_map"><img src="images/where/place3-2.jpg" alt="地圖" /></div>
                                </a>
                                <a href="https://reurl.cc/GbQXp" target="_blank">
                                    <div className="F_map_icon"><img className="F_map_icon_img" src="images/where/mapicon.svg" alt="地圖" /></div>
                                </a>
                            </div>
                        </div>
                        {/* /// */}
                        <div className="F_where_store_p F_where_store_p_small">其他銷售通路</div>
                        <div className="F_where_small_store_box">
                        {lists}
                            {/* <div className="F_where_small_text">
                                <i className="material-icons orange600 md-48">place</i>
                                <p>誠品各門市</p>
                            </div>
                            <div className="F_where_small_text">
                                <i className="material-icons orange600 md-48">place</i>
                                <p className="F_where_palce F_where_palce1">松菸小賣所</p>
                                <div className="F_where_talk_box F_where_talk_box_place1">
                                    <div className="mwt_border">
                                        <span className="arrow_t_int"></span>
                                        <span className="arrow_t_out"></span>
                                        台北市信義區光復南路133號 <br />TEL : 02-6636-5555
                                        </div>
                                </div>
                            </div>
                            <div className="F_where_small_text">
                                <i className="material-icons orange600 md-48">place</i>
                                <p>有趣日月潭</p>
                            </div>
                            <div className="F_where_small_text">
                                <i className="material-icons orange600 md-48">place</i>
                                <p>黃金博物館-金采</p>
                            </div>
                            <div className="F_where_small_text">
                                <i className="material-icons orange600 md-48">place</i>
                                <p>昇恆昌各門市</p>
                            </div>
                            <div className="F_where_small_text">
                                <i className="material-icons orange600 md-48">place</i>
                                <p>三創文具</p>
                            </div>
                            <div className="F_where_small_text">
                                <i className="material-icons orange600 md-48">place</i>
                                <p>台隆手創館京站門市</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    componentDidMount = () => {

        //顯示地點
        $(".F_where_palce").click(function () {
            $(this).siblings(".F_where_talk_box").slideToggle("fast");
        })



    }
}

export default Where;
