$(document).ready(function() {

  var confirmForm = $('#confirm-form');
  var yes = $('#rsvp-yes');
  var no = $('#rsvp-no');
  var yesCheckbox = $('#rsvp-yes > .glyphicon');
  var noCheckbox = $('#rsvp-no > .glyphicon');

  // toggle yes checkbox/button
  $('#rsvp-yes').click(function() {
    // // validate yes/no
    // yes.removeClass('rsvp-error');
    // no.removeClass('rsvp-error');
    confirmForm.collapse('show');
    rsvpToggle(yes, no, yesCheckbox, noCheckbox);
    rsvpValidate();
  });

  // toggle no checkbox/button
  $('#rsvp-no').click(function() {
    // // validate yes/no
    // yes.removeClass('rsvp-error');
    // no.removeClass('rsvp-error');
    if(confirmForm.hasClass('in'))
    {
      confirmForm.collapse('hide');
    }
    rsvpToggle(no, yes, noCheckbox, yesCheckbox);
    rsvpValidate();
  });

  $('#fname').keypress(function() {
    rsvpValidate();
  });

  $('#lname').keypress(function() {
    rsvpValidate();
  });

  $('#fname').blur(function() {
    rsvpValidate();
  });

  $('#lname').blur(function() {
    rsvpValidate();
  });

  // // validate on submit click
  // $('#submit-rsvp').click(function(){
  //   rsvpValidate();
  // });

  // // validate first name on blur
  // $('#fname').blur(function () {
  //   if($('#fname').val() !== '' || $('#fname').val() !== null)
  //   {
  //     $('#fname-group').removeClass('has-error');
  //   }
  // });
  //
  // // validate last name on blur
  // $('#lname').blur(function () {
  //   if($('#lname').val() !== '' || $('#lname').val() !== null)
  //   {
  //     $('#lname-group').removeClass('has-error');
  //   }
  // });

  // Number input code
  $('.btn-number').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {

            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
  });

  $('.input-number').focusin(function(){
     $(this).data('oldValue', $(this).val());
  });

  $('.input-number').change(function() {

      minValue =  parseInt($(this).attr('min'));
      maxValue =  parseInt($(this).attr('max'));
      valueCurrent = parseInt($(this).val());

      name = $(this).attr('name');
      if(valueCurrent >= minValue) {
          $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          $(this).val($(this).data('oldValue'));
      }
      if(valueCurrent <= maxValue) {
          $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          $(this).val($(this).data('oldValue'));
      }
  });

  $(".input-number").keydown(function (e) {
          // Allow: backspace, delete, tab, escape, enter and .
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
               // Allow: Ctrl+A
              (e.keyCode == 65 && e.ctrlKey === true) ||
               // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
                   // let it happen, don't do anything
                   return;
          }
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
      });
  //-----------------

});

function rsvpToggle(activate, deactivate, activateCheckbox, deactivateCheckbox) {
  activate.addClass('active');
  activate.removeClass('inactive');
  deactivate.removeClass('active');
  deactivate.addClass('inactive');

  activateCheckbox.addClass('glyphicon-check');
  activateCheckbox.removeClass('glyphicon-unchecked');
  deactivateCheckbox.addClass('glyphicon-unchecked');
  deactivateCheckbox.removeClass('glyphicon-check');
}

function rsvpValidate()
{
  var isValid = true;
  if($('#fname').val() === '' || $('#fname').val() === null)
  {
    //$('#fname-group').addClass('has-error');
    isValid = false;
    //alert('fname is blank');
  }
  // else
  // {
  //   // $('#fname-group').removeClass('has-error');
  // }

  if($('#lname').val() === '' || $('#lname').val() === null)
  {
    //$('#lname-group').addClass('has-error');
    isValid = false;
    //alert('lname is blank');
  }
  // else
  // {
  //   //$('#lname-group').removeClass('has-error');
  // }

  var yes = $('#rsvp-yes');
  var no = $('#rsvp-no');

  if(yes.hasClass('inactive') && no.hasClass('inactive'))
  {
    //yes.addClass('rsvp-error');
    //no.addClass('rsvp-error');
    isValid = false;
    //alert('not checked');
  }

  if(isValid)
  {
    $('#submit-rsvp').prop('disabled', false);
  }
  else {
    $('#submit-rsvp').prop('disabled', true);
  }
}
