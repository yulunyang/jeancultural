import React, { Component } from 'react';
import './Dragdrop.scss';
import './gragDrop.js';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class Drag extends Component{
    constructor(props){
        super(props)
        this.status={
            isLoading:true,
            itemName:[]

        }
    }
    componentWillMount(nextProps,nextState){
    this.localStorage();

    }
    localStorage(){

    }

    componentDidMount() {
        this.getDrag();
        
    }
    
    getDrag() {        
        //drag      
        var items = document.querySelectorAll(".item");
        var i, k, x, y;
      
            for(var i=0,max=items.length;i<max;i++){
                items[i].addEventListener("dragstart",function(evt){
                    // console.log('dragstart:', evt.target, evt.currentTarget);
                    window.dragTarget = evt.currentTarget;
                    evt.dataTransfer.setData("text/plain", evt.target.id);   
                    
                }                   
                
            )
                
            }

            var zones =  document.querySelectorAll(".tab-drop");
            for(var i=0,max=zones.length;i<max;i++){
                zones[i].addEventListener("dragover",function(evt){
                    evt.preventDefault();    
                               
                })
                //zones[i].addEventListener("drop",dropHandler);
            }
           
            function dropHandler(evt){
                evt.preventDefault();
                evt.stopPropagation();

                var id = evt.dataTransfer.getData("text/plain");
                var sobj = document.querySelector('#'+id);
                // var sobj= $('#products > li:first-child');
                evt.target.appendChild(sobj.cloneNode(true));

                
            }


    }
    render(){
        return(
            <React.Fragment> 

               <div  className="Y_container">
              
             <div id="tab-panel">
             <div className="Y_drag_bg"></div>
                    <div class="tabs">
                    <a>音樂盒</a>
                    <a>紙膠帶/便利貼</a>
                    <a>紙風景</a>
                    <a>十字繡</a>
                    {/* <a>木器</a> */}
                    </div>
                    <ul id="products" class="tab-content Y_tab-content_flex">
                    <li className=""> 
                        <div id="1" draggable="true" className="item" ondrop="drop(event)" ondragover="allowDrop(event)">
                            <img className="Y_play_contents" src="/images/yulun/BB1.svg" draggable="true" ondragstart="drag(event)"/>
                            <div className="Y_display_none" display="none">
                                <p>DN三眼怪</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="2" draggable="true" className="item" >
                            <img className="Y_play_contents" src="/images/yulun/BB2.svg" />
                            <div className="Y_display_none" display="none">
                                <p>小熊維尼</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="3" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB3.svg" />
                            <div className="Y_display_none" display="none">
                                <p>米奇米妮</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="4" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB4.svg" />
                            <div className="Y_display_none" display="none">
                                <p>米奇米妮</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="5" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB5.svg" />
                            <div className="Y_display_none" display="none">
                                <p>三眼怪</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="6" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB6.svg" />
                            <div className="Y_display_none" display="none">
                                <p>小豬</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="7" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB7.svg" />
                            <div className="Y_display_none" display="none">
                                <p>滑板</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="8" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB8.svg" />
                            <div className="Y_display_none" display="none">
                                <p>蛋糕</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="9" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB9.svg" />
                            <div className="Y_display_none" display="none">
                                <p>史努比蛋糕</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                         <div id="10" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB10.svg" />
                            <div className="Y_display_none" display="none">
                                <p>史努比</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                    
                    </li>
                    <li >
                    <div id="21" draggable="true" className="item" ondrop="drop(event)" ondragover="allowDrop(event)">
                            <img className="Y_play_contents" src="/images/yulun/PP1.svg" draggable="true" ondragstart="drag(event)"/>
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="22" draggable="true" className="item" >
                            <img className="Y_play_contents" src="/images/yulun/PP2.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="23" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP3.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="24" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP4.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="25" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP5.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="26" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP6.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="27" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP7.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="28" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP8.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="29" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP9.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                         <div id="30" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP10.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="30" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PP11.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>


                    </li>
                    <li className="Y_tab-content_flex"> 

                        <div id="50" draggable="true" className="item" ondrop="drop(event)" ondragover="allowDrop(event)">
                            <img className="Y_play_contents" src="/images/yulun/PPB1.svg" draggable="true" ondragstart="drag(event)"/>
                            <div className="Y_display_none" display="none">
                                <p>快樂聖誕</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="51" draggable="true" className="item" >
                            <img className="Y_play_contents" src="/images/yulun/PPB2.svg" />
                            <div className="Y_display_none" display="none">
                                <p>麋鹿</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="52" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PPB3.svg" />
                            <div className="Y_display_none" display="none">
                                <p>小野花</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="53" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PPB4.svg" />
                            <div className="Y_display_none" display="none">
                                <p>橄欖葉</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="54" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PPB5.svg" />
                            <div className="Y_display_none" display="none">
                                <p>小雛菊</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="55" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PPB6.svg" />
                            <div className="Y_display_none" display="none">
                                <p>艾菊花</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="61" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/PPB7.svg" />
                            <div className="Y_display_none" display="none">
                                <p>雪花</p>
                                <p><span>200</span></p>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div id="50" draggable="true" className="item" ondrop="drop(event)" ondragover="allowDrop(event)">
                            <img className="Y_play_contents" src="/images/yulun/CC1.svg" draggable="true" ondragstart="drag(event)"/>
                            <div className="Y_display_none" display="none">
                                <p>雪人</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="51" draggable="true" className="item" >
                            <img className="Y_play_contents" src="/images/yulun/CC2.svg" />
                            <div className="Y_display_none" display="none">
                                <p>麋鹿</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="52" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/CC3.svg" />
                            <div className="Y_display_none" display="none">
                                <p>快樂聖誕</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="53" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/CC4.svg" />
                            <div className="Y_display_none" display="none">
                                <p>雪花天使</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="54" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/CC5.svg" />
                            <div className="Y_display_none" display="none">
                                <p>聖誕花圈</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="55" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/CC6.svg" />
                            <div className="Y_display_none" display="none">
                                <p>麋鹿</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="56" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/CC7.svg" />
                            <div className="Y_display_none" display="none">
                                <p>聖誕節</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="57" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/CC8.svg" />
                            <div className="Y_display_none" display="none">
                                <p>十字繡</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                    </li>
                    {/* <li>
                    <div id="41" draggable="true" className="item" ondrop="drop(event)" ondragover="allowDrop(event)">
                            <img className="Y_play_contents" src="/images/yulun/BB1.svg" draggable="true" ondragstart="drag(event)"/>
                            <div className="Y_display_none" display="none">
                                <p>底座1</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="42" draggable="true" className="item" >
                            <img className="Y_play_contents" src="/images/yulun/BB2.svg" />
                            <div className="Y_display_none" display="none">
                                <p>底座</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="43" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB3.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="44" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB4.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="45" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB5.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="46" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB6.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="47" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB7.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="48" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB8.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                        <div id="49" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB9.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                         <div id="item50" draggable="true" className="item">
                            <img className="Y_play_contents" src="/images/yulun/BB10.svg" />
                            <div className="Y_display_none" display="none">
                                <p>音樂鈴</p>
                                <p><span>3000</span></p>
                            </div>
                        </div>
                    </li> */}
                    </ul>
                </div>
                
                
                <script
                        src="https://code.jquery.com/jquery-3.3.1.min.js"
                        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                        crossorigin="anonymous"></script>
  </div>

  {/* <script src="./gragDrop.js"></script> */}
         </React.Fragment>
           



        );
    }
}

export default Drag;