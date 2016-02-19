// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('fYrgakFydCdozk0cVAdq8g');

function sendTheMail() {
// Send the email!

  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var areTheyComing = $('#rsvp-yes > .glyphicon').hasClass('glyphicon-check');
  var numWed = $("#numWed").val();
  var numRec = $("#numRec").val();
  var notes = $("#notes").val();
  var name = fname + ' ' + lname;

  var msg = 'Name: ' + name + '\nComing: ' + (areTheyComing ? 'Yes' : 'No') + '\nWedding: ' + numWed + '\nReception: ' + numRec + '\nNotes: ' + notes;
  //var msg = lname + ', ' + fname + (areTheyComing ? ', coming' : ', not coming') + ', wedding: ' + numWed + ', reception: ' + numRec + ', ' + notes;

  // create a variable for the API call parameters
  var params = {
      "message": {
          "from_email":"murrowwedding@gmail.com",
          "to":[{"email":"murrowwedding@gmail.com"}],
          "subject": "RSVP from " + name,
          "text": msg
      }
  };

  m.messages.send(params, rsvpSuccess(), rsvpFail());
}

function updateTheMail() {
// Update the email!

  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var areTheyComing = $('#rsvp-yes > .glyphicon').hasClass('glyphicon-check');
  var numWed = $("#numWed").val();
  var numRec = $("#numRec").val();
  var notes = $("#notes").val();
  var name = fname + ' ' + lname;

  var premsg = 'Updated RSVP\n-----------------\n';
  var msg = 'Name: ' + name + '\nComing: ' + (areTheyComing ? 'Yes' : 'No') + '\nWedding: ' + numWed + '\nReception: ' + numRec + '\nNotes: ' + notes;
  var msg2 = premsg + '' + msg;

  // create a variable for the API call parameters
  var params = {
      "message": {
          "from_email":"murrowwedding@gmail.com",
          "to":[{"email":"murrowwedding@gmail.com"}],
          "subject": "Updated RSVP from " + name,
          "text": msg2
      }
  };

  m.messages.send(params, rsvpSuccess(), rsvpFail());
}

function deleteTheMail() {
// Delete the email!

  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var areTheyComing = $('#rsvp-yes > .glyphicon').hasClass('glyphicon-check');
  var numWed = $("#numWed").val();
  var numRec = $("#numRec").val();
  var notes = $("#notes").val();
  var name = fname + ' ' + lname;

  var premsg = 'Deleted RSVP\n-----------------\n';
  var msg = 'Name: ' + name + '\nComing: ' + (areTheyComing ? 'Yes' : 'No') + '\nWedding: ' + numWed + '\nReception: ' + numRec + '\nNotes: ' + notes;
  var msg2 = premsg + '' + msg;

  // create a variable for the API call parameters
  var params = {
      "message": {
          "from_email":"murrowwedding@gmail.com",
          "to":[{"email":"murrowwedding@gmail.com"}],
          "subject": "Deleted RSVP from " + name,
          "text": msg2
      }
  };

  m.messages.send(params, rsvpSuccess(), rsvpFail());
}

function rsvpSuccess() {
  alert("success");
}

function rsvpFail() {
  alert("fail");
}
