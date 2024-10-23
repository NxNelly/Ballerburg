"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
canvas.height = innerHeight;
document.addEventListener("keydown", hndKeydown);
let sliderManipulate = document.querySelector("input#AngleKeyboard");
drawMountain();
function hndKeydown(_event) {
    console.log(_event);
    if (_event.code == "ArrowUp")
        sliderManipulate = document.querySelector("input#AngleKeyboard");
    if (_event.code == "ArrowDown")
        sliderManipulate = document.querySelector("input#GunpowerKeyboard");
    sliderManipulate.value = (parseInt(sliderManipulate.value) + 1) + "";
    if (_event.code == "Arrowright")
        sliderManipulate = document.querySelector("input#AngleKeyboard");
    if (_event.code == "Arrowleft")
        sliderManipulate = document.querySelector("input#GunpowerKeyboard");
    if (_event.code == "Arrowrleft")
        sliderManipulate = document.querySelector("input#AngleKeyboard");
    if (_event.code == "Arrowright")
        sliderManipulate = document.querySelector("input#GunpowerKeyboard");
    sliderManipulate.value = (parseInt(sliderManipulate.value) - 1) + "";
    console.log(sliderManipulate);
}
document.addEventListener("click", hndMousclick);
function hndMousclick(_event) {
    console.log(_event);
    //if (_event. == "Click") 
    sliderManipulate = document.querySelector("input#AngleMous");
    //if(_event == "Click")
    sliderManipulate = document.querySelector("input#GunpowerMous");
    sliderManipulate.value = (parseInt(sliderManipulate.value) + 1) + "";
    console.log(sliderManipulate);
}
function randomHeightMountain() {
    return Math.floor(Math.random() * 500);
}
function drawMountain() {
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(150, 0);
    ctx.lineTo(250, 200);
    ctx.lineTo(0, 200);
    ctx.fillStyle = "green";
    ctx.fill();
}
function drawPlatforms() {
    ctx.rect(0, 200, 150, Math.random() * 50);
    ctx.rect(150, 200, 150, Math.random() * 50);
}
function drawCanon() {
}
function randomHeightCanon() {
    return Math.floor(Math.random() * 200);
}
function addVectors(_v1, _v2) {
    return {
        x: _v1.x + _v2.x,
        y: _v1.y + _v2.y
    };
}
function updateBall(_ball) {
    _ball.position = addVectors(_ball.position, _ball.velocity);
}
function checkBallCollision() {
}
function drawBall(_ctx, _ball) {
    _ctx.beginPath();
    _ctx.arc(_ball.position.x, _ball.position.y, _ball.radius, 0, Math.PI * 2);
    _ctx.fillStyle = _ball.color;
    _ctx.fill();
    _ctx.closePath();
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    // updateBall(ball);
    //checkBallCollision(ball, canvas.width, canvas.height); 
    // drawBall(ctx, ball);
    requestAnimationFrame(animate); // Recursively call the animate function for the next frame
}
