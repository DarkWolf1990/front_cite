


function setCookie(key, value, days) {
    const d = new Date()
    d.setTime(d.getTime()+(days*86400000))
    document.cookie = key + '=' + encodeURI(value) + '; expires=' + d.toUTCString() + ';'
}

function getCookie(key) {
    if(document.cookie){
        const pairs = decodeURI(document.cookie).split(';')
        let i, name, value
        for (i=0; i<pairs.length;i++ ){
            name = (pairs[i].split('=')[0]).trim()
            if(name===key){
                value = pairs[i].split('=')[1]
            }

        }
        return value
    }
}

(function () {
    addEventListener('load', welcome)
    function welcome() {
        const info = document.getElementById('info')
        if(getCookie('Name')){
            info.innerHTML = 'Welcome Back, ' + getCookie('Name')
        } else {
            let name = prompt('Please Enter Your Name', 'User')
            setCookie('Name',name, 7)
            info.innerHTML = 'Welcome ' + name
        }
    }
})()