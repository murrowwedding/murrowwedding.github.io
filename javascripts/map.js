var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var church = new google.maps.LatLng(35.513238, -97.631599);
var initialZoom = 16;
var map;

var googleMapsBtn;
var fromAllen = 'https://www.google.com/maps/dir/Allen,+TX/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@34.2448149,-98.2876665,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x864c172e4d9479bd:0xcae82aa992de2cd5!2m2!1d-96.6705503!2d33.1031744!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.631599!2d35.513207';
var fromCorpus = 'https://www.google.com/maps/dir/Corpus+Christi,+TX/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@31.5858443,-102.1461967,6z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x86685f806192d2b3:0xaed15093890e908f!2m2!1d-97.396381!2d27.8005828!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.6315989!2d35.5132067';
var fromGreenville = 'https://www.google.com/maps/dir/Greenville,+TX/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@34.3229535,-97.9925756,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x864be2da94992cc9:0xb00562f5bc7677aa!2m2!1d-96.1108066!2d33.1384488!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.6315989!2d35.5132067';
var fromNashville = 'https://www.google.com/maps/dir/Nashville,+TN/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@35.9129743,-96.694724,6z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8864ec3213eb903d:0x7d3fb9d0a1e9daa0!2m2!1d-86.7816016!2d36.1626638!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.6315989!2d35.5132067';
var fromRockdale = 'https://www.google.com/maps/dir/Rockdale,+TX/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@33.0688541,-99.5320726,7z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x86445436ac1460b5:0x1e203ea2797526b7!2m2!1d-97.0013744!2d30.6554759!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.6315989!2d35.5132067';
var fromVanAlstyne = 'https://www.google.com/maps/dir/Van+Alstyne,+TX/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@34.4644753,-98.1193467,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x864c6f6070904a37:0xa41b060b79cad3c8!2m2!1d-96.5772109!2d33.4214995!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.6315989!2d35.5132067';
var fromOKC = 'https://www.google.com/maps/dir/Oklahoma+City,+OK/Bethany+First+Church+of+the+Nazarene,+6789+NW+39th+Expy,+Bethany,+OK+73008,+United+States/@35.4937581,-97.6036504,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x87ad8a547ef8d281:0x33a21274d14f3a9d!2m2!1d-97.5164276!2d35.4675602!1m5!1m1!1s0x87b20542ed73546b:0xd7a98e204472632!2m2!1d-97.6315989!2d35.5132067';

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

  else if(start.includes("alstyne"))
  {
    googleMapsBtn.attr('href', fromVanAlstyne);
  }

  else if(start.includes("corpus"))
  {
    googleMapsBtn.attr('href', fromCorpus);
  }

  else if(start.includes("greenville"))
  {
    googleMapsBtn.attr('href', fromGreenville);
  }

  else if(start.includes("rockdale"))
  {
    googleMapsBtn.attr('href', fromRockdale);
  }

  else if(start.includes("oklahoma"))
  {
    googleMapsBtn.attr('href', fromOKC);
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
