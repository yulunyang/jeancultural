import React, { Component } from "react";

class ControllerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      topic:""
    };
  }
  changeNameHandler = evt => {
    const userName = evt.target.value.toUpperCase();
    //console.log(userName)
    this.setState({
      name: userName
    });
  };
  changeMessageHandler = evt => {
    const message = evt.target.value;
    if (message.length <= 10) {
      this.setState({
        message: message
      });
    }
  };
  changeTopicHandler = evt => {
    const topic = evt.target.value;
    this.setState({
        topic: topic
    })
  }
  submitHandler = evt => {
      //ajax 將表單中輸入的資料傳送到Server
      console.log(this.state);
    //   $.ajax({
    //       'url':'',
    //       data:JSON.stringify(this.state)
    //   }).done(function(data){
    //     alert(data);
    //   })
      evt.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <h3>Controlled Form!!</h3>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              id="name"
              placeholder="請輸入姓名"
              value={this.state.name}
              onChange={this.changeNameHandler}
            />
            <span>{this.state.name}</span>
          </div>
          <div className="form-group">
            <label htmlFor="topics">Topics</label>
            <select id="topics" value={this.state.topic} onChange={this.changeTopicHandler} name="topics" className="form-control">
               <option value="topic1">Topic1</option>
               <option value="topic2">Topic2</option>
               <option value="topic3">Topic3</option>
               <option value="topic4">Topic4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="請勿超過300個字..."
              value={this.state.message}
              onChange={this.changeMessageHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
export default ControllerForm;
