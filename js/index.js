


// Copied this from codepen: link - > https://codepen.io/ContemporaryInsanity/pen/RPKVjJ?limit=all&page=2&q=rain
// Top rain effect
  var cvs = document.getElementById('scroll-letters');

  cvs.height = document.getElementById('top-logo').clientHeight;
  cvs.width = document.getElementById('top-logo').clientWidth;
  
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

  $(window).resize(resetCVS);
  
  function resetCVS(){
    $(window).on('load resize', function() {
      cvs.height = document.getElementById('top-logo').clientHeight;
      cvs.width = document.getElementById('top-logo').clientWidth; 
    });
  };


$(document).ready(function(){
  
  var scrollLink = $(".scroll");
  // smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top - 140
    }, 500);
  });
  
  $('#1').waypoint(function() {

    $(".nav-container ul li").children().removeClass("active");
    $("#s1").addClass("active");
  
  }, { offset: 101 });
  
  $('#2').waypoint(function() {

    $(".nav-container ul li").children().removeClass("active");
    $("#s2").addClass("active");
  
  }, { offset: 101 });
  
  
});

// Sticky nav

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}