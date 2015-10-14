var pic1 = '../images/photo1.jpg';
var pic2 = '../images/photo2.jpg';
var pic3 = '../images/photo3.jpg';
var backgrounds = [{image: pic1}, {image: pic2}, {image: pic3}];
var bgNumber = getRandomBg();

$(document).ready(function() {
  
  if($('body').hasClass('index'))
  {
    $('body').css('background-image', 'url('+backgrounds[bgNumber].image+')');
  }
  else
  {
    $('body').css('background-image', 'linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url('+backgrounds[bgNumber].image+')');
  }
});

function getRandomBg() {
  return getRandomInt(0, backgrounds.length-1);
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
