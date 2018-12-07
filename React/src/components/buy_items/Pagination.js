// import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

// class Pagination extends Component {
//   constructor(props) {
//     super(props);
//   } 

  
//       create(){
//         const {
//             totalPage,
//         } = this.props.config;

//         let pages = [];
//         pages.push(<li key={0}>《</li>)   //上一页
//         for(let i = 1;i <= totalPage; i++){
//             pages.push(<li key={i}>{i}</li>)
//         }
//         pages.push(<li key={totalPage + 1}>》</li>)  //下一页

//         return pages;
//       }
  
//       render(){
//           const Pages = this.create.bind(this)();
//           return(
//               <div className = { style}>
//                   <ul className = { style }>
//                       { Pages }
//                   </ul>
//               </div>
//           );
//       }
//   }

// export default Pagination;
