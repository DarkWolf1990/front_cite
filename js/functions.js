function squer(arg){
    return arg * arg
}

document.getElementById("bt").innerText = squer(4)


function add(argOne, argTwo=10){
    return argOne + argTwo
}

document.getElementById("sum").innerText = add(15)


function squareAdd(arg) {
    let result = squer(arg)
    return result + add(arg)
}

document.getElementById('res').innerText = squareAdd(25)



console.log("8x8: " + squer(8))
console.log("8+20: " + add(8, 20))
console.log("8+10: " + add(8))
console.log("(8x8)+(8+10): " + squareAdd(8))