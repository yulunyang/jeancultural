import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Play.scss';
import Play_banner from './Play_banner';
import Play_nav from './Play_nav';
import Drop from './Drop';
import Drag from './Drag';
// import Management from './Management';



class Play extends Component{
    constructor(props){
        super(props)
        // console.log(props.match.url)  // /about
    }
    handleDrop = () => {
       // alert("drop")
        this.setState({})
     }
    render(){
        return(
         
         <React.Fragment>
        <Play_banner />
        <Play_nav />
        <Drop handleDrop = {this.handleDrop}  />
        <div className="Y_container">
        <div className="Y_container Y_triangle2_bg"> 
        <div className="Y_triangle2"></div>
        </div></div>
        <Drag  />
       {/* <Management /> */}
         </React.Fragment>
        
         );
    }
}

export default Play;