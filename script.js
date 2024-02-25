const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
// we use canvas api (2D) for this project; we can also use 'webgL' for 3D.

// canvas size match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;

// redraw canvas again and again to animate
function animate() {
  size++;

  context.fillStyle = "green";
  context.lineWidth = 5;
  context.beginPath();
  context.arc(100, 100, size, 0, Math.PI * 2); // Math.PI * 2 = full circle
  context.closePath();
  context.fill();
  context.stroke();
  requestAnimationFrame(animate);
}
