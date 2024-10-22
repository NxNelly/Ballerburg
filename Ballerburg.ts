let canvas: HTMLCanvasElement = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

interface Canon {
    color: string;
    yPos: number;
    power : number;
    direction : vector

}

interface Ball {
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


//Canvas
