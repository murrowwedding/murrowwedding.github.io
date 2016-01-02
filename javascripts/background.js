var numPicsTotal = 9;
var numPicsIndex = 6;
var pics = [];
for (i = 0; i < numPicsTotal; i++)
{
  pics[i] = '../images/photo' + (i+1) + '.jpg';
}

var bgNumber;

$(document).ready(function() {
  if($('body').hasClass('index'))
  {
    bgNumber = getRandomBg(numPicsIndex);
    $('body').css('background-image', 'url('+pics[bgNumber]+')');
  }
  else
  {
    bgNumber = getRandomBg(numPicsTotal);
    $('body').css('background-image', 'linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('+pics[bgNumber]+')');
  }
});

function getRandomBg(numPics) {
  return getRandomInt(0, numPics-1);
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
