(function () {
    const list = document.getElementById('list')
    list.addEventListener('change', function () {reactTo(list,event)})
    list.addEventListener('load', function () {reactTo(list, event)})
    function reactTo(list, event) {
        const info = document.getElementById('info')
        let index = list.options.selectedIndex
        let city = list.options[index].value
        info.innerHTML = event.type + '<br>Selected: '
        info.innerHTML = city +'<br>Index: ' + index
    }
})()