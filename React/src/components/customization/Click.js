import $ from 'jquery';

//綠盒子和上下步的判斷式
function location() {
    if (window.location.pathname == "/customization/box_thing") {
        $(".F_step_green_box3").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
        $(".F_to_up").css("display", "block")
        $(".F_to_down").css("display", "none")
        $(".F_to_up").click(function () {
            window.location.href = "/customization/muise"
        })

    }
    if (window.location.pathname == "/customization/muise") {
        $(".F_step_green_box2").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
        $(".F_to_down").css("display", "block")
        $(".F_to_up").css("display", "block")
        $(".F_to_up").click(function () {
            window.location.href = "/customization/"
        })
        $(".F_to_down").click(function () {
            window.location.href = "/customization/box_thing"
        })
    }
    if (window.location.pathname == "/customization/") {
        $(".F_step_green_box1").siblings(".F_step_green_box").css("backgroundColor", "transparent").end().css("backgroundColor", "#879d4d");
        $(".F_for_margin").addClass("F_for_margin_end")
        $(".F_to_down").css("display", "block")
        $(".F_to_up").css("display", "none")
        $(".F_to_down").click(function () {
            window.location.href = "/customization/muise"
        })
    } else {
        $(".F_for_margin").removeClass("F_for_margin_end")
    }
}
location();

//如果有符合的資料樣式保留
$(function () {
    var checkText = $(".F_number_box").text().toLowerCase();
    $('.F_item_text .F_which_box .F_which_box_number').each(function () {
        if ($(this).text().toLowerCase() == checkText) {
            $(this).parentsUntil( $(".F_center_big_box"), ".F_item_box" ).children(".F_item_pic").addClass("F_item_box_choice");
             //按鈕
            $(this).parentsUntil( $(".F_center_big_box"), ".F_item_box" ).children(".F_buy_button").addClass("F_buy_button_check");
        }
    });
});
//如果有符合的資料樣式保留
$(function () {
    var checkText = $(".F_number_muise").text().toLowerCase();
    $('.F_item_text .F_which_muise .F_which_muise_number').each(function () {
        if ($(this).text().toLowerCase() == checkText) {
            $(this).parentsUntil( $(".F_center_big_box"), ".F_item_box" ).children(".F_item_pic").addClass("F_item_box_choice");
            $(this).parentsUntil( $(".F_center_big_box"), ".F_item_box" ).children(".F_item_pic").children(".F_play_muise").addClass("F_play_muise_click");
            $(this).parentsUntil( $(".F_center_big_box"), ".F_item_box" ).children(".F_item_pic").children(".F_item_pic_filter_img").addClass("F_item_pic_filter_img_click");
            //按鈕
            $(this).parentsUntil( $(".F_center_big_box"), ".F_item_box" ).children(".F_buy_button").addClass("F_buy_button_check");
        }
        // console.log($(this).text().toLowerCase() == checkText)
    });
});
//如果有符合的資料樣式保留
$(function () {
    var checkText1 = $(".F_number_item_1").text().toLowerCase();
    var checkText2 = $(".F_number_item_2").text().toLowerCase();
    var checkText3 = $(".F_number_item_3").text().toLowerCase();
    $('.F_item_text .F_which_item .F_which_item_number').each(function () {
        if ($(this).text().toLowerCase() == checkText1) {
            $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_item_pic").addClass("F_item_box_choice");
        } if ($(this).text().toLowerCase() == checkText2) {
            $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_item_pic").addClass("F_item_box_choice");
        } if ($(this).text().toLowerCase() == checkText3) {
            $(this).parentsUntil($(".F_center_big_box"), ".F_item_box").children(".F_item_pic").addClass("F_item_box_choice");
        }
    });
});
