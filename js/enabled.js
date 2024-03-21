(function () {
    const info = document.getElementById('info')
    let status = ''
    status = (navigator.javaEnabled())?'Enabled ':' Disabled'
    info.innerHTML += 'Java support is ' + status + '<hr>'
    status=(navigator.cookieEnabled)?'Enabled':'Disabled'
    info.innerHTML += 'Cookie Support is ' + status + '<hr>'
    if(navigator.plugins.length!==0){
        info.innerHTML += 'No. ofPlugins. Length'
        info.innerHTML += '<br>Example: ' + navigator.plugins[0].name
        info.innerHTML += '<br>For: ' + navigator.plugins[0].description + '<hr>'
        if(navigator.mimeTypes.length!==0){
            info.innerHTML += 'No. on MIME TYPES: ' + navigator.mimeTypes.length
            info.innerHTML += '<br>Example: ' + navigator.mimeTypes[1].type
            info.innerHTML += '<br>For: ' + navigator.mimeTypes[1].description
        }
    }

})()