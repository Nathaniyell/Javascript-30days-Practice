const pressed = [];
const secretcode = "nath";

window.addEventListener("keyup", (e) => {
  // console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);
  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);
});
