import React, { Component } from 'react';
import "./order_list_form.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';



class Order_list_form extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            orders:[],
            totalPage: 0,
            currentPage: 1,
            perPage: 9,  //一次9筆資料
            upperPageBound: 3,  //設定每組最高的分頁數字
            lowerPageBound: 0,  //設定每組最低的分頁數字
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3 //設定每組會有幾個分頁數字
        }
    }
    //按下...計算下一組要產生的分頁數字
    btnIncrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.getOrderList(listid)
  }
  //按下...計算上一組要產生的分頁數字
  btnDecrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.getOrderList(listid)
  }

  btnPrevClick = () => {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({ 
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
       });
    }
    let listid = this.state.currentPage - 1;
    this.getOrderList(listid)
  }

  btnNextClick = () => {
    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({ 
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.getOrderList(listid)
  }
//   componentDidMount() {
//     this.getOrderList(1);
//     // this.getDiscount_price();
//   }
  componentDidUpdate() {
    $("ul li.active").removeClass('active');
    $('ul li#'+this.state.currentPage).addClass('active');
  }
  paging = e => {
    e.preventDefault();
    this.getOrderList($(e.target).text())
  }
  getOrderList(page) {
    fetch("/api/orderList/" + page)
      .then(res => res.json())
      .then(orders => {
        this.setState({
        orders:orders.datas,
        
          totalPage: Math.ceil(orders.TotalCount / this.state.perPage), //計算出總共幾頁
          currentPage: page
        })
        //計算 prev next 按鈕是否出現
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if (this.state.totalPage === parseInt(page) && this.state.totalPage > 1) {
          this.setState({ isPrevBtnActive: '' });
        }
        else if (parseInt(page) === 1 && this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
        }
        else if (this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
          this.setState({ isPrevBtnActive: '' });
        }

      })

  };



    componentDidMount=()=> {
        this.getOrderList();
        // console.log(this.state)
    };
    
    getOrderList=()=> {
        
        fetch("/api/orderList/",{
            method: 'GET',
            mode: 'cors'
        })
        .then(res => res.json())
        .then(orders => {
            //console.log(data);
        console.log(orders[0]);
            this.setState({
                orders:orders,
            
                ...orders[0]       //將資料展開丟入表格           
            })
        })
    };
    

    render(){
        const { totalPage, currentPage, perPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;

        //產生頁碼
        const pageNumbers = [];
        for (let i = 1; i <= totalPage; i++) {
          pageNumbers.push(i);
        }
    
        //產生數字的分頁按鈕
        const renderPageNumbers = pageNumbers.map(number => {
          if (number === 1 && currentPage === 1) {
            return (
              <li key={number} className='T_page-item' id={number}><a href='#' className="T_page-link" id={number} onClick={this.paging}>{number}</a></li>
            )
          }
          else if ((number < upperPageBound + 1) && number > lowerPageBound) {
            return (
              <li key={number} id={number} className='T_page-item'><a href='#' className="T_page-link" id={number} onClick={this.paging}>{number}</a></li>
            )
          }
        });
    
        //按下...產生下一組分頁數字
        let pageIncrementBtn = null;
        if (pageNumbers.length > upperPageBound) {
          pageIncrementBtn = <li className="T_page-item"><a href='#' className="T_page-link" onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        //按下...產生上一組分頁數字
        let pageDecrementBtn = null;
        if (lowerPageBound >= 1) {
          pageDecrementBtn = <li className="T_page-item"><a href='#' className="T_page-link" onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
    
        //判斷是否產生prev按鈕
        let renderPrevBtn = null;
        if (isPrevBtnActive !== 'disabled') {    
        renderPrevBtn = <li className="T_page-item"><a className="T_page-link" href='#' id="btnPrev" onClick={this.btnPrevClick}> 《 </a></li>
        }
    
        //判斷是否產生next按鈕
        let renderNextBtn = null;
        if (isNextBtnActive !== 'disabled') {
          renderNextBtn = <li className="T_page-item"><a className="T_page-link" href='#' id="btnNext" onClick={this.btnNextClick}> 》 </a></li>
        }
        return(
            <React.Fragment>
                 
                <div className="O_latest_order">
                    <table className="O_latest_order_table">
                        <thead>
                            <tr>
                                <th className="O_latest_order_table_th">編號</th>
                                <th className="O_latest_order_table_th">訂購時間</th>
                                <th className="O_latest_order_table_th">訂單編號</th>
                                <th className="O_latest_order_table_th">訂單金額</th>
                                <th className="O_latest_order_table_th">付款方式</th>
                                <th className="O_latest_order_table_th">商品數量</th>
                                <th className="O_latest_order_table_th">處理狀態</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.orders.map(orders =>
                            <tr>
                                <td className="O_latest_order_table_td" >{orders.sid}</td>
                                <td className="O_latest_order_table_td" name="order_at">{orders.order_at}</td>
                                <td className="O_latest_order_table_td_a" name="sid" ><Link to="/order_list_detailed">{orders.sid}</Link></td> 
                                <td className="O_latest_order_table_td" name="total" >{orders.total}</td>
                                <td className="O_latest_order_table_td"name="payWay" >{orders.payWay}</td>
                                <td className="O_latest_order_table_td"name="quantity" >{orders.quantity}</td>
                                <td className="O_latest_order_table_td"name="Processing_status">{orders.Processing_status}</td>
                                
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <nav className="O_page_main">
                        <ul className="O_page">
                            {renderPrevBtn}
                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}
                            {renderNextBtn}
                        </ul>
                    </nav>
                </div>
            
                
            </React.Fragment>

        )
    }
}

export default Order_list_form;