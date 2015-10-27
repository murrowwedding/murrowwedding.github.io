$(document).ready(function() {
  checkCookie();

  $('#submit-rsvp').click(function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var areTheyComing = (($('#rsvp-yes > .glyphicon').hasClass('glyphicon-check')) ? "I'm coming!" : "I'm not coming");
    var numWedding = $("#numWed").val();
    var numReception = numWedding; //change this later
    var otherGuests = $("#otherGuests").val();
    var notes = $("#notes").val();

    writeCookie(fname, lname, areTheyComing, numWedding, numReception, otherGuests, notes);
  });
});

function writeCookie(firstName, lastName, coming, numWedding, numReception, otherGuests, notes)
{
  var date = new Date(2016,5,1);
  var data = firstName + '|' + lastName + '|' + coming + '|' + numWedding + '|' + numReception + '|' + otherGuests + '|' + notes;

  document.cookie = "rsvpdata=" + data + "; expires=" + date.toUTCString();
  //alert('Cookie written.');
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++)
  {
    var c = ca[i];
    while(c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name)==0) return c.substring(name.length, c.length);
  }

  return "";
}

function checkCookie()
{
  var rsvpdata = getCookie("rsvpdata");
  if (rsvpdata!="")
  {
    alert("You've already rsvped! Here's the data you entered.\n\n"+rsvpdata);
    $('.cookie-jar').css('display','none');
  } else {
    $('.cookie-jar').css('display','inline');
  }

}
