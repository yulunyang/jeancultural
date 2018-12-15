import React, { Component } from 'react';
// import './loader.js';
// import DemoCarousel from './slider.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class NewsCard extends Component{
    constructor(props){
        super(props)
        this.state={
            news_titles:[],
        }
    }

    detail (sid) {
                fetch("/api/news/"+ sid, {
                    method: 'GET'
                }).then(res => res.json())
                    .then(news_titles => {                     
                        // let Data = data[0]
                        this.setState({
                            news_titles: news_titles,
                            // test: Data['sid']
                        })
                    });
    }
    componentDidMount(){
        var sid = this.props.NewsCard
        this.detail(sid);
    }
    render(){

        return(
            <React.Fragment>
       {/* {this.props.news.map(news => */}
        <div className=" Y_NewsCard_header"> </div>
        {this.state.news_titles.map(news_title =>
           <div className=" Y_NewsCard_container">   
                 
            <div className="Y_NewsCard_banner">
            <img src={require(`./img/${news_title.news_pic}.jpg`)} alt="" /></div>
           
                <div key={news_title.sid} className="Y_NewsCard_container_p">
                    <div className="Y_NewsCard_socialbar"></div> 
                    <div id="div1" className="Y_NewsCard_p1" >
                    <h2>{news_title.title}</h2>
                    <h3>{news_title.simple_narrative}</h3>
                    </div>
                    <div id="div2" className="Y_NewsCard_p1">                      
                    <h3>{news_title.detailed_description}</h3></div>
                    <div id="title1" className="Y_NewsCard_title1">
                    <h3>{news_title.main_title}</h3>
                    </div>
                    <div id="title2" className="Y_NewsCard_title2">
                    <h3>{news_title.second_title} </h3>
                    </div>
                    <div className="Y_NewsCard_hr"><hr /></div>
                    <div id="title3" className="Y_NewsCard_p2">
                    <h4>{news_title.article_title_1} </h4>
                    </div>
                </div>
            




{/* <DemoCarousel /> */}
 <div className="DemoCarousel_center">
 <Carousel width={800}>
    
                <div className="DemoCarousel">
                    <img src={require(`./img/${news_title.Slider1_1}.jpg`)} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require(`./img/${news_title.Slider1_2}.jpg`)} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require(`./img/${news_title.Slider1_3}.jpg`)} />
                    <p className="legend">Legend 3</p>
                </div>
            {/* )} */}
            </Carousel></div>
<div className="Y_NewsCard_move"><p>←左右滑動看更多→</p></div>

<div className="Y_NewsCard_container_p">
            <div id="title4" className="Y_NewsCard_title1"><h3>「顫慄」品清單TOP 4</h3></div>
            <div id="title5" className="Y_NewsCard_title2"><h3>嘿皮萬聖卡 - 顫慄指數 </h3></div>
            <hr />
            <div id="title6" className="Y_NewsCard_p2"><h4>Hello Kitty 可愛的巫師變裝秀、搞怪擺動的骷髏頭、詭譎的立體南瓜燈，<br/>
            以軋型完成細緻的設計，將充滿萬聖氣息的卡片擺上桌，立刻成為居家辦公空間的療癒點綴！<br/>
            與朋友分享療癒萬聖節 → https://goo.gl/tgSDNH</h4></div>

</div>


<div className="DemoCarousel_center">
 <Carousel width={800}>
                <div className="DemoCarousel">
                    <img src={require(`./img/${news_title.Slider2_1}.jpg`)} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require(`./img/${news_title.Slider2_2}.jpg`)} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require(`./img/${news_title.Slider2_3}.jpg`)} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel></div>
            <div className="Y_NewsCard_move"><p>←左右滑動看更多→</p></div>
            <hr />
            <div className="Y_NewsCard_container_p">
            <h3 id="title7"className="Y_NewsCard_title2">{news_title.content_2}</h3>
            <h4 id="title8" className="Y_NewsCard_title2">{news_title.shop_active}<br/>
            </h4>
            <h4 id="title9"className="Y_NewsCard_title2">{news_title.shop_content}</h4>


            </div>
            <div className="Y_NewsCard_socialbar"></div>





           </div>
        )}
      
            
               
                 </React.Fragment>   
        );
    }
}

export default NewsCard;