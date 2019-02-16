/*
TODO: for some reason the DOMContentLoaded function wont get invoked on the extension
*/
var countDownDate = new Date("Aug 26, 2019").getTime();

var display = document.getElementByID("myParagraph");
display.innerHTML = "celebration time or doomsday";

document.addEventListener('DOMContentLoaded', function() {
  alert("Ready!");
}, false);

// update countdownTo every 1 second
var x = setInterval( function() {
    var now = new Date().getTime();
    var diff = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  );

  // display result in the element with id = "display"
  document.getElementById("display").innerHTML = days + "days " + hours + "hours " + minutes + "mins " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementByID("display").innerHTML = "celebration time or doomsday";
  }
}, 1000);

chrome.storage.sync.set(
  {'countdownTo' : jsVariables}, function() {
    if(chrome.runtime.error) {
      console.log("Error saving var");
    }
  }
);
