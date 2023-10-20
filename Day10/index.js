const checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;

function handleChecked(e) {
  //check if the input element clicked had the shiftkey down
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check inbetween!");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleChecked);
});
