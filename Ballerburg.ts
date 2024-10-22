let canvas: HTMLCanvasElement = document.querySelector("canvas") ;
let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

canvas.height = innerHeight;
canvas.width = 600;
canvas.


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

    Math.floor(Math.random() * 500);
}

function randomHeightCanon(){
    Math.floor(Math.random() * 200);
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

function checkBallBounds() {

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
  
    updateBall(ball); // Update ball position
    checkBallBounds(ball, canvas.width, canvas.height); // Check and handle collisions with canvas borders
    drawBall(ctx, ball); // Draw the ball on canvas
  
    requestAnimationFrame(animate); // Recursively call the animate function for the next frame
  }


//Canvas
