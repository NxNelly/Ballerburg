interface Mountain {
  height: number;
  yPos: number;
  xPosL: number;//linke untere Ecke der Dreiecks
  xPosR: number;//rechte''

}

interface Vector {
  x: number,
  y: number,
}

interface Canon {
  color: string;
  yPos: number;
  power: number;
  direction: Vector

}

interface Ball {
  color: string;
  radius: number;
  position: Vector;
  velocity: Vector;
  active: boolean;
}


const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.height = innerHeight;

document.addEventListener("keydown", hndKeydown);

let sliderManipulate: HTMLInputElement = document.querySelector("input#AngleKeyboard")!;

drawMountain();

function hndKeydown(_event: KeyboardEvent): void {
  console.log(_event);
  if (_event.code == "ArrowUp") 
    sliderManipulate = document.querySelector("input#AngleKeyboard")!;

  if(_event.code == "ArrowDown")
    sliderManipulate = document.querySelector("input#GunpowerKeyboard")!;

  sliderManipulate.value =  (parseInt(sliderManipulate.value) + 1) + "";

  console.log(sliderManipulate);  

}

document.addEventListener("click", hndMousclick);

function hndMousclick(_event: MouseEvent): void{
  console.log(_event);
  //if (_event. == "Click") 
    sliderManipulate = document.querySelector("input#AngleMous")!;

  //if(_event == "Click")
    sliderManipulate = document.querySelector("input#GunpowerMous")!;

  sliderManipulate.value =  (parseInt(sliderManipulate.value) + 1) + "";

  console.log(sliderManipulate)
}

function randomHeightMountain(): number {
  return Math.floor(Math.random() * 500);
}

function drawMountain(): void {
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(150, 0);
  ctx.lineTo(250, 200);
  ctx.lineTo(0, 200);
  ctx.fillStyle = "green";
  ctx.fill();
}

function drawCanon(): void {

}

function randomHeightCanon(): number {
  return Math.floor(Math.random() * 200);
}

function addVectors(_v1: Vector, _v2: Vector): Vector {
  return {
    x: _v1.x + _v2.x,
    y: _v1.y + _v2.y
  };
}

function updateBall(_ball: Ball): void {
  _ball.position = addVectors(_ball.position, _ball.velocity);
}

function checkBallCollision(): void {
}

function drawBall(_ctx: CanvasRenderingContext2D, _ball: Ball): void {
  _ctx.beginPath();
  _ctx.arc(_ball.position.x, _ball.position.y, _ball.radius, 0, Math.PI * 2);
  _ctx.fillStyle = _ball.color;
  _ctx.fill();
  _ctx.closePath();
}

function animate(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

  // updateBall(ball);
  //checkBallCollision(ball, canvas.width, canvas.height); 
  // drawBall(ctx, ball);

  requestAnimationFrame(animate); // Recursively call the animate function for the next frame
}


