(function (){
    let comparison, sum = 8, str = 'JavaScript';
    comparison = str === 'JAVASCRIPT';
    console.log('String Equality? ' + comparison)

    comparison = str === 'JavaScript';
    console.log('String Equality? ' + comparison)

    comparison = sum === 8;
    console.log('Number Equality? ' + comparison)

    comparison = sum > 5;
    console.log('Greater Than? ' + comparison)

    comparison = sum < 5;
    console.log('Less Than? ' + comparison)

    comparison = sum <= 8;
    console.log('Less Than or Equal To? ' + comparison)

}) ()