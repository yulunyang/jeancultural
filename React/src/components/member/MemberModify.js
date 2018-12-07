import React, { Component } from 'react';

class MemberModify extends Component{
    constructor(props){
        super(props);
        this.initState = {
             id:"",
            name:"",
            email:"",
            age: ""
        }
        this.state = this.initState;
    }
    handleChange = (evt) => {
        let key = evt.target.id;
        let value = evt.target.value;
        this.setState({
            [key]:value,           
        })
    }
    addHandler = (evt) => {
       //  console.log(this.state);
       //將新增的會員資料傳給父元件 memberAdd > function
       this.props.memberAdd(this.state);
       this.setState(this.initState)
       evt.preventDefault();
    }
    updateHandler = (evt) => {
       evt.preventDefault();
    }
    render(){
        return(
            <form>
                 <div className="form-group">
                   <label htmlFor="id">編號</label>
                   <input type="text" id="id" value={this.state.id} onChange={this.handleChange} className="form-control" placeholder="id"/>
                </div>
                 <div className="form-group">
                   <label htmlFor="name">姓名</label>
                   <input type="text" id="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="name"/>
                </div>
                 <div className="form-group">
                   <label htmlFor="email">電子郵件</label>
                   <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="email"/>
                </div>
                 <div className="form-group">
                   <label htmlFor="age">年紀</label>
                   <input type="number" id="age" value={this.state.age} onChange={this.handleChange} className="form-control" placeholder="age"/>
                </div>
                <button onClick={this.addHandler} className="btn btn-primary mr-3">新增</button>
                <button onClick={this.updateHandler} className="btn btn-secondary">修改</button>
            </form>
        )
    }
}

export default MemberModify;