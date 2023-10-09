const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0

function draw(e) {
  if (!isDrawing) return; //this stops the function from running when the mouse hasn't been clicked on the canvas
  console.log(e);
  ctx.beginPath();
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  //   start from
  ctx.moveTo(lastX, lastY);
  //   go to
  ctx.lineTo(e.offsetX, e.offsetY);
  //   do the actual drawing
  ctx.stroke()[(lastX, lastY)] = [e.offsetX, e.offsetY]; // destructuring assignmet
}
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("mousemove", draw);
