function addZero(number) {
  return number < 10 ? "0" + number : number;
}

function updateDateTime() {
  let today = new Date();

  /* Check if it's AM or PM and set the icon */
  let icon =
    today.getHours() < 6 && today.getHours() > 18
      ? `<div class="sun"><i class="fas fa-sun"></i></div>`
      : `<div class="moon"><i class="fas fa-moon"></i></div>`;

  let check = today.getHours() >= 12 ? "PM" : "AM";

  let time =
    addZero(today.getHours()) +
    ":" +
    addZero(today.getMinutes()) +
    ":" +
    addZero(today.getSeconds()) +
    " " +
    check;

  /* DATE */
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date =
    weekdays[today.getDay()] +
    " " +
    addZero(today.getDate()) +
    "/" +
    addZero(today.getMonth() + 1) +
    "/" +
    today.getFullYear();

  document.getElementById("set-day").innerHTML = date;
  document.getElementById("weather-icon").innerHTML = icon;
  document.getElementById("set-hour").innerHTML = time;
}

setInterval(updateDateTime, 1000);
