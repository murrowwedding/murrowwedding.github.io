$(document).ready(function() {
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

  // fade in back to top button on scroll
  var amountScrolled = 300;

  $(window).scroll(function() {
  	if ( $(window).scrollTop() > amountScrolled ) {
  		$('a.back-to-top').fadeIn('slow');
  	} else {
  		$('a.back-to-top').fadeOut('slow');
  	}
  });

  $('a.back-to-top').click(function() {
  	$('html, body').animate({
  		scrollTop: 0
  	}, 700);
  	return false;
  });
  // -------

  // Give navbar background on scroll
  var amountScrolled = 20;
  $(window).scroll(function() {
  	if ( $(window).scrollTop() > amountScrolled ) {
      $('.navbar').addClass('navbar-opaque');
      $('.navbar').removeClass('navbar-transparent');
  	} else {
      $('.navbar').addClass('navbar-transparent');
      $('.navbar').removeClass('navbar-opaque');
  	}
  });
  // -------

});
