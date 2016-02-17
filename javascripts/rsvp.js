$(document).ready(function() {

  //$('#success-modal').modal('show');
  $('#delete-modal').modal('show');

  var confirmForm = $('#confirm-form');
  var yes = $('#rsvp-yes');
  var no = $('#rsvp-no');
  var yesCheckbox = $('#rsvp-yes > .glyphicon');
  var noCheckbox = $('#rsvp-no > .glyphicon');

  $('#rsvp-yes').click(function() {
    confirmForm.collapse('show');
    rsvpToggle(yes, no, yesCheckbox, noCheckbox);
  });

  $('#rsvp-no').click(function() {
    if(confirmForm.hasClass('in'))
    {
      confirmForm.collapse('hide');
    }
    rsvpToggle(no, yes, noCheckbox, yesCheckbox);
  });

  $('#submit-rsvp').click(function(){
    rsvpValidate();
    //alert("RSVPed! Thanks.");
  });

  var receptionSome = $('#reception-some');

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
      if(valueCurrent > 1) {
        receptionSome.collapse('show');
      }
      else {
        receptionSome.collapse('hide');
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
  if($('#fname').val() === '' || $('#fname').val() === null)
  {
    $('#fname-group').addClass('has-error');
  }
  else
  {
    $('#fname-group').removeClass('has-error');
  }
}
