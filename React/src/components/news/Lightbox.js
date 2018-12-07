
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Import javascript */
import 'jquery';
import $ from 'jquery';




$(function(){
  $(document).ready(function(){
    $("#myImg").click(function(){
      $(".iframe").css('display','block');
    });
  });
});


