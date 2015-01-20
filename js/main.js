/* WOO4MEN
 *
 * JS Document - /js/script.js
 *
 * coded by Mars
 * started at 09/12/2014
 */


( function( $ ) {

var timer;
var header = $(".header");
var map = $(".slider__map");
var next = $(".slider__next");
var previous = $(".slider__previous");
var textSlider = $('.slider__text--paragraph');
var text = [
    'Découvrez les chemises WOO4MEN',
    'Découvrez les chemises 4WOOMEN',
    'Découvrez les promos spéciales pour les fêtes de fin d\'années'
    ]
var images = ['slide0.jpg', 'slide1.jpg', 'slide2.jpg'];
var i = 0;
var j = 0;


    function changeBackground() {
        header.css('background-image', function() {
            if (i >= images.length) {
                i=0;
            }
            changeText(i);
            return 'url(./img/' + images[i++] + ')';
        });
    }
    function changeText(i){
      textSlider.fadeOut(function(){
          $(this).text(text[i]).fadeIn();
          });
    }

    next.click(function(){
      if (i >= images.length) {
          i=0;
      }
      changeBackground();
      clearInterval(timer);
      timer = setInterval(changeBackground, 8000);
    });

    previous.click(function(){
      if (i >= images.length) {
          i=0;
      }
      changeBackground();
      clearInterval(timer);
      timer = setInterval(changeBackground, 8000);
    });

    function flyCart() {
      $('.add-to-cart').click( function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parents('.infos').find('img').eq(0);
                if (imgtodrag) {
          var imgclone = imgtodrag.clone()
          .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
          })
          .css({
            'opacity': '0.5',
            'position': 'absolute',
            'height': '50px',
            'width': '50px',
            'z-index': '100'
          })
          .appendTo($('body'))
          .animate({
            'top': cart.offset().top + 10,
            'left': cart.offset().left + 10,
            'width': 75,
            'height': 75
          }, 1000, 'easeInOutExpo');
          setTimeout(function () {
            cart.effect("shake", {
              times: 2
            }, 200);
          }, 1500);

          imgclone.animate({
            'width': 0,
            'height': 0
          }, function () {
            $(this).detach()
          });
        }
      });
    }

    flyCart();
    changeBackground();
    timer = setInterval(changeBackground, 8000);

} )( jQuery );
