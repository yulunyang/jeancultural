import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './News.scss';
import Cards from './Cards';
import News_banner from './News_banner';
import LookNews from './LookNews';
import More from './More';




class News extends Component{
    constructor(props){
        super(props)
        this.initState = {
            title: "",
            simple_narrative: "",
            news_pic: "",
            news_pic2: "",
            post_time: "",
            sid: ""
            
        }

        this.state = {
            news: [],
            
            new: this.initState,
            type: 'add'
        }

    }
    componentDidMount() {
        this.getNews();
    }
    getNews() {
        fetch("http://localhost:3000/api/news")
            .then(res => res.json())
            .then(news => this.setState({ 
                news: news,
                new:this.initState,
                type:'add'
            }))
          

    }
    render(){
        return(
         
         <React.Fragment>
            
          
            <News_banner />

               {/* <LookNews /> */}

               <Cards news={this.state.news} modify={this.modify} />
              
              
            
                  <More />      

         </React.Fragment>
        
         );
    }
}

export default News;