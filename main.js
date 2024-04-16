// Canvas Sandbox

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let player1 = {
  x: 175,
  y: 175,
  w: 50,
  h: 50,
  color: "blue",
};

let player2 = {
  x: 200,
  y: 400,
  r: 25,
  color: "green",
};

let block = {
  x: 500,
  y: 125,
  w: 30,
  h: 150,
};

let ball = {
  x: 515,
  y: 400,
  r: 40,
};

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // LOGIC

  // DRAWING
  drawFrame();

  requestAnimationFrame(draw);
}

function drawFrame() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Player 1 (Blue Rectangle)
  ctx.strokeStyle = player1.color;
  ctx.strokeRect(player1.x, player1.y, player1.w, player1.h);

  // Draw Player 2 (Green Circle)
  ctx.strokeStyle = player2.color;
  ctx.beginPath();
  ctx.arc(player2.x, player2.y, player2.r, 0, 2 * Math.PI);
  ctx.stroke();

  // Draw Block
  ctx.fillStyle = "grey";
  ctx.fillRect(block.x, block.y, block.w, block.h);

  // Draw Ball
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
  ctx.fill();
}
