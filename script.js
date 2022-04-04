let x = 480 / 2;
let y = 320 - 30;
let dx = 2;
let dy = -2;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function drawBall(){
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath(); 
}

function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x += dx;
        y += dy;
}
setInterval(draw, 10);


