var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var church = new google.maps.LatLng(35.513238, -97.631599);
var initialZoom = 16;
var map;

var googleMapsBtn;
var fromAllen = 'https://www.google.com/maps/dir/Allen,+TX/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@34.2448149,-98.2876665,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x864c172e4d9479bd:0xcae82aa992de2cd5!2m2!1d-96.6705503!2d33.1031744!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.631599!2d35.513207';
var fromCorpus;
var fromGreenville;
var fromNashville;
var fromRockdale;
var fromVanAlstyne;

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

// initialize map
function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();

  var mapOptions = {
    zoom: initialZoom,
    center: church,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: church,
      map: map,
      title: 'Bethany First Church of the Nazarene'
  });

  google.maps.event.addListener(map, 'center_changed', function() {
    if(map.getCenter() == church)
    {
      $('#reset-map').addClass('disabled');
    }
    else {
      $('#reset-map').removeClass('disabled');
    }
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
}

// calculate directions
function calcRoute() {
  var start = document.getElementById("start").value;
  var end = church;

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
      $('#distance').text(result.routes[0].legs[0].distance.text);
      $('#duration').text(result.routes[0].legs[0].duration.text);
    }
  });

  directionsDisplay.setMap(map);
  $('.directions-details').removeClass('hidden');

  if(start.includes("allen"))
  {
    googleMapsBtn.attr('href', fromAllen);
  }

}

// $(document).ready(function() {
//   // map initialization
//   googleMapsBtn = $('.directions-google-maps');
//
//   $('#reset-map').click(function() {
//     map.setCenter(church);
//     map.setZoom(initialZoom);
//     directionsDisplay.setMap(null);
//     $('.directions-details').addClass('hidden');
//     $('#distance').text('');
//     $('#duration').text('');
//   });
//
//   $('.initialize-map').one( "click", function() {
//     initialize();
//   });
//
//   $('.show-map').click(function() {
//     if($('.collapse').hasClass('in'))
//     {
//       $('.show-map > .panel-title > .panel-title-text').text("Show Map");
//       $('.show-map .left').addClass('glyphicon-triangle-right');
//       $('.show-map .left').removeClass('glyphicon-triangle-bottom');
//       $('.show-map .right').addClass('glyphicon-triangle-left');
//       $('.show-map .right').removeClass('glyphicon-triangle-bottom');
//     }
//     else
//     {
//       $('.show-map > .panel-title > .panel-title-text').text("Hide Map");
//       $('.show-map .left').addClass('glyphicon-triangle-bottom');
//       $('.show-map .left').removeClass('glyphicon-triangle-right');
//       $('.show-map .right').addClass('glyphicon-triangle-bottom');
//       $('.show-map .right').removeClass('glyphicon-triangle-left');
//     }
//   });
// });
