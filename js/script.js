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
  var header = '<header><a href="index.html" class="logo"><span>E</span></a><div class="spacer"></div><nav><ul><li><a href="design.html">Design</a></li><li><a href="cv.html">CV / Resume</a></li></ul></nav></header>';
  var footer = '<footer><div class="spacer"></div><div class="footer-text"><span>Ellis Henry Anderson</span><span>•</span><span><a href="mailto:ellishenryanderson@gmail.com">ellishenryanderson@gmail.com</a></span><span>•</span><span>© 2019</span></div></footer>';
  var fancyCSS = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css" />';
  var fancyJS = '<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js"></script>';

  $('head').append(fancyCSS);
  $('body script:first-of-type').before(footer);
  $('body').prepend(header);
  $('body').append(fancyJS);
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

  window.onload = randomLetters() & randomLines();

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
  var toTopButton = '<button type="button" id="myBtn">top</button>';
  // &#10514;

  $('.content').append(toTopButton);

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('#myBtn').fadeIn();
    } else {
      $('#myBtn').fadeOut();
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
