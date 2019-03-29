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

//Remove opacity
setTimeout(
  function() 
  {
    $('<style>div.carousel-item::after{opacity:0}</style>').appendTo('head');
  }, 8800);

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

//Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//Lazy Load
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
