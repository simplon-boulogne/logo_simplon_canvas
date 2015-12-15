function draw(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var start = 100;
    
    ctx.beginPath();
    //Dessin du cercle
    ctx.arc(start,start,80,0,Math.PI*2, false);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#00A1D0";
    ctx.stroke();
    
    var vert_space = 15;
    var square_side = 25;
    //Dessin du carré du haut
    ctx.fillStyle = "#00A1D0";
    ctx.fillRect((start - square_side/2), (start - vert_space - 25),square_side,square_side);
    
    
    //Dession du carré du bas
    ctx.fillStyle = "#3563BA";
    ctx.fillRect((start - square_side/2),(start + vert_space ),square_side,25);
    ctx.closePath();
}

window.onload = draw;