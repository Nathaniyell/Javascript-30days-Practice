/*Get our elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

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

function handleRangeUpdate() {
  video[this.name] = this.value;
  /*
video["volume"] = value from the slider;
video["playbackRate"] = value from the slider;
the volume or the playbackRate property will be selected and updated dynamically whenever the sliders are used
*/
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`
}

/*Hook up event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
});
