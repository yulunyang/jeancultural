import React, { Component } from 'react';
import './News.scss';
import './LookNews_js.js';

class LookNews extends Component{
    constructor(props){
        super(props)
       
    }
    // handler = (evt) => {
    //   this.props.modify(evt.target.dataset.sid,evt.target.dataset.type);
    // }
    render(){
        return(
            <React.Fragment>                  
                <div  className="F_container_cus ">
                <div className="F_small_title_box">
                        <div className="F_color_icon"><img src="/images/color_icon.svg" alt="color_icon" /></div>
                        <h3>客製化自己的音樂鈴吧！</h3>
                    </div>    
                <div>

                    <div class="c-dropdown js-dropdown">
                        <input type="hidden" name="Framework" id="Framework" class="js-dropdown__input" />
                        <span className="c-button c-button--dropdown js-dropdown__current">全部消息</span><i class="fas fa-caret-down "></i>
                        <ul className="c-dropdown__list_news">
                            <li className="Y_c-dropdown__item" data-dropdown-value="angular">全部消息</li>
                            <li className="Y_c-dropdown__item" data-dropdown-value="angular">最新動態</li>
                            <li className="Y_c-dropdown__item" data-dropdown-value="backbone">國際展覽</li>
                            <li className="Y_c-dropdown__item" data-dropdown-value="ember">品牌活動</li>
                        </ul>
                        </div>






                </div> 
                
                </div>

            </React.Fragment>
        )
    }

}

export default LookNews;