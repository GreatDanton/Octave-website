$(document).ready(function(){

  $('.logo').hide();
  $('.logo').fadeIn(2000);
  $('.printing-text-h').text(' ');
  // string is used for printing text on front page
  var string = "Numerical calculations software"
  var i = 0;

  // prints one character at the time
  function printText() {
    var character = string[i];
    $('.printing-text-h').append(character);
    i++

    // stop interval
    if (i === string.length) {
      window.clearInterval(interval);
    }
  }

  // start interval
  function startTyping() {
  var interval = window.setInterval(printText, 50)
  }
  window.setTimeout(startTyping, 2050);

  // slides down on click
  $('.arrow-box').click(function(){
    $('html, body').animate({
      scrollTop: $('.second-slide').offset().top}, 'slow');
  });

  $('#donatebtn').click(function() {
    $('html, body').animate ({
      scrollTop: $('.donate').offset().top-100
    }, 'slow');
  });

  $(window).scroll(function(){
    var scroll = $(document).scrollTop();
    var height = $('.first-slide').height();
    if (scroll >= height) {
      $('.navigation').addClass('after-100vh');
    //  $('.navigation er').css("border-bottom", "2px solid #000");
    } else {
      $('.navigation').removeClass('after-100vh');
    }
  });

});
