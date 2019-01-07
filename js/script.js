// Fade in new page
$(document).ready(function() {

  $('body').fadeIn(1000);

  $('.link').click(function() {

  event.preventDefault();

  newLocation = this.href;

  $('body').fadeOut(1000, newpage);

  });

  function newpage() {

  window.location = newLocation;
  }

});



// Add Header, Footer & Extra Tags
$(document).ready(function(){
  var header = '<header><a href="index.html" class="logo"><span>E</span></a><nav><a href="#" class="menu-link">menu</a><div class="underline"></div></nav></header>';
  var navigation = '<div class="nav-background"><ul><div class="spacer"></div><li><a href="index.html">Design</a></li><div class="spacer"></div></ul><div class="close">Close</div></div>';
  var sidename = '<div class="side-name">Ellis Henry Anderson</div>';
  var sidetitle = '<div class="side-title">Designer / Maker</div>';
  var footer = '<footer><div class="spacer"></div><div class="footer-text"><span><a href="mailto:ellishenryanderson@gmail.com">ellishenryanderson@gmail.com</a></span><span>/</span><span>© 2019</span></div></footer>';
  var fancyCSS = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css" />';
  var fancyJS = '<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js"></script>';
  var fontawesome = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">';

  $('head').append(fancyCSS, fontawesome);
  $('body script:first-of-type').before(footer);
  $('body').prepend(header, sidename, sidetitle, navigation);
  $('body').append(fancyJS);

  $('nav a').click(function(e){
    e.preventDefault();
    $('.nav-background').animate({'top': 0 + '%', 'opacity': '1'}, 500);
  });

  $('.nav-background .close').click(function(){
    $('.nav-background').animate({'top': -100 + '%', 'opacity': '0'}, 500);
  })



});



// Random Canvas Animation
$(document).ready(function(){

  var string = '0?&++~~~~]!:••a0?&++~~~~]!:••a';
  string.split('');
  for (var i = 0; i < string.length; i++) {
    $('.landing-header').append('<div class="letter-wrap">' + string[i] + '</div>');
  };

  var line = '<div class="line"></div>';
  for(i = 0; i < 10; i++){
    $('.landing-header').append(line);
  };

  function randomLetters(){
    $('.letter-wrap').each(function(){
      var xposArray = [20,40,60,80];
      var yposArray = [20,40,60,80];
      var width = $('.landing-header').width();
      var height = $('.landing-header').height();
      var xpos = (Math.random() * $('.landing-header').width()).toFixed() + 'px';
      var ypos = (Math.random() * $('.landing-header').height()).toFixed() + 'px';
      var xpos2 = xposArray[Math.floor(Math.random() * xposArray.length)] + '%';
      var ypos2 = yposArray[Math.floor(Math.random() * yposArray.length)] + '%';
      var rotArray = [0,45,90,135,180,225,270,315];
      var randomRot = 'rotate(' + rotArray[Math.floor(Math.random()*rotArray.length)] + 'deg)';
      var backgroundColorArray = ['black','white','coral','teal'];
      var randomBackgroundColor = backgroundColorArray[Math.floor(Math.random()*backgroundColorArray.length)];
      var colorArray = ['pink','lightblue'];
      var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
      var weightArray = [100,900];
      var randomFontWeight = weightArray[Math.floor(Math.random()*weightArray.length)];
      var randomFontSize = (Math.random() * 5 + 2).toFixed() + 'vw';
      var randomBlur = 'blur(' + ((Math.random() * 4)  + 1) + "px)";
      var randomTime = ((Math.random() * 7)  + 3) + 's';
      var fontFamilyArray = ['IBM Plex Sans','IBM Plex Mono','IBM Plex Serif'];
      var randomFamily = fontFamilyArray[Math.floor(Math.random()*colorArray.length)];

      $(this).css({
        'top' : ypos,
        'left' : xpos,
        'color': randomColor,
        'transform': randomRot,
        'animation-duration': randomTime,
        'font-size': randomFontSize,
        'font-weight': randomFontWeight,
        'font-family': randomFamily,
        // 'background-color': randomBackgroundColor,
      });
    });
  };

  function randomLines(){
    $('.line').each(function(){
      var width = $('.landing-header').width();
      var height = $('.landing-header').height();
      var xpos = (Math.random() * $('.landing-header').width()).toFixed() + 'px';
      var ypos = (Math.random() * $('.landing-header').height()).toFixed() + 'px';
      var rotArray = [0,45,90,135,180,225,270,315];
      var randomRot = 'rotate(' + rotArray[Math.floor(Math.random()*rotArray.length)] + 'deg)';
      var widthArray = ['25px','50px','100px'];
      var randomWidth = widthArray[Math.floor(Math.random()*widthArray.length)];
      var randomBorderSize = (Math.random() * 10).toFixed() + 'vw';
      var colorArray = ['pink','lightblue'];
      var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
      var borderStyleArray = ['dotted','dashed'];
      var randomStyle = borderStyleArray[Math.floor(Math.random()*borderStyleArray.length)];

      $(this).css({
        'top': ypos,
        'left': xpos,
        'transform': randomRot,
        'width': randomWidth,
        'border-bottom-width': randomBorderSize,
        'border-bottom-color': randomColor,
        'border-bottom-style': randomStyle,
      });
    });
  };

  // window.onload = randomLetters() & randomLines();

  $(window).resize(function(){
    return randomLetters() & randomLines();
  });

  $('.logo-link').click(function(){
    return randomLetters() & randomLines();
  });



  $('.letter-wrap, .line').click(function(){
    var xposArray = [0,20,40,60,80];
    var yposArray = [0,20,40,60,80];
    var xpos2 = xposArray[Math.floor(Math.random() * xposArray.length)] + '%';
    var ypos2 = yposArray[Math.floor(Math.random() * yposArray.length)] + '%';
    var rotArray = [0,45,90,135,180,225,270,315];
    var randomRot = 'rotate(' + rotArray[Math.floor(Math.random() * rotArray.length)] + 'deg)';
    var colorArray = ['white','coral','blue'];
    var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    $(this).css({
      'left': xpos2,
      'top': ypos2,
      'transform': randomRot,
      // 'color': randomColor
    });
  });

});



// Back to Top Button
$(document).ready(function(){
  var toTopButton = '<button type="button" id="myBtn"><i class="fas fa-arrow-up"></i></button>';
  // &#10514;

  $('.content').append(toTopButton);

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      $('#myBtn').css({'transform':'scale(1)'});
      // $('.side-name, .side-title').fadeOut(500);
    } else {
      $('#myBtn').css({'transform':'scale(0)'});
      // $('.side-name, .side-title').fadeIn();
    }
  }
  //Smooth scroll to top
  $("#myBtn").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });
})


//Wrapping images with 'a' tag
$(document).ready(function(){
  $('.image-section .image img').each(function(){
    var src = $(this).attr('src');
    var fancyWrap = '<a href="' + src + '" data-fancybox></a>'
    $(this).wrap(fancyWrap);
  });
});


// //Carousel
// $(document).ready(function(){
//   $.fn.isOnScreen = function(){
//     var win = $(window);
//
//     var viewport = {
//         top : win.scrollTop(),
//         left : win.scrollLeft()
//     };
//     viewport.right = viewport.left + win.width();
//     viewport.bottom = viewport.top + win.height();
//
//     var bounds = this.offset();
//     bounds.right = bounds.left + this.outerWidth();
//     bounds.bottom = bounds.top + this.outerHeight();
//
//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
//   };
//
//   //
//
//
//   $('.card-wrap:last-of-type, .dot:last-of-type').addClass('last');
//   $('.card-wrap:first-of-type, .dot:first-of-type').addClass('first');
//   $('.card-wrap:nth-of-type(2), .dot:nth-of-type(2)').addClass('second');
//   $('.card-wrap:nth-last-of-type(2), .dot:nth-last-of-type(2)').addClass('secondlast');
//
//   // var projectNumber = document.getElementById("card-container").childElementCount;
//
//   $('.next').click(function(){
//     $('.card-wrap').animate({'right':'+=100%'}, 500);
//     if($('.second').isOnScreen()){
//       $('.prev').show();
//     }
//     if($('.last').isOnScreen()){
//       $('.next').hide();
//     }
//   });
//
//   $('.prev').click(function(){
//     $('.card-wrap').animate({'right':'-=100%'}, 500);
//     if($('.secondlast').isOnScreen()){
//       $('.next').show();
//     }
//     if($('.first').isOnScreen()){
//       $('.prev').hide();
//     }
//   });
//
//   $('.next, .prev').click(function(){
//     $(this).addClass("noclick").delay(500).queue(function(){
//        $(this).removeClass("noclick").dequeue();
//     });
//   });
//
//
// });
//
//
// //Carousel Dots
// $(document).ready(function(){
//   var dot = '<div class="dot"></div>';
//   var dotcontainer = '<div class="dot-container"></div>';
//
//   $('.carousel').append(dotcontainer);
//
//   $('.card-wrap').each(function(n){
//     $('.dot-container').append(dot);
//     $(this).attr('id', 'card-wrap' + (n + 1))
//   });
//
//   $('.dot').each(function(n) {
//     $(this).attr('id', n);
//   });
//
//   $('.dot:last-of-type').addClass('last');
//   $('.dot:first-of-type').addClass('first');
//
//   $('.dot').click(function(){
//     var dotnumber = $(this).attr('id');
//     var dotnumberhundred = dotnumber * 100;
//     var dotrightpercentage = (dotnumber * 100) + '%';
//
//     $('.card-wrap').animate({'right': dotrightpercentage}, 500);
//
//     $('.next, .prev').show();
//
//   });
//
//   $('.dot:last-of-type').click(function(){
//     $('.next').hide();
//   });
//
//   $('.dot:first-of-type').click(function(){
//     $('.prev').hide();
//   });
// });

$(document).ready(function(){

  $('.container button').wrap('<div class="arrow-wrap"></div>');
  $('.container').slick({
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
  });
});
