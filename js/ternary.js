(function (){
    const numOne = 8, numTwo = 3;
    let verb = (numOne !== 1) ? 'are ': ' is ';
    console.log('There ' + verb + numOne)

    let parity = (numOne%2 !==0) ? 'Odd': 'Even';
    console.log(numOne + ' is ' + parity)

    parity = (numTwo%2 !==0) ? ' Odd': ' Even';
    console.log(numTwo + ' is ' + parity)

    let max = (numOne > numTwo) ? numOne: numTwo;
    console.log(max + ' is the Greater Number')
}) ()