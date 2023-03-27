const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("input");
let isPainting = false;
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
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
});
