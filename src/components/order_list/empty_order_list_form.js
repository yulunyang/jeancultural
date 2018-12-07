import React, { Component } from 'react';
import "./empty_order_list_form.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";



class Empty_order_list_form extends Component{
    constructor(props){
        super(props);
   
    }
    

    render(){
        return(
            <React.Fragment>
                <div className="O_empty_order">
                    <h2>尚未有訂單，趕緊去逛逛吧</h2>
                    <Link to="/buy_items"><img src="images/go_to_shop.svg"></img></Link> 
                </div>

            </React.Fragment>

        )
    }
}

export default Empty_order_list_form;