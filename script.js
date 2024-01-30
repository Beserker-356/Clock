var c1 = document.querySelector("#chime1T");
var c2 = document.querySelector("#chime2T");
var c3 = document.querySelector("#chime3T");
var button = document.querySelector("#button");
const audio = new Audio("wind.mp3");
audio.loop = true;
let isRunning = false;

c1.addEventListener("mouseout", function () {
  audio.play();
  document.querySelector("#chime1").style.animationName = "swing";
  setTimeout(() => {
    document.querySelector("#chime1").style.animationName = "none";
    audio.pause();
  }, 1750);
});
c2.addEventListener("mouseout", function () {
  audio.play();
  document.querySelector("#chime2").style.animationName = "swing";
  setTimeout(() => {
    document.querySelector("#chime2").style.animationName = "none";
    audio.pause();
  }, 1500);
});
c3.addEventListener("mouseout", function () {
  audio.play();
  document.querySelector("#chime3").style.animationName = "swing";
  setTimeout(() => {
    document.querySelector("#chime3").style.animationName = "none";
    audio.pause();
  }, 1250);
});

const pendulum = document.querySelector("#pendulum");
button.addEventListener("click", function () {
  if (button.innerText === "START") {
    button.innerText = "STOP";
    isRunning = true;
  } else {
    button.innerText = "START";
    isRunning = false;
    pendulum.style.animationName = "none";
  }
});

let sec;
let min;
let hr;
setInterval(() => {
  if (isRunning) {
    pendulum.style.animationName = "pendulum";
    let d = new Date();
    sec = d.getSeconds() * 6;
    min = d.getMinutes() * 6;
    hr = d.getHours() * 30 + Math.round(min / 12);
    if (button.innerText === "STOP") {
      pendulum.style.animationName = "pendulum";
      setInterval(() => {}, 800);
    }
    document.querySelector("#sec").style.transform = "rotate(" + sec + "deg)";
    document.querySelector("#min").style.transform = "rotate(" + min + "deg)";
    document.querySelector("#hr").style.transform = "rotate(" + hr + "deg)";
  }
}, 1000);
