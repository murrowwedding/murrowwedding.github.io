$(document).ready(function() {
  var map;
  initMap();

  var a = $(".navbar").offset().top;

  $(document).scroll(function(){

      if($(this).scrollTop() > a)
      {
         $('.navbar').css('background-color', 'rgba(51,51,51,1.0)');
      } else {
         $('.navbar').css({"background":"transparent"});
      }
  });

});
