// function counterclock()
// {
//     let count=0;
//     return function()
//     {
//         count++;
//         console.log(count);
//     }
// }
// let counter=counterclock();
// let j=0;
// while(j<1000)
// {
//    setTimeout(function(){
//     counter();

//    },2000*j);
//    j++;
// }

function execute(fn)
{
    const cache={};
    return function(...args)
    {
        const key=JSON.stringify(args);
        if(cache[key])
        {
            return cache[key];
        }
        else{
            let result=fn(...args);
            cache[key]=result;
            return result;
        }
    }
}
let cb=(num)=>num*2;
let cm=execute(cb);
console.log(cm(3));