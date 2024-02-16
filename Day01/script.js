const hourBox = document.querySelector(".hour");
const mintBox = document.querySelector(".minute");
const secBox = document.querySelector(".second");
const amPmBox = document.querySelector(".amPm");
const singleBox = document.querySelector(".singleBox");

let ticking = function () {
  let currentDate = new Date();
  //   const time = currentDate.toLocaleTimeString({ hour12: true });
  let hours = currentDate.getHours(); //Get Hour (add zero if single digit)
  let minute = currentDate.getMinutes().toString().padStart(2, "0");
  let seconds = currentDate.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours = hours - 12;
  }

  hourBox.textContent = hours.toString().padStart(2, "0");
  mintBox.textContent = minute;
  secBox.textContent = seconds;
  amPmBox.innerText = ampm;
};

setInterval(ticking, 1000);

setInterval(function () {
  let currentDate = new Date();
  const time = currentDate.toLocaleTimeString();
  singleBox.innerHTML = time;
}, 1000);
