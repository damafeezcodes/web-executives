    var fixOffsetTop;
    var sideBarOffsetTop;
    function affixedNav(){
    if($(window).scrollTop() > fixOffsetTop){
        $('.affixed-nav').removeClass('nav-initial');
        $('.affixed-nav').addClass('nav-fixed');
        $('.nav-logo').addClass('nav-logo-enlarge');
        $('.side-menu').addClass('fixed');
    }else{
        $('.affixed-nav').removeClass('nav-fixed');
        $('.affixed-nav').addClass('nav-initial');
        $('.nav-logo').removeClass('nav-logo-enlarge');
        $('.side-menu').removeClass('fixed');
        
    }
}
	// $(window).resize(function(){
	// 	clearTimeout(window.resizedFinished);
	// 	window.resizedFinished = setTimeout(function(){fixOffsetTop = $('.affixed-nav').offset().top},250);
	// });
// $(window).resize(function(){
//     setTimeout(function(){fixOffsetTop = $('.affixed-nav').offset().top},250);
// })
$(document).ready(function(){
        fixOffsetTop = $('.affixed-nav').offset().top;
    $(window).scroll(function(){
        affixedNav();
    });


});