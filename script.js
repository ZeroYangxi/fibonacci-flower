window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const context = canvas.getContext("2d");
  // set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.lineWidth = "3px";
  context.strokeStyle = "red";
  context.beginPath();
  context.moveTo(canvas.width / 2, 0); // starting coordinate (x,y)
  context.lineTo(canvas.width / 2, canvas.height); // ending coordinate (x, y)
  context.stroke();

  const text = "Hello!!!";
  const textX = canvas.width / 2;
  const textY = canvas.height / 2;
  context.fillStyle = "white";
  context.font = "100px Helvetica";
  context.textAlign = "center"; // where the text sit horrizontally in relation to the axis
  context.fillText(`${text}`, textX, textY); // x,y is axis of text

  context.strokeStyle = "pink";

  context.strokeText(`${text}`, textX, textY);
});
