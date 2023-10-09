const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; //this stops the function from running when the mouse hasn't been clicked on the canvas
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();

  //   start from
  ctx.moveTo(lastX, lastY);
  //   go to
  ctx.lineTo(e.offsetX, e.offsetY);
  //   do the actual drawing
  ctx.stroke()[(lastX, lastY)] = [e.offsetX, e.offsetY]; // destructuring assignmet
  hue++;
  if (hue > 360) {
    hue = 0;
  }
  if (ctx.lineWith >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("mousemove", draw);
