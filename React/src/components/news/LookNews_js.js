import $ from 'jquery';

$(document).ready(function($, window, document, undefined){
  
    'use strict';
    
    //   var $html = $('html');
    
      $('html').on('click.ui.dropdown', '.js-dropdown', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-open');
    });
    
    $('html').on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
      e.preventDefault();
      var $dropdown = $(this).parents('.js-dropdown');
      $dropdown.find('.js-dropdown__input').val($(this).data('dropdown-value'));
      $dropdown.find('.js-dropdown__current').text($(this).text());


    });
    
    $('html').on('click.ui.dropdown', function(e) {
        if (!$(e.target).parents().hasClass('js-dropdown')) {
        $('.js-dropdown').removeClass('is-open');
      }
    });
    
  });