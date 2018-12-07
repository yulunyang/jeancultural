import React, { Component } from 'react';

class UnControlledForm extends Component{
    constructor(props){
        super(props);
        this.helloTo = React.createRef();
        this.state = {
            name:"guest"
        }
    }
    submitHandler = (evt) =>{
        evt.preventDefault();
        let username = this.helloTo.current.value;
        this.setState({
            name:username
        })
    }
    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.submitHandler}>
                <input type="text" ref={this.helloTo} defaultValue="" />
                <button>Submit</button>                
                <span>Hello {this.state.name}</span>
            </form>
            </React.Fragment>
       
        )
    }
}

export default UnControlledForm;