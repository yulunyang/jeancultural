import React, { Component } from 'react';

class Store extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.category = props.match.params.category;
    }
    render(){
        return(
            <React.Fragment>
               <h2>24小時購物</h2>
               <p>您要瀏覽 {this.category} 類型的商品</p>
            </React.Fragment>
          
        );
    }
}

export default Store;