const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("input");
const p = document.querySelector("p");
const color = document.getElementById("color");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
let isPainting = false;
let isFilling = false;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
p.innerText = lineWidth.value;
function cancelPainting() {
    isPainting = false;
    ctx.beginPath();
}
canvas.addEventListener("mousemove", (event) => {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
});
canvas.addEventListener("mousedown", () => {
    isPainting = true;
});
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", () => {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
});
lineWidth.addEventListener("change", (event) => {
    ctx.lineWidth = event.target.value;
    p.innerText = lineWidth.value;
});
color.addEventListener("change", (event) => {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
});
colorOption.forEach((color) => {
    color.addEventListener("click", (event) => {
        const colorValue = event.target.dataset.color;
        ctx.strokeStyle = colorValue;
        ctx.fillStyle = colorValue;
        color.value = colorValue;
    });
});
modeBtn.addEventListener("click", () => {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
});
destroyBtn.addEventListener("click", () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
});
eraserBtn.addEventListener("click", () => {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
});
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    };
});
