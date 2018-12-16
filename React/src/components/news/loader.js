import $ from 'jquery'; 

$(function () {
    $(".Y_news_box").slice(0, 3).show();
    $("#Y_more").on('click', function (e) {
        e.preventDefault();
        $(".Y_news_box:hidden").slice(0, 3).slideDown();
        if ($(".Y_news_box:hidden").length == 0) {
            $("#Y_more").fadeOut('slow');
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 2500);
    });
});


$(document).ready(function(){
    $("#Y_know_more").click(function(){
       
        $(".Y_newsIframe_display").css("display","block");
    });
    $(".Y_newsIframe_fas").click(function(){
       
        $(".Y_newsIframe_display").css("display","none");
    });
});