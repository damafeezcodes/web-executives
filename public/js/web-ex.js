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
    var showcaseText = $('.showcase-text');
    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        showcaseText.each(function(){
            var thisPosition = $(this).offset().top;
            var angle;
            if(pos < thisPosition - 320){
                // alert();
                angle = 100;
            }else{
                angle = 100 - (pos/(pos+100) * 100);
                // angle = 0;
            }
             $(this).css('transform','translateY(' + angle + 'px)');
            //  $('.test').html(`I am ${thisPosition}, but Window is ${pos} and angle is ${angle}`)
            //  console.log(angle);
        });  
    });
    
    // $(window).scroll(function(){
    //     var pos = $(window).scrollTop();
    //     for(var i = 0; i<showcaseText.length; i++){
    //         if(pos > showcaseText[i].offsetTop){
    //             $('.test').html(`div ${i} position: ${showcaseText[i].offset().top}`);
    //         }

    //     }
    //     console.log(`scrollpos: ${pos}`); 
    // });
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