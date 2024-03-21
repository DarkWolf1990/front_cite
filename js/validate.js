(function () {
    const form = document.getElementById('contact')
    form.addEventListener('submit', function (event) {
        validate(form, event)})
    function validate(form, event) {
        let value = form.elements['Name'].value
        if(value===''){
            alert('Please Enter Your Name')
            event.preventDefault(); return
        }
        value = form.elements['Email'].value
        if((value==='')||(value.indexOf('@')===-1)||(value.indexOf('.')===-1)){
            alert('Please Enter A Valid Email Address')
            event.preventDefault()
        }
    }
})()