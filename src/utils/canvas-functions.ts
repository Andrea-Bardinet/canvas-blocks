export default `

const canvas = document.getElementById("main-canvas")
const ctx = canvas.getContext("2d");

const fill = (x, y, width, height, color)=>{
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height)
}

const write = (x, y, text,size, color) => {
    ctx.fillStyle = color;
    ctx.font = size+"px serif";
    ctx.fillText(text, x, y);
}

const setCanvasSize = (width, height)=>{
    canvas.width = width
    canvas.height = height
}

const getPixelColor = (x,y)=>{
    const img = ctx.getImageData(x, y, 1, 1).data;
    return \`rgba(\${img[0]},\${img[1]},\${img[2]})\`
}


`






