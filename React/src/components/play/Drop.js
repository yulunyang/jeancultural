import React, { Component } from 'react';
import './Dragdrop.scss';
import './gragDrop.js';
import $ from 'jquery';
import interact from 'interactjs'

class Drop extends Component{
    constructor(props){
        super(props)
        this.status={
            isLoading:true,
            items:[]

        }
    }
    componentWillMount(nextProps,nextState){    
        // localStorage.setItem('item1',JSON.stringify({"itemName":'紙膠帶',"qty":'3',"price":'90'}));
        // this.setState( localStorage.setItem('item1',JSON.stringify({"itemName":'音樂鈴',"qty":'1',"price":'3000'})););
        
    }
    componentDidMount() {
        this.getDrag();
        this.getTab();
        // this.getMove();
        
    }
    getTab(){
        var $tabPanel = $('#tab-panel') ,
        $tabs = $tabPanel.find('.tabs') ,
        $tab = $tabs.find('a') ,
        $tabContent = $tabPanel.find('.tab-content') ,
        $content = $tabContent.find('> li');
     
    $tab.eq(0).addClass('active');
    $content.eq(0).show().siblings().hide();
     
    $tab.on('click',function(){
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $content.eq($tabIndex).show().siblings().hide();
    });
    }



    getDrag() { 
        var zone =  document.querySelector("#tab");   
        // console.log(zone);
        zone.addEventListener("dragover",function(event){
            event.preventDefault();
            // localStorage.clear();
            
        });
       zone.addEventListener("drop", (evt) => {
        
        var clone, clonenot;
        evt.preventDefault();
        evt.stopPropagation();               
        var id = evt.dataTransfer.getData("text/plain");
        getMove();
        //不能複製
        // console.log(window.dragTarget);
        if(window.dragTarget){
            // console.log('::', window.dragTarget.getAttribute("data-clone"));
            if(window.dragTarget.getAttribute("data-clone") != '1'){
                clone = window.dragTarget.cloneNode(true);
                clone.setAttribute("data-clone", "1");
                evt.target.appendChild(clone);
            }
            // getMove();
          var id =window.dragTarget.id;
          var name=window.dragTarget.querySelector('p:first-child').textContent;
          var price=window.dragTarget.querySelector('span:first-child').textContent;
          var item= {"itemName":name,"qty":qty,"price":price}
          var theValue = localStorage.getItem(window.dragTarget.id)  //key:value 
          
            if(theValue){
              //購物車有此商品，數量+1
              
              var qty = JSON.parse(theValue).qty + 1
              var item= {"itemName":name,"qty":qty,"price":price}
              localStorage.setItem(id,JSON.stringify(item))
       
            }else{  
                
              item = {"itemName":name,"qty":1,"price":price}
              localStorage.setItem(id,JSON.stringify(item))

            }  
            this.props.handleDrop(); //通知父元件   
        }     

        window.dragTarget = null;
        
       });

           
          
            function commafy(num) {
                num = num + "";  //轉成string
                var re = /(-?\d+)(\d{3})/ //正則運算式 regular expression
                while (re.test(num)) {
                    num = num.replace(re, "$1,$2")
                }
                return num;
            }
        
            //Move
            function getMove(){
                interact('.tab-drop .Y_play_contents')
                .draggable({
                  // enable inertial throwing
                  inertia: true,
                  // keep the element within the area of it's parent
                  restrict: {
                    restriction: "parent",
                    endOnly: true,
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                  },
                  // enable autoScroll
                  autoScroll: true,
              
                  // call this function on every dragmove event
                  onmove: dragMoveListener,
                  // call this function on every dragend event
                //   onend: function (event) {
                //     var textEl = event.target.querySelector('p');
              
                //     textEl && (textEl.textContent =
                //       'moved a distance of '
                //       + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                //                    Math.pow(event.pageY - event.y0, 2) | 0))
                //           .toFixed(2) + 'px');
                //   }
                });
              
                function dragMoveListener (event) {
                    let target = event.target,
                        // keep the dragged position in the data-x/data-y attributes
                        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
                
                    // translate the element
                    target.style.webkitTransform =
                    target.style.transform =
                      'translate(' + x + 'px, ' + y + 'px)';
                
                    // update the posiion attributes
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                    // target.style.left=data-x+'px';
                    // target.style.top =data-y+'px';
                    //console.log(target);
                  }
              
                // this is used later in the resizing and gesture demos
                window.dragMoveListener = dragMoveListener;
            }
    }
 
    render(){
        return(
            <React.Fragment> 
       <div  id="cart" className="Y_container  Y_pad">
            <span id="tab-1" >1</span>
            <span id="tab-2">2</span>
            <span id="tab-3" >3</span>
            <span id="tab-4" >4</span>
             
            <div id="tab" ondrop="drop(event)" ondragover="allowDrop(event)">
            
            <ul>
              <li><a href="#tab-1" className="">簡潔風格</a></li>
              <li><a href="#tab-2">優雅風格</a></li>
              <li><a href="#tab-3">獨特風格</a></li>
              <li><a href="#tab-4">雅痞風格</a></li>
            </ul>
           
            <div id="tab-content-1" className="tab-content-1 tab-drop" ></div>
            <div className="tab-content-2 tab-drop"></div>
            <div className="tab-content-3 tab-drop"></div>
            <div className="tab-content-4 tab-drop"></div>
            </div>

            </div>


            

         </React.Fragment>
           



        );
    }
}

export default Drop;