var active = document.getElementsByClassName("active");
var sections = {};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

$(document).ready(function(){
    
    drawRain();
    

    
    // Sticky nav

    window.onscroll = function() {myFunction()};

    function myFunction() {
      if (window.pageYOffset - 90 >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    // Top rain effect
    function drawRain(){
      // Copied this from codepen: link - > https://codepen.io/ContemporaryInsanity/pen/RPKVjJ?limit=all&page=2&q=rain
      // Top rain effect
      var cvs = document.getElementById('scroll-letters');

      if(document.getElementById('top').clientHeight < 50){
        cvs.height = document.getElementById('top').clientHeight * 10;
      }
      else{
        cvs.height = document.getElementById('top').clientHeight;
      }
      
      console.log(cvs.height);
      cvs.width = document.getElementById('top').clientWidth;
      console.log(cvs.width);

      var ctx = cvs.getContext('2d');


      var font = 'arial';
      var fontSize = 10;
      ctx.font = fontSize + 'px ' + font;
      var cols = cvs.width / fontSize;

      var charSet;
      charSet = '0123456789ABCDEF';
      charSet = charSet.split(''); 

      var drops = [];
      for (var col = 0; col < cols; col++)
        drops[col] = Math.floor(Math.random() * cvs.height);

      setInterval(rain, 25);

      function rain() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, cvs.width, cvs.height);

        for (var col = 0; col < drops.length; col++) {
        
          var char = charSet[Math.floor(Math.random() * charSet.length)];
          ctx.fillStyle = randColour();
          ctx.fillText(char, col * fontSize, drops[col] * fontSize);
          
          if (Math.random() > 0.99)
            drops[col] = 0;

          drops[col]++;
        }
      }

      function randColour()
      {
        return'rgb(' + 
          Math.floor(Math.random() * 256) + ',' + 
          Math.floor(Math.random() * 256) + ',' + 
          Math.floor(Math.random() * 256) + ')';
      }

      
    };

    // Smooth scroll --> jsfiddle http://jsfiddle.net/cse_tushar/Dxtyu/141/
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+20
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
    });

    // On scroll method
    function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('#menu-center a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('#menu-center ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }
    


  });
