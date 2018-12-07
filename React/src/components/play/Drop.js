import React, { Component } from 'react';
import './Dragdrop.scss';
import './gragDrop.js';
import $ from 'jquery';

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
        // var theTab = document.querySelector('#tab');
        // theTab.addEventListener('dragover',function(event){
        //     event.preventDefault();

        // });
        // theTab.addEventListener('drop',(event) => {
        //     console.log("drop");
        //     this.props.handleDrop(); //通知父元件  
        //     var zones =  document.querySelectorAll("#tab-content-1");
        //     var clone, clonenot;
        //     event.preventDefault();
        //     event.stopPropagation();               
        //     var id = event.dataTransfer.getData("text/plain");
        //     console.log("id：" + window.dragTarget.id)
        //     if(window.dragTarget){
        //         if(window.dragTarget.getAttribute("data-clone") != '1'){
        //             clone = window.dragTarget.cloneNode(true);
        //             clone.setAttribute("data-clone", "1");
        //             event.target.appendChild(clone);
        //         }
        //       var id =window.dragTarget.id;
        //       var name=window.dragTarget.querySelector('p:first-child').textContent;
        //       var price=window.dragTarget.querySelector('span:first-child').textContent;
        //       var item= {"itemName":name,"qty":qty,"price":price}
        //       var theValue = localStorage.getItem(window.dragTarget.id)  //key:value 
        //       console.log(localStorage.length)
        //         if(theValue){
        //           //購物車有此商品，數量+1
        //           var qty = JSON.parse(theValue).qty + 1
        //           var item= {"itemName":name,"qty":qty,"price":price}
        //           localStorage.setItem(id,JSON.stringify(item))
           
        //         }else{       
        //           item = {"itemName":name,"qty":1,"price":price}
        //           localStorage.setItem(id,JSON.stringify(item))

        //         }     
        //     }     






     

        var zone =  document.querySelector("#tab-content-1");   
        zone.addEventListener("dragover",function(event){
            event.preventDefault();
        });
       zone.addEventListener("drop", (evt) => {
       
        var clone, clonenot;
        evt.preventDefault();
        evt.stopPropagation();               
        var id = evt.dataTransfer.getData("text/plain");

        //不能複製
        console.log(window.dragTarget);
        if(window.dragTarget){
            console.log('::', window.dragTarget.getAttribute("data-clone"));
            if(window.dragTarget.getAttribute("data-clone") != '1'){
                clone = window.dragTarget.cloneNode(true);
                clone.setAttribute("data-clone", "1");
                evt.target.appendChild(clone);
            }
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
              <li><a href="#tab-1">簡潔風格</a></li>
              {/* <li><a href="#tab-2">優雅風格</a></li>
              <li><a href="#tab-3">獨特風格</a></li>
              <li><a href="#tab-4">雅痞風格</a></li> */}
            </ul>
           
            <div id="tab-content-1" className="tab-content-1 tab-drop" ></div>
            {/* <div className="tab-content-2 tab-drop"></div>
            <div className="tab-content-3 tab-drop"></div>
            <div className="tab-content-4 tab-drop"></div> */}
            </div>

            </div>


            

         </React.Fragment>
           



        );
    }
}

export default Drop;