let canvas: HTMLCanvasElement = document.querySelector("canvas") ;
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

canvas.height = innerHeight;

interface Mountain{
    height: number;
    yPos: number;
    xPosL: number;//linke untere Ecke der Dreiecks
    xPosR: number;//rechte''

}

interface Canon {
    color: string;
    yPos: number;
    power : number;
    direction : vector

}

interface Ball {
    color: string;
    radius: number;
    position: Vector;
    velocity : Vector;
    active : boolean;
}

function randomHeightMountain(){

   return Math.floor(Math.random() * 500);
}

function randomHeightCanon(){
    return Math.floor(Math.random() * 200);

}

function addVectors(v1: Vector, v2: Vector): Vector {
    return {
      x: v1.x + v2.x,
      y: v1.y + v2.y
    };
  }

function updateBall(ball: Ball): void {
    ball.position = addVectors(ball.position, ball.velocity);
  }

function checkBallCollision() {

}

function drawBall(ctx: CanvasRenderingContext2D, ball: Ball): void {
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
  }

function drawCanon(){

}

function animate(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  
    updateBall(ball);
    //checkBallCollision(ball, canvas.width, canvas.height); 
    drawBall(ctx, ball); 
  
    requestAnimationFrame(animate); // Recursively call the animate function for the next frame
  }

  function drawMountain(){

  }

//Canvas
