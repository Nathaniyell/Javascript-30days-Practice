/*Get our elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = player.querySelector(".player__slider");

/*Build functions */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateBtn() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}
pro
/*Hook up event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});
