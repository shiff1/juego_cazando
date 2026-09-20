let canvas=document.getElementById("areaJuegos");
let ctx=canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle="blue";
    ctx.fillRect(canvas.width/2,canvas.height/2,50,80);
}