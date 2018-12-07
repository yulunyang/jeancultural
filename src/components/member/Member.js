import React, { Component } from "react";
import MemberList from "./MemberList";
import MemeberModify from "./MemberModify";
import MemberModify from "./MemberModify";
import members from "./members.json";
class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: members
    };
  }

  addHandler = datas => {
    //datas是子元件傳過來的資料
    //   console.log("member addhandler")
    //   console.log(datas);
    //  this.state.members.push(datas);
    // let members =  this.state.members;
    members.push(datas);
    this.setState({
      members: members
    });
  };
  modifyHandler = (id, type) => {
    //id是子元件傳過來的資料
    //alert("memberId" + id)
    // "1" == 1 => true  !=
    // "1" === 1 => false !==
    switch (type) {
      case "edit":
        alert("edit");
        break;
      case "del":
        const members = this.state.members.filter(
          member => parseInt(member.id) !== parseInt(id)
        );
        this.setState({
          members: members
        });
        break;
    }
  };
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-8">
            {" "}
            <MemberList
              members={this.state.members}
              modify={this.modifyHandler}
            />
          </div>
          <div class="col-4">
            {" "}
            <MemberModify memberAdd={this.addHandler} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Member;
