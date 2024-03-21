(function () {
    document.addEventListener(`keydown`, function (event) {reactTo(event)})
    document.addEventListener('keyup', function (event) {reactTo(event)})
    document.addEventListener('mousemove', function (event) {reactTo(event)})
    function reactTo(event) {
        const info = document.getElementById('info')
        if(event.type==='mousemove'){
            info.innerHTML = 'Mouse pointer is at X: ' + event.x + ' Y:' + event.y
        }
        if(event.type==='keydown'){
            info.innerHTML += '<hr>' + event.type
            info.innerHTML += ': ' + event.keyCode
        }
        if(event.type==='keyup'){
            info.innerHTML += '<br>' + event.type + ':' + String.fromCharCode(event.keyCode) + '<hr>'
        }
    }
})()