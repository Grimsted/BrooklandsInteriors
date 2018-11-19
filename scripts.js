// Change Color on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".bottom-left-fixed").css("color", "black");
    } 
  
    else {
       $(".bottom-left-fixed").css("color", "white");
    }
});

//Remove Opacity 
//var str = "bar";
//$('<style>div.carousel-item::after{opacity:0}</style>').delay(3000).appendTo('head');

setTimeout(
  function() 
  {
    $('<style>div.carousel-item::after{opacity:0}</style>').appendTo('head');
  }, 8800);

// $(".carousel-item::after").animate({opacity: '0'}, 3000);

//Makes Carousel Images backgrounds (makes it full screen)

var $item = $('.carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

//Adds adctive to the first slide

$item.eq(0).addClass('active');

//Controls slide speed

//$(document).ready(function() {
 // jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 4000  // 2 seconds
//});

//Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});