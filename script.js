let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 1500;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});



let value= document.querySelectorAll(".alumini");
let intervals = 2000;

value.forEach((value) => {
  let startValue = 0;
  let endValue = parseInt(value.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 40;
    value.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


let valuestd = document.querySelectorAll(".std");
let intervalstd = 4000;

valuestd.forEach((valuestd) => {
  let startValue = 0;
  let endValue = parseInt(valuestd.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 5;
    valuestd.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});



let valuefaculty = document.querySelectorAll(".faculty");
let intervalfac = 4000;

valuefaculty.forEach((valuefaculty) => {
  let startValue = 0;
  let endValue = parseInt(valuefaculty.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 5;
    valuefaculty.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});