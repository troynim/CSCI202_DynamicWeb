
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
    
    
 if (s < 20) {
  document.getElementById("txt").style.color = "red";
  document.body.style.backgroundImage = "url('https://media.giphy.com/media/3Hrq0z3lc9vKMGcpv3/giphy.gif')";
} else if (s < 40) {
  document.getElementById("txt").style.color = "orange";
  document.body.style.backgroundImage = "url('https://media.giphy.com/media/4qjP6rIloYJEs/giphy.gif')";
} else {
   document.getElementById("txt").style.color = "white";
  document.body.style.backgroundImage = "url('https://media.giphy.com/media/fdXJLBMujaN1VE2U6c/giphy.gif')";
}    
    

}



function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i; 
    
    
}



