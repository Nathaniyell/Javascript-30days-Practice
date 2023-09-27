const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(); //gets the currentTime
  const seconds = now.getSeconds();
  const secondsInDegrees = (seconds / 60) * 360 + 90;
  //console.log(seconds);
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform=`rotate(${minsDegrees}deg)`;

  const hour = now.getHours;
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}



setInterval(setDate, 1000); //The setInterval method helps you do something repeatedly. In this case, update the time after every sescond
