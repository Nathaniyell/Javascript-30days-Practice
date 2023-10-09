const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; //this stops the function from running when the mouse hasn't been clicked on the canvas
  console.log(e);
}

canvas.addEventListener("movemouse", draw);
canvas.addEventListener("mousedown", () => (isDrawing = true));
