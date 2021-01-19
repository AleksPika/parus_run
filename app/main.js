(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else{
            header.classList.remove('header__active');
        }
    }
}());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            });
        }
    }
}());

$(document).ready((function() {}
)),
$("#burger").click((function(e) {
        e.preventDefault(),
        $(this).toggleClass("burger--active"),
        $("body").toggleClass("no-scroll"),
        $(".nav").toggleClass("nav--show"),
        $("#header").toggleClass("header--paint")
    }
));

function checkScroll() {
    introH = $("#intro").innerHeight(),
    scrollPos = $(window).scrollTop()
}
checkScroll(),
$(window).on("scroll resize", (function() {
    checkScroll()
}
)),
$("[data-scroll]").click((function(e) {
        e.preventDefault(),
        $("#burger").removeClass("burger--active"),
        $("body").removeClass("no-scroll"),
        $(".nav").removeClass("nav--show");
        let s = $(this).data("scroll")
        , i = $(s).offset().top;
        $("html, body").animate({
            scrollTop: i
        }, 500)
    }
))

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
});