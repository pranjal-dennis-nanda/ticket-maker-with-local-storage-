// // let hex=`#${Math.random().toString(16).slice(2,8).padEnd(6,0).toUpperCase()}`;
// // console.log(hex);
// let hex="0123456789ABCDEF";
// hexcode="#";
// for(let i=0;i<6;i++)
// {
//     let randomindex=Math.floor(Math.random()* hex.length);
//     hexcode+=hex[randomindex];
// }
// console.log(hexcode);
function execute(fn)
{
    const cache={};
return function(...args)
{
    const key=JSON.stringify(args);
    if(cache[key])
{
    console.log(cache);
    return cache[key];

    }
    else{
        let result=fn(...args);
        cache[key]=result;
        console.log(cache);
        return result;
    }
}
}
let call=(num)=>num*2;
let main=execute(call);
console.log(main(5));
// console.log(main(5));
console.log(main(10));
console.log(main(10));