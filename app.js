$(document).ready(function(){
    
    drawRain();
    var sections = {};
    
    $(".section").each(function(){
        var hash = $(this).data("hash"),
              topOffset = $(this).offset().top;
          sections[topOffset] = hash;
    });
    
    $(window).scroll(function(e){
        var scrollTop = $(window).scrollTop();
          setHash(scrollTop);
    });
    
    function setHash(st){
        var hash = "";
        for(section in sections){
          if (section < st + ($(window).height())) hash = sections[section];
      }
      console.log(`SETTING HASH: ${hash}`);
    }

    
    // Sticky nav

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset - 90 >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    function drawRain(){
      // Copied this from codepen: link - > https://codepen.io/ContemporaryInsanity/pen/RPKVjJ?limit=all&page=2&q=rain
      // Top rain effect
      var cvs = document.getElementById('scroll-letters');

      cvs.height = document.getElementById('top').clientHeight * 10;
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

  });
