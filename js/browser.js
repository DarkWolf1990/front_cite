(function () {
    const list = document.getElementById('list')
    list.innerHTML = `<li>Browser: ${navigator.appName}`
    list.innerHTML = `<li>Code name: ${navigator.appCodeName}`
    list.innerHTML = `<li>Version: ${navigator.appVersion}`
    list.innerHTML = `<li>Platform: ${navigator.platform}`
    if(window.addEventListener){
        list.innerHTML += "<li>This is modern DOM browser"
    }
    
})()