import React, { Component } from 'react';
import './News.scss';

class News_banner extends Component{
    constructor(props){
        super(props)
       
    }
    // handler = (evt) => {
    //   this.props.modify(evt.target.dataset.sid,evt.target.dataset.type);
    // }
    render(){
        return(
            <React.Fragment>                  
               

 <div className="F_customization_banner">
                <figure className="F_customization_banner_pic"><img src="/images/customization.jpg" alt="客製化banner" /></figure>
                <h2>最新消息<br /><span>News&Event</span></h2>
                <figure className="F_customization_color"><img src="/images/color_line.svg" alt="color_line" /></figure>
                <div className="F_triangle_banner"></div>
                <div className="F_long_color"></div>
            </div>
               
            </React.Fragment>
        )
    }

}

export default News_banner;