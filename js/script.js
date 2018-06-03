$(document).ready(function(){
    $('.menu__element').click(function() {
        $(this).children('li').removeClass('active');
        $(this).addClass('active');
    });
});

var test;

$(".menu-button").on('click', function(event) {
	test = $(".menu-opened, .menu").toggleClass("menu-opened menu");
});



$( window ).resize(function() {
	if($( window ).width() > 992){
		test.removeClass("menu-opened");
		test.addClass("menu");
	}


});

$("a").on('click', function(event) {
	console.log(this);
    $('html, body').animate({

        scrollTop: $($.attr(this, 'href')).offset().top - 30
	
    }, 500);

  });

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	
	if(scroll>100){
		$('section').each(function(i){
			
			if($(this).position().top < scroll ){
	
				$('.menu__element a.active').removeClass('active');
				$('.menu__element a').eq(i).addClass('active');
			}
		})
		
		
	}
})


