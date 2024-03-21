(function () {
    const itemFour = document.createElement('li')
    const itemFive = document.createElement('li')
    const heading = document.getElementById('heading')
    itemFour.innerText = 'London, England'
    itemFive.innerText = 'Cape Town, South Africa'
    document.getElementById('list').appendChild(itemFour)
    document.getElementById('list').appendChild(itemFive)
    heading.setAttribute('style', 'color:red')
    heading.innerText = 'The Best Five Cities!'

})()