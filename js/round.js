(function (){
  let bodyTemp = 98.6
  console.log('Ceiling ' + Math.ceil(bodyTemp))
  console.log('Floor ' + Math.floor(bodyTemp))
  console.log('Round ' + Math.round(bodyTemp))
  console.log('\nImprecision: ' + (81.66*15))
  console.log('Corrected: ' + (((81.66*100)*15)/100))
  console.log('\nFloat: ' + Math.PI)
  console.log('Commuted: ' + ((Math.round(Math.PI*100)/100)))
})()