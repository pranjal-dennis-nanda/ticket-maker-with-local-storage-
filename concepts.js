let mypromise=new Promise((resolve,reject)=>{

if(false)
{
    resolve("Success granted");
}
reject("success not given");
});
async function fetchdata()
{
    try{
    let result=await mypromise;
    console.log(result);
    }
    catch(error){
console.log(error);
    }
}

fetchdata();