window.addEventListener("keydown", (e) => {
  //console.log(e); //lists all the properties of the event object attributed to the key that was pressed
  //console.log(e.keyCode); // give the keycode property associated to the key that was pressed

  //check for an element that has the keycode of 65
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //using the attribute selector, you select the audio element that has a keycode of the key selected

  if (!audio) return; //if the key pressed is not attributed to any audio element then return
  audio.currentTime = 0; // rewinds to the start incase the key is pressed more than once
  audio.play(); //plays the sound associated with the key that was pressed

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects all the elements with a class of key which has the data attribute specified
  console.log(key);

  key.classList.add("playing"); // add the playing class to the keys to help bring in the animation
});
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip the property on the event object if it is not a transform event that took place

  this.classList.remove("playing") //remove the playing className
}
const keys = document.querySelectorAll(".key"); //gives you an array of all the keys with the specified className

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
