(function () {
    const list = document.getElementById('list')
    list.innerHTML += '<li>No. Forms: ' + document.forms.length
    list.innerHTML += '<li>No. Links: ' + document.links.length
    list.innerHTML += '<li>No. Images: ' + document.images.length
    list.innerHTML += '<li>No. Style Sheets: ' + document.styleSheets.length
    list.innerHTML += '<li>No. Scripts: ' + document.scripts.length
    list.innerHTML += '<li>First image URL: ' + document.images[0].src
    list.innerHTML += '<li>First Form Element Value: ' + document.forms[0].elements[0].value
})()