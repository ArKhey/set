var runApp ={
    ajustaVideo: function(){
        if($(window).width<=767) {
            console.log("mobileeeeeeee");
        }
    }
};
$(document).ready(function(){
    /*$(".flechaMen").click(function(){
        $(".container .collapse #navegar").toggle( 'display' );
        var src = $('.flechaMen a img').attr('src');
        var newsrc = (src=='img/flechaMenu.jpg') ? 'img/barMenu.jpg' : 'img/flechaMenu.jpg';
        $('.flechaMen a img').attr('src', newsrc );
    });*//*Jimmy*/

    /*if ($("#player").size() !== 0) {
     runApp.ajustaVideo();
     };*/
});

function checkOffset() {
    if($('#social-float').offset().top + $('#social-float').height()
        >= $('footer').offset().top - 10)
        $('#social-float').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
        $('#social-float').css('position', 'fixed'); // restore when you scroll     up
    // $('#social-float').text($(document).scrollTop() + window.innerHeight);
}
$(document).scroll(function() {
    checkOffset();
});

$( ".footer-sub-div1" ).click(function() {
    $( ".footer-sub-div2" ).toggle( "fold" );
    $( ".footer-sub-toogled" ).toggle( "fold" );
    $( ".footer-sub-arrow" ).toggleClass( "footer-sub-arrow-toggled" );
    $( "#social-float" ).toggleClass( "h165", 1000 )
});


$(document).ready(function() {
    $(window).resize();
});
$(window).resize(function() {
    if ($(this).width() < 1030) {

        $( "#social-float" ).removeClass( "h165" )
        $( ".footer-sub-div1").unbind( "click" );
    }else{
       $(".flechaMenu").click();
    }
});



