(()=>{
function init() {
    const canvas = document.getElementById('canvas')
    if(canvas.getContext){
        const context = canvas.getContext('2d')
        const cw = canvas.width
        const ch = canvas.high
        let x = 5, y = 44, dx = 5, dy = 5
        context.fillStyle = 'Red'
    }
    document.addEventListener('DOMContentLoaded', init)
}

setInterval(function () {
    if((x + dx > cw-30) || (x+dx< 10)) dx = - dx
    if((y + dy > ch-30) || (y + dy < 10 )) dy = -dy
    x += dx
    y += dy
    paint(context, cw, ch, x, y )
},25)

    function paint(context, cw, ch, x, y) {
        context.clearRect(0,0, cw, ch)
        context.beginPath()
        context.arc(x, y, 30, 0, (Math.PI*2), true)
        context.fill()
    }
})