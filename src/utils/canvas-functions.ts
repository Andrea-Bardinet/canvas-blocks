declare global {
    interface Window { 
        canvas: any;
        ctx : any;
        sleep :any;
        fill:any;
        write:any;
        setCanvasSize:any;
        colourRgb:any;
        getPixelColor:any;
        drawLine:any;
    }
}

const addCanvasFunction = () => {

    window.canvas = document.getElementById("main-canvas")
    window.ctx = window.canvas.getContext("2d");

    //@ts-ignore
    window.sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    //@ts-ignore
    window.fill = (x, y, width, height, color) => {
        window.ctx.fillStyle = color;
        window.ctx.fillRect(x, y, width, height)
    }

    //@ts-ignore
    window.write = (x, y, text, size, color) => {
        window.ctx.fillStyle = color;
        window.ctx.font = size + "px serif";
        window.ctx.fillText(text, x, y);
    }

    //@ts-ignore
    window.setCanvasSize = (width, height) => {
        window.canvas.width = width
        window.canvas.height = height
    }

    //@ts-ignore
    window.colourRgb = (r, g, b)=> {
        r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
        g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
        b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
        r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
        g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
        b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
        return '#' + r + g + b;
    }

    //@ts-ignore
    window.getPixelColor = (x, y) => {
        const img = window.ctx.getImageData(x, y, 1, 1).data;
        return window.colourRgb(img[0], img[1], img[2])
    }

    //@ts-ignore
    window.drawLine = (x1, y1, x2, y2, lineWidth, color) => {
        window.ctx.beginPath();
        window.ctx.moveTo(x1, y1);
        window.ctx.lineTo(x2, y2);
        window.ctx.strokeStyle = color;
        window.ctx.lineWidth = lineWidth;
        window.ctx.stroke();
    }

    //@ts-ignore
    window.drawCircle = (x, y, radius, color) => {
        window.ctx.beginPath();
        window.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        window.ctx.fillStyle = color;
        window.ctx.fill();
    }

}

export default addCanvasFunction;






