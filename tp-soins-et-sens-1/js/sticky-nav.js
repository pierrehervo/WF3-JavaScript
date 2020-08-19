$(function() {
   
    var offset = $("header nav").offset();
    

    $(window).scroll(function (event) {
      
        var y = $(this).scrollTop(); 
        
        if (y >= offset.top) {
            $('header nav').addClass('fixed');
            $('.top').fadeIn ("slow");
        } else {
            $('header nav').removeClass('fixed');
            $('.top').fadeOut ("slow");
        }

    });
});
