(()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(cell=>fill(cell))
    .catch(err=>console.log(err))
    function fill(cells) {
        const values = Object.values(cells)
        let i = 0
        while (i<values.length){
            document.getElementById('n'+i).innerText= values[i].toFixed(2)
            i++
        }
    }
    total()
    function total() {
        let i = 0
        let sum = 0
        let rownum = 1
        let colnum = 0
        for(i=0; i<15; i++){
            sum += parseFloat(document.getElementById('n' + i).innerText)
            if((i + 1)%5===0){
                document.getElementById('rt' + rownum).innerText = sum.toFixed(2)
                rownum++
                sum = 0
            }
            while (colnum!==5){
                for(i=0; i<15; i++){
                    if(i%5===0) sum += parseFloat(document.getElementById('n'+(i+colnum)).innerText)
                }
                colnum++
                document.getElementById('ct' + colnum).innerText = sum.toFixed(2)
                sum = 0
            }
            for(i=0; i<15; i ++){
                sum += parseFloat(document.getElementById('n' + i).innerText)
            }
            document.getElementById('gt').innerText = sum.toFixed(2)
        }
    }
    function update() {
        let row = document.getElementById('rownum').options.selectedIndex
        let col = document.getElementById('colnum').options.selectedIndex
        let newval = parseFloat(document.getElementById('newval').value)
        let legend = document.getElementById('legend')
        let target = null
        if(row===0){
            legend.innerText = 'Select a row '; return
        }
        if(col===0){
            legend.innerText = 'Select a column'; return
        }
        if(!newval){
            legend.innerText = 'Enter a value'; return
        }
        if(isNaN(newval)){
            legend.innerText = 'Enter a number'; return
        }
        target = (((row - 1)*5)+col) - 1
        document.getElementById('n' + target).innerText = newval.toFixed(2)

        total()
        document.getElementById('rownum').options[0].selected = true
        document.getElementById('colnum').options[0].selected = true
        document.getElementById('newval').value = ''
        legend.innerText = 'Cell Editor'
}
})()