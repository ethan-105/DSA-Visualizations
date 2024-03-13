var square = document.getElementById("square");
var curAngle = 0;
var maxSpeed = 1; // rps
var refreshDelay = 10; // ms
var center = window.innerWidth / 2;
var x = window.innerWidth / 2;

function getCursor(event) {
    x = event.clientX;
}

function move() {
    curAngle += ((x - center) / center) * (refreshDelay / 1000) * (maxSpeed * 6.2831855);
    square.style.rotate = "z " + curAngle + "rad";
}

spinSquare = setInterval(move, refreshDelay);
