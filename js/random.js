(function () {
    let i, rand, temp, nums = []
    let str = '\n\nYour Six Lucky Numbers: '
    for(i=1; i<60; i++)
    {
        nums[i] = i
    }
    for(i=1; i<60; i++)
    {
        rand = Math.ceil(Math.random()*59)
        temp = nums[i]
        nums[i] = nums[rand]
        nums[rand] = temp
    }
    for(i=1; i<7; i++)
    {
        str += nums[i]
        if(i!==6)
        {
            str += '-'
        }
        console.log(str)
    }
})()