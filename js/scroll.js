(function (){
    const info = document.getElementById('info')
    let i = 0
    for(i=1; i<41; i++){
        info.innerHTML += (i + '<br>')
    }
    window.scrollBy(200, info.clientHeight)
    info.innerHTML += 'scrollX: ' + window.scrollX + ' & scrollY: ' + window.scrollY
})()