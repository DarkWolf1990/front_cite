(function () {
    const form = document.getElementById('code')
    const lang = document.getElementById('lang')
    const info = document.getElementById('info')

    lang.addEventListener('focus', function (event) {
        reactTo(event,info)
    })
    lang.addEventListener('focusout',function (event) {
        reactTo(event,info)
    })
    form.addEventListener('reset', function () {
        defaultMessage(info)
    })
    addEventListener('load', function () {
        defaultMessage(info)
    })

    function reactTo(event,info) {
        info.innerHTML = event.type
    }

    function defaultMessage(info) {
        info.innerHTML = 'Please enter your favorite coding language'
    }
    
})()