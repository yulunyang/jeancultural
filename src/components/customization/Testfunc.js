// import React, { Component } from 'react';
// import './Customization.scss';
// import $ from 'jquery';


// class TestFunc extends Component {
//     constructor(props) {
//         super(props)
//     }
//     readBox() {
//         $(document).ready(function () {
//             alert("test")
//             var checkText = $(".F_number_box").text().toLowerCase();
//             $('.F_item_text .F_which_box .F_which_box_number').each(function () {
//                 if ($(this).text().toLowerCase() == checkText) {
//                     $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_item_pic").addClass("F_item_box_choice");
//                     //按鈕
//                     $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_buy_button").css("display", "none");
//                 }
//             });
//         });
//     }

//     render() {

//     }

//     componentDidMount = () => {
//         this.readBox();
//     }
// }

// export default TestFunc;
