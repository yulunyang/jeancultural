import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';



class AboutRwd extends Component {
    constructor(props) {
        super(props)
        // console.log(props.match.url)  // /about
    }
    render() {
        return (

            <React.Fragment>
                <div className="F_about_container F_about_container_rwd">
                    {/* <!-- 左邊的 --> */}
                    <div className="F_white_back_about_rwd">
                        <div className="F_brand_pic_box">
                            <div className="F_brand_pic_rwd">
                                <ul className="F_brand_pic_long_box">
                                    <li><img src="/images/brand/Wooderful Life1.jpg" alt="照片1" /></li>
                                    <li><img src="/images/brand/Wooderful Life2.jpg" alt="照片2" /></li>
                                    <li><img src="/images/brand/Wooderful Life3.jpg" alt="照片3" /></li>
                                </ul>
                            </div>
                            <ul className="F_brand_circle_all">
                                <li className="F_brand_circle F_brand_circle1"></li>
                                <li className="F_brand_circle F_brand_circle2"></li>
                                <li className="F_brand_circle F_brand_circle3"></li>
                            </ul>
                        </div>
                        <div className="F_brand_text">
                            <div className="F_brand_logo"><img src="/images/brand_logo/orange_tg.svg" alt="橘底" /><img className="F_brand_logo_text" src="/images/brand_logo/wonderful.svg" alt="Wooderful" /></div>
                            <div className="F_brand_p">木與自然，聯繫著人與萬物，人與木無法分離，亦如人有了木的庇護才得以休息。 Wooderful life取自於＂木與美好生活＂的字義，用原木的溫暖點綴生活，讓自然流露出的溫潤特質，透過木的不同風貌賦予新的生命，也讓生活中擁有值得體會的溫度。</div>
                            <div className="F_brand_line"></div>
                            <div className="F_brand_know_more">了解更多</div>
                        </div>
                    </div>
                    {/* <!-- 右邊的 --> */}
                    <div className="F_white_back_about_rwd">
                        <div className="F_brand_pic_box">
                            <div className="F_brand_pic_rwd">
                                <ul className="F_brand_pic_long_box">
                                    <li><img src="/images/brand/fun1.jpg" alt="照片1" /></li>
                                    <li><img src="/images/brand/fun2.jpg" alt="照片2" /></li>
                                    <li><img src="/images/brand/fun3.jpg" alt="照片3" /></li>
                                </ul>
                            </div>
                            <ul className="F_brand_circle_all">
                                <li className="F_brand_circle F_brand_circle1"></li>
                                <li className="F_brand_circle F_brand_circle2"></li>
                                <li className="F_brand_circle F_brand_circle3"></li>
                            </ul>
                        </div>
                        <div className="F_brand_text">
                            <div className="F_brand_logo"><img src="/images/brand_logo/orange_tg.svg" alt="橘底" /><img className="F_brand_logo_text" src="/images/brand_logo/go_fun.svg" alt="go_fun" /></div>
                            <div className="F_brand_p">舊與新，新與舊文化相遇，和諧融合的趣味，用不同的視角探索，嘗試各種角度讓創意說話，取其音＂來去＂是寄望讓人深入文化，用創意新思維詮釋地方人情，重新體會在地風俗。 來趣系列至推出以來，於特定地區販售限量商品，並以富有使命感與文化底蘊的設計讓在地文化有著完美的獻禮。</div>
                            <div className="F_brand_line"></div>
                            <div className="F_brand_know_more">了解更多</div>
                        </div>

                    </div>
                    {/* <!-- 左邊的 --> */}
                    <div className="F_white_back_about_rwd">
                        <div className="F_brand_pic_box">
                            <div className="F_brand_pic_rwd">
                                <ul className="F_brand_pic_long_box">
                                    <li><img src="/images/brand/maker1.jpg" alt="照片1" /></li>
                                    <li><img src="/images/brand/maker2.jpg" alt="照片2" /></li>
                                    <li><img src="/images/brand/maker3.jpg" alt="照片3" /></li>
                                </ul>
                            </div>
                            <ul className="F_brand_circle_all">
                                <li className="F_brand_circle F_brand_circle1"></li>
                                <li className="F_brand_circle F_brand_circle2"></li>
                                <li className="F_brand_circle F_brand_circle3"></li>
                            </ul>
                        </div>
                        <div className="F_brand_text">
                            <div className="F_brand_logo"><img src="/images/brand_logo/orange_tg.svg" alt="橘底" /><img className="F_brand_logo_text" src="/images/brand_logo/i_maker.svg" alt="I-Marker" /></div>
                            <div className="F_brand_p">讓一成不變的工作也有玩味！ I-Marker打破傳統便利貼的原則，展現獨特記事新樂趣，從簡單的、實用的，幽默的、精緻的到具有功能性的多樣化設計，讓平凡無奇的日常瑣事也可以＂記得＂充滿樂趣，超過近百樣別出心裁的豐富設計，張張不同，滿足不同的需求。</div>
                            <div className="F_brand_line"></div>
                            <div className="F_brand_know_more">了解更多</div>
                        </div>
                    </div>
                    {/* <!-- 右邊的 --> */}
                    <div className="F_white_back_about_rwd">
                        <div className="F_brand_pic_box">
                            <div className="F_brand_pic_rwd">
                                <ul className="F_brand_pic_long_box">
                                    <li><img src="/images/brand/craf1.jpg" alt="照片1" /></li>
                                    <li><img src="/images/brand/craf2.jpg" alt="照片2" /></li>
                                    <li><img src="/images/brand/craf3.jpg" alt="照片3" /></li>
                                </ul>
                            </div>
                            <ul className="F_brand_circle_all">
                                <li className="F_brand_circle F_brand_circle1"></li>
                                <li className="F_brand_circle F_brand_circle2"></li>
                                <li className="F_brand_circle F_brand_circle3"></li>
                            </ul>
                        </div>
                        <div className="F_brand_text">
                            <div className="F_brand_logo"><img src="/images/brand_logo/orange_tg.svg" alt="橘底" /><img className="F_brand_logo_text" src="/images/brand_logo/craf.svg" alt="十字繡" /></div>
                            <div className="F_brand_p">＂以針代筆，以線潤色＂演繹著傳統文化之美，重新詮釋畫中有話的獨特美學。 繡 [xiu] Crafts沿用百年傳承工藝，重拾經典原創精神，獨家研發專利線卡，讓十字繡簡易好上手，構思傳統並導入創新概念的設計，再次啟發文化創意的生活美學。</div>
                            <div className="F_brand_line"></div>
                            <div className="F_brand_know_more">了解更多</div>
                        </div>

                    </div>
                    {/* <!-- 左邊的 --> */}
                    <div className="F_white_back_about_rwd">
                        <div className="F_brand_pic_box">
                            <div className="F_brand_pic_rwd">
                                <ul className="F_brand_pic_long_box">
                                    <li><img src="/images/brand/tip1.jpg" alt="照片1" /></li>
                                    <li><img src="/images/brand/tip2.jpg" alt="照片2" /></li>
                                    <li><img src="/images/brand/tip3.jpg" alt="照片3" /></li>
                                </ul>
                            </div>
                            <ul className="F_brand_circle_all">
                                <li className="F_brand_circle F_brand_circle1"></li>
                                <li className="F_brand_circle F_brand_circle2"></li>
                                <li className="F_brand_circle F_brand_circle3"></li>
                            </ul>
                        </div>
                        <div className="F_brand_text">
                            <div className="F_brand_logo"><img src="/images/brand_logo/orange_tg.svg" alt="橘底" /><img className="F_brand_logo_text" src="/images/brand_logo/fun.svg" alt="紙膠帶" /></div>
                            <div className="F_brand_p">活用平易近人的素材來轉換日常，讓多一點顏色來妝點生活。 為提倡紙膠帶應被廣泛且安心使用的理念，Funtape皆使用台灣SGS認證的無毒原物料，從研發設計，生產開發到製造皆在地完成；隨著推廣的理念，Funtape自2013年起也陸續推出系列手作叢書，希望深耕紙膠帶結合創意生活的廣度。</div>
                            <div className="F_brand_line"></div>
                            <div className="F_brand_know_more">了解更多</div>
                        </div>
                    </div>
                    {/* <!-- 右邊的 --> */}
                    <div className="F_white_back_about_rwd">
                        <div className="F_brand_pic_box">
                            <div className="F_brand_pic_rwd">
                                <ul className="F_brand_pic_long_box">
                                    <li><img src="/images/brand/paper1.jpg" alt="照片1" /></li>
                                    <li><img src="/images/brand/paper2.jpg" alt="照片2" /></li>
                                    <li><img src="/images/brand/paper3.jpg" alt="照片3" /></li>
                                </ul>
                            </div>
                            <ul className="F_brand_circle_all">
                                <li className="F_brand_circle F_brand_circle1"></li>
                                <li className="F_brand_circle F_brand_circle2"></li>
                                <li className="F_brand_circle F_brand_circle3"></li>
                            </ul>
                        </div>
                        <div className="F_brand_text">
                            <div className="F_brand_logo"><img src="/images/brand_logo/orange_tg.svg" alt="橘底" /><img className="F_brand_logo_text" src="/images/brand_logo/paper.svg" alt="紙風景" /></div>
                            <div className="F_brand_p">充滿巧思的設計，優雅的線條變化，獨特的加工技術，在0.4毫米間的微妙光影，透過紙張而呈現的極致工藝。簡單的DIY工具操作，利用紙張原色的質感建構，層疊出虛實精巧的畫面，寫下美好的時刻、時代城市的記憶，演繹出掌間迷人的紙風景。</div>
                            <div className="F_brand_line"></div>
                            <div className="F_brand_know_more">了解更多</div>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        );

    }
    componentDidMount = () => {
        //三個點點 
        $(".F_brand_circle_all li").click(function () {
            var slide = 0;
            slide = $(this).index();
            var width = 0 - 600 * slide + "px";
            $(this).parent().siblings(".F_brand_pic_rwd").children(".F_brand_pic_long_box").css("left", width);
            //圈圈效果
            $(this).siblings().css("backgroundColor", "transparent").end().css("backgroundColor", "#606060");
        });
    }
}

export default AboutRwd;