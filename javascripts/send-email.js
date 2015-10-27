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
  var msg = lname + ', ' + fname + (areTheyComing ? ', coming' : ', not coming');
  // create a variable for the API call parameters
  var params = {
      "message": {
          "from_email":"murrowwedding@gmail.com",
          "to":[{"email":"murrowwedding@gmail.com"}],
          "subject": "Sending a text email from the Mandrill API",
          "text": msg
      }
  };

  //m.messages.send(params, alert("Message Sent."), alert("Message not sent. Please call <number> to RSVP."));
}
