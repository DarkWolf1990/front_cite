(function (){
    let result, yes = true, no = false;
    result = yes && yes;
    console.log('Are both true? ' + result)

    result = yes && no;
    console.log('Are both still true?  ' + result)

    result = yes || yes;
    console.log('Are either true? ' + result)

    result = yes || no;
    console.log('Are either still true? ' + result)

    result = no || no;
    console.log('Are either still true? ' + result)
    console.log('Original Value: ' + yes)
    yes =!yes;
    console.log('Toggled Value: ' + yes)

}) ()