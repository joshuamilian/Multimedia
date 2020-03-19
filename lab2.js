let img = new Image();
img.src = 'numberline2.PNG';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


const scale = 2;
const width = 127;
const height = 180;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

const cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  document.getElementById("demo");
  frameCount++;
  if (frameCount < 70) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 600, 0);
  if(cycleLoop[currentLoopIndex] == 10){
  drawFrame(1, 0, 500, 0);
  drawFrame(0, 0, 700, 0);
  }
  currentLoopIndex++;
  window.requestAnimationFrame(step);
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}
