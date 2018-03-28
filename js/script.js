$(document).ready(function(){
    $('.menu__element').click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
});


$(".menu-button").on('click', function(event) {
	$(".menu-opened, .menu").toggleClass("menu-opened menu");
});

$("a").on('click', function(event) {
	event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 30
	
    }, 500);

  });


