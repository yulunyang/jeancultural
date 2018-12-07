import React, { Component } from 'react';


class Product_store extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    // componentDidMount() {
    //     this.getGoods();
    // }
    // getGoods() {
    //     fetch("http://localhost:3000/api/goods")
    //         .then(res => res.json())
    //         .then(goods => this.setState({ 
    //             goods: goods,
    //             good:this.initState,
    //             type:'add'
    //         }))
    

    // }
    render(){
        return(
            <React.Fragment>
                {this.props.product_all.map(ct=>
                <div>{ct.good_name}</div>
                )}
            </React.Fragment>
        )
    }
}


export default Product_store;