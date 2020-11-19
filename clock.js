function colorClock(){

var date = new Date();
var hours = date.getHours();
console.log(hours);
var minutes =date.getMinutes();
var seconds = date.getSeconds();


if (seconds < 10 ) {
    seconds = '0' + seconds;
  }
if (minutes < 10 ) {
    minutes = '0' + seconds;
  }
if (hours < 10 ) {
    hours = '0' + seconds;
  }
  
  
  var hexColor = '#' + hours + minutes + seconds;
  document.body.style.background = hexColor;

  setTimeout(function() {
    colorClock();
    
  }, 1000);


  var clockFace = hours + ':' + minutes + ':' + seconds;
document.getElementById('clock').innerHTML = clockFace;
}
colorClock();