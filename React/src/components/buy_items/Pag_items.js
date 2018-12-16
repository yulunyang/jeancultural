import React, { Component } from 'react';
import $ from 'jquery';
import{Link} from 'react-router-dom'

class Pag_items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Discount_price:[],
      goods: [],
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
    this.getProducts(listid)
  }
  //按下...計算上一組要產生的分頁數字
  btnDecrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.getProducts(listid)
  }

  btnPrevClick = () => {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({ 
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
       });
    }
    let listid = this.state.currentPage - 1;
    this.getProducts(listid)
  }

  btnNextClick = () => {
    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({ 
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.getProducts(listid)
  }
  componentDidMount() {
    this.getProducts(1);
    // this.getDiscount_price();
  }
  componentDidUpdate() {
    $("ul li.active").removeClass('active');
    $('ul li#'+this.state.currentPage).addClass('active');
  }
  paging = e => {
    e.preventDefault();
    this.getProducts($(e.target).text())
  }
  getProducts(page) {
    fetch("/api/goods/" + page)
      .then(res => res.json())
      .then(goods => {
        this.setState({
          goods:goods.datas,
          totalPage: Math.ceil(goods.TotalCount / this.state.perPage), //計算出總共幾頁
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

  }
  render() {
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
    return (
      <React.Fragment>
      <ul className="T_products_select_box">
      <li className="T_products_select T_products_select1">價格</li>
      <li className="T_products_select T_products_select2" >最新</li>
      <li className="T_products_select T_products_select3" >熱銷</li>
      <li className="T_products_select T_products_select4" >預設</li>
     </ul> 
      <div className="T_product_all">
           {/* {this.state.Discount_price.map(Discount_price =>  */}
          {this.state.goods.map(goods =>     
         <div className="T_product_body" >    
            {/* 連結到商品內頁*/}
          <Link className="00" to={(`/Product_page/${goods.sid}`)}>
          <div className="T_product_pic" 
          onClick={this.clickHandlerPic} data-name={goods.good_name}
          data-numbering={goods.price}data-pay={goods.price} data-sid={goods.sid}>
          <img src={require(`./images/${goods.mainpic_dir}`)} alt="商品圖" />
          </div></Link>  

          <div className="T_Product_text"> 
               <p className="T_Product_name" data-sid={goods.price}>{goods.good_name}</p>
               <p className="T_Product_price" data-sid={goods.price}>${goods.price}</p>
               <div className="T_Product_sele">NT$
               <p className="T_how_much_pay" id="T_how_much_pay" data-sid={goods.sid}>{goods.discount_price}</p>
               </div>               
          </div>    
     </div> 
      )}  
     <nav className="T_page_main">
     <ul className="T_page">
       {renderPrevBtn}
       {pageDecrementBtn}
       {renderPageNumbers}
       {pageIncrementBtn}
       {renderNextBtn}
       </ul>
       </nav>    
      </div>
      </React.Fragment>
    );
  }
}

export default Pag_items;