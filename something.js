/*
** EPITECH PROJECT, 2023
** WORKSHOP-CanvasHML5-Cl-mentCHELLIER
** File description:
** something.js
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw_line(starX, startY, endX, endY, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.lineTo(starX, startY);
    ctx.lineTo(endX, endY);
    ctx.closePath();
    ctx.stroke();
};

function clear_screen(color) {
    ctx.fillStyle = white;
    ctx.clearRect(10, 10, canvas.width, canvas.height);
};

function game_loop() {
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 380, 280);
    ctx.lineWidth = 10;
    draw_line(50, 40, 90, 40, "rgb(0, 0, 0)");
    ctx.strokeRect(30, 30, )
    ctx.stroke();
    clear_screen();
}

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(game_loop, 1000 / 30);
});

