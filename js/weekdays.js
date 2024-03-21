(()=>{
    fetch('htdocs/package.js')
        .then(response=>response.json())
        .then(data=>list(data))
        .catch(err=>console.log(err))
    
    function list(data) {
        const values = Object.values(data)
        let i = 0
        while (i < values.length){
            console.log(values[i]); i++
        }
    }

})()