$(document).ready(function(){
    $('.parallax').parallax();
    $('header .side-bar .more-icon-border').hover(function(){
        $('header .side-bar').addClass('active');
        $('header .side-bar').addClass('z-depth-2');
    });
    $('header .side-bar').mouseleave(function(){
        $('header .side-bar').removeClass('active');
        $('header .side-bar').removeClass('z-depth-2');
        
    });
    // var showcaseText = $('.showcase-text');  
    // console.log(showcaseText);
    // for(var i = 0; i<showcaseText.length; i++){
    //     console.log(showcaseText.offset().top);
    // }
    // $(window).scroll(function(){
    //     var pos
    // })
    // if(pos < 400){
    //     var bendRotateAngle = (- ((pos/400) * 25) + 25);
    //     $('.bend').css('transform', 'rotate(-' + bendRotateAngle + 'deg)');
    //     $('.bend').show();
    //   }else{
    //     $('.bend').css('transform', 'rotate(-' + 0 + 'deg)');
    //     $('.bend').hide();
    //   }
    //     if(pos > 170){
    //       $('.scroll-down-btn').fadeOut(1000);
    //     }else{
    //       $('.scroll-down-btn').fadeIn(0);
    //     }
      
    });
  
AOS.init({
    easing: 'ease-in-out-sine'
});