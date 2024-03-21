(function (){
    const box = document.getElementById('box')
    const btn = document.getElementById('btn')
    box.addEventListener('mouseover',function (event) {reacTo(event,'Red')})
    box.addEventListener('mouseout',function (event){reacTo(event, 'Purple')})
    box.addEventListener('mousedown', function (event) {reacTo(event, 'Green')})
    box.addEventListener('mouseup', function (event) {reacTo(event, 'Blue')})
    btn.addEventListener('click', function (event) {reacTo(event,'Orange')})
function reacTo(event, color) {
    document.getElementById('box').style. background = color
    document.getElementById('info').innerText = event.type
}
    reacTo()
})()