import React, { Component } from 'react';

class Page2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            now: this.props.today.toLocaleTimeString()
        }
        this.handleClick = this.handleClick.bind(this);
        setInterval(()=>{
            this.setState({
                now:(new Date()).toLocaleTimeString()
            })
        },1000)
    }
    handleClick(){
       // console.log(this);
       this.setState({
           now:(new Date()).toLocaleTimeString()
       })
    }
    render(){
        return(
            <React.Fragment>
                 <h3>Page2 {this.state.now}</h3>                
                 <button onClick={this.handleClick}>Click</button>            
            </React.Fragment>
       
        )
    }
}

export default Page2;