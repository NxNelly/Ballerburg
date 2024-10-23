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
  xPos: number;
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

let canon1 : Canon ={ color: "blue", xPos: 50, yPos: 100, power: 50, direction: {x: 1, y: 1} }
let canon2 : Canon ={ color: "red", xPos: 300, yPos: 100, power: 50, direction: {x: -1, y: 1} }


const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

document.addEventListener("keydown", hndKeydown);

let sliderManipulate: HTMLInputElement = document.querySelector("input#AngleKeyboard")!;

function hndKeydown(_event: KeyboardEvent): void {
  console.log(_event);
  if (_event.code == "KeyW") {
    sliderManipulate = document.querySelector("input#AngleKeyboard")!;
      sliderManipulate.value =  (parseInt(sliderManipulate.value) + 1) + "";
  }

  if (_event.code == "KeyS") {
    sliderManipulate = document.querySelector("input#AngleKeyboard")!;
    sliderManipulate.value =  (parseInt(sliderManipulate.value) - 1) + "";
  }

  if (_event.code == "KeyD") {
    sliderManipulate = document.querySelector("input#GunpowerKeyboard")!;
    sliderManipulate.value =  (parseInt(sliderManipulate.value) + 1) + "";
  }

  if (_event.code == "KeyA") {
    sliderManipulate = document.querySelector("input#GunpowerKeyboard")!;
    sliderManipulate.value =  (parseInt(sliderManipulate.value) - 1) + "";
  }

  //sliderManipulate.value =  (parseInt(sliderManipulate.value) - 1) + "";

  console.log(sliderManipulate);

}

document.addEventListener("click", hndMousclick);

function hndMousclick(_event: MouseEvent): void {
  console.log(_event);
  //if (_event. == "Click") 
  sliderManipulate = document.querySelector("input#AngleMous")!;

  //if(_event == "Click")
  sliderManipulate = document.querySelector("input#GunpowerMous")!;

  sliderManipulate.value = (parseInt(sliderManipulate.value) + 1) + "";

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

drawMountain();

function drawPlatforms(): void {
  ctx.rect(0, 200, 150, Math.random() * 50);
  ctx.rect(150, 200, 150, Math.random() * 50);
  ctx.fillStyle = "green";
}

drawPlatforms();

function drawCanon(): void {  

  console.log("draw canon"); 
  ctx.translate(canon1.xPos+25, canon1.yPos);
  ctx.beginPath();  
  ctx.rotate(-((canon1.direction.x - canon1.direction.y)** Math.PI)/180); 
  ctx.arc(0,0,25 , 0, 2 * Math.PI);  
  ctx.rect(0, - 12, 50, 25);  
  ctx.fillStyle = canon1.color;
 
  ctx.fill(); 
  ctx.resetTransform();

  ctx.beginPath();
  ctx.arc(canon2.xPos,canon2.yPos,25 , 0, 2 * Math.PI);
  ctx.rect(canon2.xPos, canon2.yPos- 12, 50, 25);
  ctx.fillStyle = canon2.color;
  ctx.fill();
  
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

function getInput(): void{
}

function animate(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

  getInput()
  // updateBall(ball);
  //checkBallCollision(ball, canvas.width, canvas.height); 
  // drawBall(ctx, ball);

  requestAnimationFrame(animate); // Recursively call the animate function for the next frame
}

drawCanon();

ctx.beginPath();
ctx.rect(canon1.xPos, canon1.yPos,5,5);
ctx.fill();

