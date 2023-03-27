const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("input");
const p = document.querySelector("p");
const color = document.getElementById("color");
const ctx = canvas.getContext("2d");
let isPainting = false;
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
lineWidth.addEventListener("change", (event) => {
    ctx.lineWidth = event.target.value;
    p.innerText = lineWidth.value;
});
color.addEventListener("change", (event) => {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
});
