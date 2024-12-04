const canvas=document.getElementById('matrix');
const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const letters = Array(256).join(1).split('');
const fontSize =20;


function drawMatrix(){
ctx.fillStyle='rgba(0,0,0,0.05';
ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.fillStyle='#00F';
ctx.font='20px monospace';

letters.forEach((y,index)=> {
    const text=String.fromCharCode(0x30A0 + Math.random()*96);
    const x=index*fontSize;

    ctx.fillText(text,x,y)

    letters[index]=y>canvas.height || Math.random()>0.96 ? 0 : y+fontSize;
});
}

setInterval(drawMatrix,50);

window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
})