(function (){
// здесь будет мой код!
    let car = {
        make: 'Jeep',
        model: ' Wrangler ',
        accelerate: function (){
            return this.model + ' Drives away'
        },
        brake: function (){
            return this.make + ' Pulls up'
        }

}
console.log('Car is a ' + car.make + '' + car['model'])
    console.log(car.accelerate())
    console.log(car.brake())
})()