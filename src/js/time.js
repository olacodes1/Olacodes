let hrDisplay = document.querySelector(".display-hrs");
let minDisplay = document.querySelector(".display-min");
let secDisplay = document.querySelector(".display-sec");

function displayTime() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hr = hr < 10 ? (hr = "0" + hr) : hr;
  min = min < 10 ? (min = "0" + min) : min;
  sec = sec < 10 ? (sec = "0" + sec) : sec;

  hrDisplay.innerHTML = hr;
  minDisplay.innerHTML = min;
  secDisplay.innerHTML = sec;

  setInterval(displayTime, 1000);
}

displayTime();
