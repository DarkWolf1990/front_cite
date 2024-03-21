(function (){
    let square = Math.pow(5, 2)   // 52 или (5x5)
    let cube = Math.pow(4, 3)  // 43 или (4x4x4)
    console.log('\nLargest Positive: ' + Math.max(square, cube))
    console.log('\nSmallest Positive: ' + Math.min(square, cube))
    square *= -1
    cube *= -1
    console.log('\nLargest Negative: ' + Math.max(square, cube))
    console.log('\nSmallest Negative: ' + Math.min(square, cube))



})()