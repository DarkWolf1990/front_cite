(function (){
    let str = 'Love For All, Hatred For None. '
    console.log('String ' + str)
    console.log('Starts With "L"? ' + str.startsWith('L'))
    console.log('Ends With "."? ' + str.endsWith('.'))
    console.log('First Letter: ' + str[0])
    str = str.trim()
    console.log('Trimmed: ' + str)
    console.log('Starts With "L"? ' + str.startsWith('L'))
    console.log('Ends With "."? ' + str.endsWith('.'))
    console.log('First Letter: ' + str[0])
    console.log('\nIncludes "Hat"? ' + str.includes('Hat'))
    console.log('Includes "hat"? ' + str.includes('hat'))
    console.log('\nRepeat:\n ' + str.repeat(10))
})()