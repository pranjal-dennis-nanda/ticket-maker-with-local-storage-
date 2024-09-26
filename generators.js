// // function *generatenum()
// // {
// //     let i=0;
   
// //     while(i<=6)
// //     {
// //         yield (i++).toString();

// //     }
// // }
// // let calling=generatenum();
// // console.log(calling.next());
// // console.log(calling.next());
// // console.log(calling.next());
// // console.log(calling.next());
// // console.log(calling.next());
// // console.log(calling.next());
// // console.log(calling.next());
// // console.log(calling.next());
// function* genrator()
// {
//     yield 'Step1';
//     yield 'Step2';
// }
// function execute(cb)
// {
//     for(let i of cb())
//     {
//         console.log(i);
//     }
// }
// execute(genrator);
// function makeMaggie()
// {
//     setTimeout(function(){
//         console.log("Maggie Ready");
//     },2000);
// }
// console.log("Start");
// makeMaggie();
// console.log("End");
// let rawws="Bread";
// function cutbread(raw)
// {
// setTimeout(function(){
//     console.log("Bread cutted");
//     function saucebread()
//     {
//         setTimeout(function(){
//             console.log("Bread sauced");
//             function bakebread()
//             {
//                 setTimeout(function(){
// console.log("Bread baked");
//                 },2000);
//             }
//             bakebread();
//         },3000)
//     }
//     saucebread(); 
// },2000);
// }
// console.log("start");
// cutbread(rawws);
// console.log("stop");
// 
let rawss="bread";
function cutbread(raw)
{
    let mypromise=new Promise((resolve,reject)=>{
        if(raw)
        {
            setTimeout(function(){
                resolve("Bread cutted");
               },2000);
        }
        else{
            reject("No raw 1");
        }
    });
return mypromise;
}
function saucebread(cuttedbread)
{
    let mypromise=new Promise((resolve,reject)=>{
        if(cuttedbread)
        {
            
           setTimeout(function(){
            resolve("Bread Sauced");
           },2000);
        }
        else{
            reject("No raw 2");
        }
    });
return mypromise;
}
function bakebread(saucedbread)
{
    let mypromise=new Promise((resolve,reject)=>{
        if(saucedbread)
        {
            setTimeout(function(){
                resolve("Bread baked");
               },2000);
        }
        else{
            reject("No raw 3");
        }
    });
return mypromise;
}
// cutbread(rawss)
// .then((res)=>{
// console.log(res);
//  return saucebread(res);
// }).then((res)=>{
//     console.log(res);
//     return bakebread(res);
// }).then((res)=>console.log(res)).catch((err)=>console.log(err));
async function calling()
{
    let cutbreads=await cutbread(rawss);
    console.log(cutbreads);
    let saucesbread=await saucebread(cutbreads);
    console.log(saucesbread);
    let bakes=await bakebread(saucesbread);
    console.log(bakes);
}
console.log("Start");
calling();
console.log("end");