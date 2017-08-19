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
    
});
AOS.init({
    easing: 'ease-in-sine',
    duration: 300,
});