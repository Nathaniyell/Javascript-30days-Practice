const secondHand = document.querySelector(".second-hand")

function setDate() {
  const now = new Date(); //gets the currentTime
  const seconds = now.getSeconds();
  const secondsInDegrees = ((seconds / 60) * 360) + 90
  console.log(seconds);
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`

}
setInterval(setDate, 1000); //The setInterval method helps you do something repeatedly. In this case, update the time after every sescond
