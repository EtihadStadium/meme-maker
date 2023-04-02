const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("input");
const p = document.querySelector("p");
const color = document.getElementById("color");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn");
const ctx = canvas.getContext("2d");
let isPainting = false;
let isFilling = false;
canvas.width = 800;
canvas.height = 800;
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
        ctx.fillRect(0, 0, 800, 800);
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
