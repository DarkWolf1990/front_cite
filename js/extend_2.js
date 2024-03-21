(function (){
    let jsString = 'Text' // Неверно - new String('Text')
    let jsNumber = 125000 // Неверно - new Number(125000)
    let jsBoolean = true // неверно - new Boolean(true)
    let jsObject = {
        firstName: 'Mike', lastName: 'McGrath'
    }
    let jsDate = new Date()
    let jsArray = [1, 2, 3]
    let jsRegExp = /ineasysteps/
    let jsMath = Math
    let jsError = new Error('Error!')

    console.log('Date Object: ' + jsDate)
    console.log('Locale Date String: ' + jsDate.toLocaleString())

    console.log('\nPrimitive Number: ' + jsNumber)
    console.log('Locale Number String: ' + jsNumber.toLocaleString())

})()