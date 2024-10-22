"use strict";
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.height = innerHeight;
function randomHeightMountain() {
    return Math.floor(Math.random() * 500);
}
function randomHeightCanon() {
    return Math.floor(Math.random() * 200);
}
function addVectors(v1, v2) {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y
    };
}
function updateBall(ball) {
    ball.position = addVectors(ball.position, ball.velocity);
}
function checkBallCollision() {
}
function drawBall(ctx, ball) {
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}
function drawCanon() {
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    updateBall(ball);
    //checkBallCollision(ball, canvas.width, canvas.height); 
    drawBall(ctx, ball);
    requestAnimationFrame(animate); // Recursively call the animate function for the next frame
}
function drawMountain() {
}
//Canvas
