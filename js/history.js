(function () {
    const info = document.getElementById('info')
    info.innerHTML += '<a href="page_1.html">Page_1</a>|'
    info.innerHTML += '<a href="page_2.html"> Page_2</a>|'
    info.innerHTML += '<a href="page_3.html"> Page_3</a>|'
    info.innerHTML += '<br>History Length: ' + history.length
    info.innerHTML += '<br>Current Location: ' + location.pathname + '<br>'
    info.innerHTML += '<button onclick="history.back()">Back</button>'
    info.innerHTML += '<button onclick="history.forward()">Forward</button>'

})()