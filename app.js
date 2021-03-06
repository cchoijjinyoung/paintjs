const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    console.log(event);
    painting = true;
}

function onMouseUp(event) {
    console.log(event);
    stopPainting();
}

function stopPainting(event) {
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}