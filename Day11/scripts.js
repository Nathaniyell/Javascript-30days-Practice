/*Get our elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const videoTime = document.querySelector(".timer")
const fullscreenBtn = document.querySelector(".full-screen")

/*Build functions */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  
  function updateCurrentTime() {
    videoTime.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  }
  
  const updateTimeInterval = setInterval(updateCurrentTime, 1000);
  
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
  progressBar.style.flexBasis = `${percentage}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; // get the value of where the progress bar was clicked and divide it by the total length of the dive then multiply it by the total video duration
  video.currentTime = scrubTime;
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

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("mousemove", () => mouseDown && scrub(e));
fullscreenBtn.addEventListener("click", ()=>video.requestFullscreen())
