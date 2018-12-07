import React, { Component } from "react";
import PropTypes from 'prop-types';

class Page1 extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    console.log(this);
  }
  handleClick=(evt)=>{
    let skill = evt.target.textContent;

    // contactClick是父元件設定的一個屬性
    // 此屬性會指向一個function，將item傳給哪個function
    this.props.contactClick(skill);
    // console.log(this);
  }
  // handleClick(){
  //   console.log(this)
  // }
  render() {
    const {userName,userAge,userSkills} = this.props;
    return (
      <React.Fragment>
        <h3>Child Component - Page1</h3>
        {/* userName是父元件定義的屬性，透過此屬性可以取得其屬性值 */}
        {/* <p>Hello {this.props.userName} 
                 {this.props.userAge}歲,
                 有{this.props.userSkills.length}項技能</p> */}
         <p>Hello {userName} 
                  {userAge}歲,
                  有{userSkills.length}項技能</p>
        <ul>
          {
            userSkills.map((skill,idx)=><li key={idx} 
                  onClick={this.handleClick} 
                  style={{cursor:"pointer"}}>{skill}</li>)
          }
        </ul>
      </React.Fragment>
    );
  }
}

Page1.propTypes = {
  userName: PropTypes.string.isRequired,
  userAge: PropTypes.number,
  userSkills: PropTypes.array
}

Page1.defaultProps = {
  userAge: 28
}

export default Page1;
