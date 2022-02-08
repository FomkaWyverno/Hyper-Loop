const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
setSizeCanvas(canvas);
drawScene(context);
window.addEventListener('resize',() => {
    setSizeCanvas(canvas);
    drawScene(context);
});


function setSizeCanvas(canvas){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}

function drawScene(context) {
    context.moveTo(0,0);
    context.lineTo(0,100);
    context.lineTo(100,0);
    context.strokeStyle = "blue";
    context.stroke();
}