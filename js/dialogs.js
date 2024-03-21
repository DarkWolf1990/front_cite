(function (){
    const info=document.getElementById('response')
    window.alert('Hello from JavaScript')
   info.innerHTML = `<br>Confirm:${window.confirm('Go or Stop?')}`
    info.innerHTML += `<br>Prompt${window.prompt('Yes or No?', 'Yes')}`
})()