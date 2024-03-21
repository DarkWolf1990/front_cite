(function () {
    let obj = {category: 'Fashion', models:[{name:'Alice', age:21, city:'New York'},
            {name:'Kelly', age:23, city: 'Las Vegas'}] }
    let json_obj = JSON.stringify(obj)
    console.log(json_obj)
    let new_obj = JSON.parse(json_obj)
    console.log(new_obj)
    console.log(new_obj['category'])
    console.log(new_obj.models[0].name)
    console.log(new_obj['models'][1]['name'])

    const promise = new Promise(function (resolve, reject) {
        let random = Math.round(Math.random()*100)
        if(random % 2 === 0){
            setTimeout(function () {
                resolve(random)
            },1000)
        }else {
            setTimeout(function () {
                reject(random)
            },1000)
        }
    })
    promise
        .then(console.log(promise))
        .then(function (res) {
            console.log(res + 'is Even')
        })
        .catch(function (err) {
            console.log(err + ' is Odd')
        })


})()