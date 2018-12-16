import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './News.scss';
import $ from 'jquery';
import SelectBox from './select-box/SelectBox.js';
// import './loader.js';
import ReactDOMServer from 'react-dom/server';
import NewsCard from './NewsCard';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


class Cards extends Component {
    // handler = (evt) => {
    //     this.props.modify(evt.target.dataset.sid,evt.target.dataset.type);
    //   }

    constructor(props) {
        super(props)
        this.initState = {
            title: "",
            simple_narrative: "",
            news_pic: "",
            news_pic2: "",
            post_time: "",
            value: "",
            sid: "",
            showme: false

        }
        this.state = {
            new: [],
            state: [],
            new: [],
            type: 'add',
            showme: false,
            NewsCard:""
            // test:''
        }

    }

    componentDidMount(evt) {
        this.getNews();
        // this.getNewsCard();
        this.getNewsFilter();
        

    }
    componentDidUpdate(){
        this.getLoad();
    }
    getLoad(){
        $(".Y_news_box").slice(0, 6).show();
        $("#Y_more").on('click', function (e) {
            e.preventDefault();
            $(".Y_news_box:hidden").slice(0, 3).slideDown();
            if ($(".Y_news_box:hidden").length == 0) {
                $("#Y_more").fadeOut('slow');
            }
        });
        // $(document).ready(function(){
        //     $("#Y_know_more").click(function(){
               
        //         $(".Y_newsIframe_display").css("display","block");
        //     });
        //     $(".Y_newsIframe_fas").click(function(){
               
        //         $(".Y_newsIframe_display").css("display","none");
        //     });
        // });
    }
    getNews() {
        fetch("http://localhost:3000/api/news/")
            .then(res => res.json())
            .then(news => this.setState({
                news: news,
                new: this.initState,
                type: 'add'
            }))



    }
 
    getNewsFilter(){

            $(document).ready(function(){


                $(".Y_c-dropdown__item").on("click", function(){
                    $(".Y_news_box").hide();

                     if($(this).data("dropdownValue")=='all'){

                    $(".Y_news_box").show();
                }else{
                    $("div[data-value='"+$(this).data("dropdownValue")+"']").show();
                }            
                })
              });

    }

    detail = (sid) => {
        // alert(sid)
                fetch("http://localhost:3000/api/news/"+ sid, {
                    method: 'GET'
                }).then(res => res.json())
                    .then(data => {                     
                        let Data = data[0]
                        this.setState({
                            new: data,
                            // test: Data['sid']
                        })
                    });
    }
    showhide = (event) => {
        // alert("hi")
        console.log(event.target.dataset.sid)
        let sid = event.target.dataset.sid;

        this.setState({
            showme: !this.state.showme,
            NewsCard: event.target.dataset.sid

        })
        this.detail(sid)
    }
    showhide_i = (event) => {
        this.setState({
            showme: !this.state.showme

        })
    }

    render() {
      
        return (
            <React.Fragment>
                {/* nav */}
                <div className="Y_container_news">
                    <div className="Y_nav">
                        <img className="Y_color_icon" src="/images/color_icon.svg" alt="卡片" />
                        <p className="Y_looknews">快來看看知音還有什麼新消息！</p>

                    </div>
                    <div>

                        <div className="c-dropdown js-dropdown" id="selectBox">
                        <input type="hidden" name="Framework" id="Framework" class="js-dropdown__input" />
                        <span className="c-button c-button--dropdown js-dropdown__current" onChange={ (e) => { this.selectNews(); } }>全部消息</span>
                        <i className="fas fa-caret-down "></i>
                        <ul className="c-dropdown__list_news" >
                            <li className="Y_c-dropdown__item" data-dropdown-value="all">全部消息</li>
                            {/* <li className="Y_c-dropdown__item" data-dropdown-value="lastest">最新動態</li> */}
                            <li className="Y_c-dropdown__item" data-dropdown-value="exhibition">國際展覽</li>
                            <li className="Y_c-dropdown__item" data-dropdown-value="brand">品牌活動</li>
                        </ul>
                        </div>
                    </div>

                </div>
                {/* cards */}

                <div className="Y_news">

                    <div className="Y_container2">
                        <div className="Y_news_container_news d-flex">
                            {this.props.news.map(news =>
                           
                                <div className="Y_news_box" id="Y_news_box" data-value={news.value} data-sid={news.sid}>
                                    <div className="Y_orange_box">
                                        <div className="Y_green_box"> New</div>
                                    </div>
                                    <figure className="Y_circle_pic">
                                        <img src={require(`./img/${news.news_pic}`)} alt="" />
                                        {/* <img src="/images/card.jpg" alt="卡片" /> */}
                                    </figure>
                                    {/* <h5> <Time value={news.post_time} format="YYYY/MM/DD" /></h5> */}
                                    <p className="Y_card_P">{news.title}
                                        <br />{news.simple_narrative}</p>
                                    <a className="Y_know_more2" >
                                        <div className="Y_news_btn">
                                        </div>
                                        <div id="Y_know_more" className="Y_know_more" 
                                            data-type="add"
                                            data-sid={news.sid}
                                            onClick={this.showhide}
                                            onchange={() => this.change()}
                                            >了解更多
                                            {/* {this.state.test} */}
                                    </div>
                                    </a>
                                    </div>
                                
                            )}
                        </div>

                    </div>

                </div>
                {
                    
                    this.state.showme ?
                        <div className="">
                            <div onClick={() => this.showhide_i()} className="Y_newsIframe"></div>            
                            <div className="Y_newsIframe_inner_re">
                                    <div className="Y_newsIframe_inner_ab"
                                        onClick={() => this.showhide_i()} 
                                        id="Y_newsIframe_fas">
                                        <a href="#">
                                        <i class="fas fa-times Y_newsIframe_fas"></i>
                                        </a>
                                        </div>
                                    <div className="Y_newsIframe_inner ">                           
                                        <div className="">
                                            <NewsCard new={this.state.new} NewsCard={this.state.NewsCard}/>                                
                                        </div>
                                       
                                    </div>
                            </div>
                        </div>
                        : null
                }


            </React.Fragment>
        )
    }

}

export default Cards;