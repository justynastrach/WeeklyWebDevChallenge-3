




/*
var menu_btn = document.getElementById('menu-button');

menu_btn.addEventListener('click', function (e){
	
	var menu = document.getElementById('menu');
	
	menu.classList.toggle( 'menu-opened' );
	menu_btn.setAttribute( 'aria-expanded', String( menu.classList.contains( 'menu-opened' ) ) );
	
}, false);*/
$(".menu-button").on('click', function(event) {
	$(".menu-opened, .menu").toggleClass("menu-opened menu");
});

$("a").on('click', function(event) {
	event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

  });

/*
var menu_btn = document.getElementById('menu-button');
var nav = document.getElementById('nav');

menu_btn.addEventListener('click', function (e){
	
	$(this).toggleClass('down');
    $(nav).toggleClass('reveal');
	
	
	
}, false);
*/


