(function (){
    const info = document.getElementById('props')
    let width = window.screen.width + 'px'
    let height = window.screen.height + 'px'
    let availW = window.screen.availWidth + 'px'
    let availH = window.screen.availHeight + 'px'
    let colors = 'Unknown'

    switch (window.screen.colorDepth) {
        case 8:colors = 'Low color'; break
        case 16:colors = 'High color'; break
        case 24:colors = 'True color'; break
        case 32:colors = 'Deep color'; break
    }

    info.innerHTML = 'Screen Resolution: ' + width + 'x' + height + '<br>'
    info.innerHTML += 'Available Screen Size: ' + availW + 'x' + availH + '<br>'
    info.innerHTML += 'Color Capability: ' + colors + '<br>'
    if(window.screen.orientation){
        info.innerHTML += 'Orientation: ' + window.screen.orientation.type
    }

})()