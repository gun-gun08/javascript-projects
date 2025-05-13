const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");
const brushSizeInput = document.getElementById("brush-size");
const colorPicker = document.getElementById("color-picker");

let drawing = false;
let brushSize = 5;
let color = "#000000";
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 100;
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchmove", draw);
function startDrawing(event) {
    drawing = true;
    draw(event);
}
function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(event) {
    if (!drawing) return;

    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.lineTo(x - canvas.offsetLeft, y - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - canvas.offsetLeft, y - canvas.offsetTop);
}

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener("click", () => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "drawing.png";
    link.click();
});
brushSizeInput.addEventListener("input", (e) => {
    brushSize = e.target.value;
});
colorPicker.addEventListener("input", (e) => {
    color = e.target.value;
});
