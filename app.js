const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let isPainting = false;
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
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
canvas.addEventListener("mouseup", () => {
    isPainting = false;
});
