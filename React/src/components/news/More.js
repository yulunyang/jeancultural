import React, { Component } from 'react';
import './News.scss';

class More extends Component{
    constructor(props){
        super(props)
       
    }
    // handler = (evt) => {
    //   this.props.modify(evt.target.dataset.sid,evt.target.dataset.type);
    // }
    render(){
        return(
            <React.Fragment>                  
    
    <a href="">
        <div className="Y_more" id="Y_more">More
        </div>
    </a>


            </React.Fragment>
        )
    }

}

export default More;