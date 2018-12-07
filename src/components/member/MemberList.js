import React, { Component } from 'react';

class MemberList extends Component{
    constructor(props){
        super(props);
        // console.log("====memberlist====")
        // console.log(this.props.members);
    }
    handler = (evt) => {
      //alert(evt.target.dataset.id)
       this.props.modify(evt.target.dataset.id, evt.target.dataset.type)
    }
    render(){
        return(
          <table className="table table-bordered">
              <thead className="thead-light">
                  <tr>
                      <th>編號</th>
                      <th>姓名</th>
                      <th>電子郵件</th>
                      <th>年紀</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.props.members.map(member =>                          
                            <tr key={member.id}>
                                <td>{member.id}</td> 
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.age}</td>
                                <td><button className="btn btn-danger mr-3" 
                                            data-id={member.id} data-type="del"
                                            onClick={this.handler}>Del</button>
                                    <button className="btn btn-info" 
                                            data-id={member.id} data-type="edit"
                                            onClick={this.handler}>Edit</button></td> 
                            </tr>)                    
                  }
              </tbody>
          </table>

        )
    }
}

export default MemberList;