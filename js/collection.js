(function () {
    const info = document.getElementById('info')
    const item = document.getElementById('country')
    const lists = document.getElementsByTagName('ol')
    const fruits = document.getElementsByClassName('fruit')
    let i = 0
    info.innerHTML = item + 'id' + item.innerText + '<br>'
    info.innerHTML += '<br>' + lists + 'Tags:<br>'
    for(i=0; i<lists.length; i++){
        info.innerHTML += (i + 1) + 'of' + lists.length
        info.innerHTML +=':' + lists[i].innerText + '<br>'
    }
    info.innerHTML += '<br>' + fruits + 'Class:<br>'
    for(i=0; i<fruits.length; i++){
        info.innerHTML +=(i+1) + 'of' + lists.length
        info.innerHTML += ':' + lists[i].innerText + '<br>'

    }

    
})()