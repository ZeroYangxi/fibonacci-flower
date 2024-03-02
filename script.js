/* Button */
const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", function () {
  location.reload();
});

/* Canvas */
const canvas = document.getElementById("canvas1");
// we use canvas api (2D) for this project; we can also use 'webgL' for 3D.
const context = canvas.getContext("2d");
// canvas size match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// how new picture is drawn
// new shape drawn behind previous ones
context.globalCompositeOperation = "destination-over";

// num变量在 drawFlower 函数中用来生成每个花瓣的位置和大小。
// 它在每次函数调用时递增，导致随着时间的推移，花朵图案的扩张。
let num = 0;
// scale 花朵整体的大小
let scale = 3 * Math.random();
// size 单片花瓣的大小
let size = 16 * Math.random();

// color: let hue = 0;

function drawFlower() {
  // angle用于确定每个花瓣的位置，即花的样式，使花瓣围绕中心点螺旋式地放置。
  let angle = num * 16;

  //radius: 花瓣到中心点的距离
  let radius = scale * num; // a slowly increasing number

  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  // sin fluctuates between 1 and -1
  let positionY = radius * Math.cos(angle) + canvas.height / 2;
  // cos is the opposite of sin, to  create circular path

  context.fillStyle = "white";
  // generate rainbow hue if you want
  // context.fillStyle = `hsl(${hue}, 50%, 100%)`;
  context.lineWidth = 2 * Math.random();
  context.beginPath();

  // arc 方法用于在画布上绘制圆弧，即花瓣。
  context.arc(positionX, positionY, size, 0, Math.PI * 2); // Math.PI * 2 = full circle
  context.closePath();
  context.fill();
  context.stroke();

  num++;
  size++;
  // size++;
}

// redraw canvas again and again to animate
function animate() {
  // clear the canvas (previous frame)
  // context.clearRect(0, 0, canvas.width, canvas.height);
  drawFlower();
  if (num > 10000 * Math.random()) return null;
  requestAnimationFrame(animate);
}

animate();
