$(document).ready(function() {
  checkRecord();

  $('#submit-rsvp').click(function(){
    writeRecord();
  });

  $('#delete-rsvp').click(function(){
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("coming");
    localStorage.removeItem("numWedding");
    localStorage.removeItem("numReception");
    localStorage.removeItem("otherGuests");
    localStorage.removeItem("notes");
    localStorage.removeItem("date");

    window.location.reload(false);
  });
});

function writeRecord()
{
  var firstName = $("#fname").val();
  var lastName = $("#lname").val();
  var areTheyComing = (($('#rsvp-yes > .glyphicon').hasClass('glyphicon-check')) ? 1 : 0);
  var numWedding = $("#numWed").val();
  var numReception = numWedding; //change this later
  var otherGuests = $("#otherGuests").val();
  var notes = $("#notes").val();

  localStorage.firstName = firstName;
  localStorage.lastName = lastName;
  localStorage.coming = areTheyComing;
  localStorage.numWedding = numWedding;
  localStorage.numReception = numReception;
  localStorage.otherGuests = otherGuests;
  localStorage.notes = notes;
  localStorage.date = new Date();
}

function checkRecord()
{
  if (localStorage.firstName)
  {
    $("#fname").attr("placeholder", localStorage.firstName);
    $("#lname").attr("placeholder", localStorage.lastName);
    if (localStorage.coming==1)
    {
      var yes = $('#rsvp-yes');
      var no = $('#rsvp-no');
      var yesCheckbox = $('#rsvp-yes > .glyphicon');
      var noCheckbox = $('#rsvp-no > .glyphicon');

      yes.addClass('active');
      yes.removeClass('inactive');
      no.removeClass('active');
      no.addClass('inactive');

      yesCheckbox.addClass('glyphicon-check');
      yesCheckbox.removeClass('glyphicon-unchecked');
      noCheckbox.addClass('glyphicon-unchecked');
      noCheckbox.removeClass('glyphicon-check');
    } else
    {
      var yes = $('#rsvp-yes');
      var no = $('#rsvp-no');
      var yesCheckbox = $('#rsvp-yes > .glyphicon');
      var noCheckbox = $('#rsvp-no > .glyphicon');

      no.addClass('active');
      no.removeClass('inactive');
      yes.removeClass('active');
      yes.addClass('inactive');

      noCheckbox.addClass('glyphicon-check');
      noCheckbox.removeClass('glyphicon-unchecked');
      yesCheckbox.addClass('glyphicon-unchecked');
      yesCheckbox.removeClass('glyphicon-check');
    }
    $("#numWed").attr("value", localStorage.numWedding);
    //$("#numRec").attr("value", localStorage.numReception); THIS NEEDS TO BE IMPLEMENTED
    $("#otherGuests").attr("placeholder", localStorage.otherGuests);
    $("#notes").attr("placeholder", localStorage.notes);
    $('.delete-form').css('display','inline');
  } else {
    $('.delete-form').css('display','none');
  }
}
