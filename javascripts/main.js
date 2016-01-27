$(document).ready(function() {
  // var map;
  // initMap();

  // give navbar opaque background on scroll
  var a = $(".navbar").offset().top;
  $(document).scroll(function(){
      if($(this).scrollTop() > a)
      {
         $('.navbar').css('background-color', 'rgba(51,51,51,1.0)');
      } else {
         $('.navbar').css({"background":"transparent"});
      }
  });
  // -------

  // map initialization
  googleMapsBtn = $('.directions-google-maps');

  $('#reset-map').click(function() {
    map.setCenter(church);
    map.setZoom(initialZoom);
    directionsDisplay.setMap(null);
    $('.directions-details').addClass('hidden');
    $('#distance').text('');
    $('#duration').text('');
  });

  $('.initialize-map').one( "click", function() {
    initialize();
  });

  $('.show-map').click(function() {
    if($('.collapse').hasClass('in'))
    {
      $('.show-map > .panel-title > .panel-title-text').text("Show Map");
      $('.show-map .left').addClass('glyphicon-triangle-right');
      $('.show-map .left').removeClass('glyphicon-triangle-bottom');
      $('.show-map .right').addClass('glyphicon-triangle-left');
      $('.show-map .right').removeClass('glyphicon-triangle-bottom');
    }
    else
    {
      $('.show-map > .panel-title > .panel-title-text').text("Hide Map");
      $('.show-map .left').addClass('glyphicon-triangle-bottom');
      $('.show-map .left').removeClass('glyphicon-triangle-right');
      $('.show-map .right').addClass('glyphicon-triangle-bottom');
      $('.show-map .right').removeClass('glyphicon-triangle-left');
    }
  });

  // initialize tooltips and popovers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  // -------

});
