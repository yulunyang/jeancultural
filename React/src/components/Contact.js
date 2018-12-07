import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import UnControlledForm from './UnControlledForm';
import ControlledForm from './ControlledForm';
import ControlledForm1 from './ControlledForm1';

class Contact extends Component{
    constructor(props){
        super(props)
        this.contactClick = this.contactClick.bind(this);
        
    }
    // 此function會被子元件呼叫
    // 子元件回傳值給function的item參數
    contactClick(item){
       alert(item);
    }

    render(){
        const skills = ["HTML5","CSS3","JavaScript","jQuery"];
        return(
        <React.Fragment>
             <ControlledForm1 />
             {/* <ControlledForm1 /> */}
             <hr />
            <h2>Parent Component - Contact Page</h2>
            {/* 
             放在<Page1中的屬性，userName、userAge、userSkills可以在子元件中存取 
             在子元件中透過 this.props.userName 會得到 Paul
             */}
            <Page1 userName="Paul"  userAge={30} userSkills={skills} contactClick={this.contactClick} /> 
            {/* <Page1 userName="Paul" userSkills={skills} contactClick={this.contactClick} />*/}
            <hr />
            <Page2 today={new Date()} />
            <hr />
            {/* <UnControlledForm /> */}
           
        </React.Fragment>
        );
    }
}

export default Contact;