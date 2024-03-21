(function () {
    const form = document.getElementById('pizza')
    form.addEventListener('submit', function (event) {reactTo(form, event)})
    form.Top[0].checked = true
    function reactTo(form, event) {
        let i, ok, summary = ''
        for(i=0; i<form.Top.length; i++){
            if(form.Top[i].checked){
                summary += form.Top[i].value + ''
            }
        }
        ok = confirm('Submit These Choices?\n' + summary)
        if(!ok){event.preventDefault()}
    }
    
})()