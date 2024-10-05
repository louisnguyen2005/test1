function addZero(number) {
  return number < 10 ? "0" + number : number;
}

function updateDateTime() {
  let today = new Date();

  /* Check if it's AM or PM and set the icon */
  let icon =
    today.getHours() > 18
      ? `<div class="moon"><img src="./components/assets/moonst.png" alt="">
</div>`
      : `<div class="sun"><img src="./components/assets/sun.png" alt=""></div>`;

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

let index__banner = 1;
const changeImage = () => {
  let imgs = [
    "./components/assets/bgimg.jpg",
    "./components/assets/banner5.jpg",
    "./components/assets/banner6.jpg",
    "./components/assets/banner7.jpg",
    "./components/assets/banner8.webp",
  ];
  document.getElementById("banner").src = imgs[index__banner];
  index__banner++;
  if (index__banner == 5) {
    index__banner = 0;
  }
};
setInterval(changeImage, 6000);
