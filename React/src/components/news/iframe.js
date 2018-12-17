import $ from 'jquery';

$(document).ready(function(){
    $(".Y_know_more").click(function(){
        var sid = $(this).data('sid');
        //ajax
        $.getJSON('/api/news/' + sid,function(data){
           $('#div1>h5').text(data[0].title)
           $('#div2>h5').text(data[0].detailed_description)
           $('#title1').text(data[0].title1)
           $('#title2').text(data[0].title2)
           $('#title3').text(data[0].title3)
           $('#title4').text(data[0].title4)
           $('#title5').text(data[0].title5)
           $('#title6').text(data[0].title6)
           $('#title7').text(data[0].title7)
           $('#title8').text(data[0].title8)
           $('#title9').text(data[0].title9)
           $('#title10').text(data[0].title10)
           
        })
        // fetch("http://localhost:3000/api/news/"+ sid, {
        //                     method: 'GET'
        //                 }).then(res => res.json())
        //                     .then(data => {
        //                         this.setState({
                
        //                             member: data[0],
        //                             type: "add"
        //                         })
        //                     });
        // alert("The paragraph was clicked.");
        $(".Y_newsIframe_display").css("display","block");
        // $('.Y_NewsCard_title1').text($(this).data('sid') + "hellohello")
       // alert($('.Y_NewsCard_title1').text())
    });
});