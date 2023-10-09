const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
if (!isDrawing) return; //this stops the function from running when the mouse hasn't been clicked on the canvas
  console.log(e);
  ctx.beginPath()
//   start from
  ctx.moveTo(lastX, lastY)
//   go to
  ctx.lineTo(e.offsetX, e.offsetY)
//   do the actual drawing
  ctx.stroke()
}
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("mousemove", draw);
