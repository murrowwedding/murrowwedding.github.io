$(document).ready(function() {
  checkRecord();

  $('#submit-rsvp').click(function(){
    if($(this).html() == 'Submit RSVP')
    {
      sendTheMail();
    }
    else {
      updateTheMail();
    }
    writeRecord();
    //sendTheMail();
  });

  $('#delete-rsvp').click(function(){
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("coming");
    localStorage.removeItem("numWedding");
    localStorage.removeItem("numReception");
    localStorage.removeItem("notes");
    localStorage.removeItem("date");
    deleteTheMail();
  });
});

function writeRecord()
{
  var firstName = $("#fname").val();
  var lastName = $("#lname").val();
  var areTheyComing = (($('#rsvp-yes > .glyphicon').hasClass('glyphicon-check')) ? 1 : 0);
  var numWedding = $("#numWed").val();
  var numReception = $("#numRec").val();
  var notes = $("#notes").val();

  localStorage.firstName = firstName;
  localStorage.lastName = lastName;
  localStorage.coming = areTheyComing;
  localStorage.numWedding = numWedding;
  localStorage.numReception = numReception;
  localStorage.notes = notes;
  localStorage.date = new Date();
}

function checkRecord()
{
  if (localStorage.firstName)
  {
    $("#fname").attr("value", localStorage.firstName);
    $("#lname").attr("value", localStorage.lastName);
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

      $('#confirm-form').collapse('show');

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
    $("#numWed").attr("value", localStorage.numWedding).change();
    $("#numRec").attr("value", localStorage.numReception).change();
    $("#notes").val(localStorage.notes);
    $('#submit-rsvp').html("Update RSVP");
    $('#submit-rsvp').attr("data-target", "#update-modal");
    $('#delete-btn').removeClass('hidden');
  } else {
    $('#submit-rsvp').html("Submit RSVP");
    $('#submit-rsvp').attr("data-target", "#success-modal");
    $('#delete-btn').addClass('hidden');
  }
}
