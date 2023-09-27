function setDate() {
  const now = new Date(); //gets the currentTime
  const seconds = now.getSeconds();
  
}
setInterval(setDate, 1000); //The setInterval method helps you do something repeatedly. In this case, update the time after every sescond
