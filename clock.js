function setDate() {
  const now = new Date(); //gets the currentTime
  const seconds = now.getSeconds();
  const secondsInDegrees = (seconds / 60) * 360;
  console.log();
}
setInterval(setDate, 1000); //The setInterval method helps you do something repeatedly. In this case, update the time after every sescond
