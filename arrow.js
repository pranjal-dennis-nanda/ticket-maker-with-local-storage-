let obj={
    name:"pranjal",
    getname:function(){
        console.log(this);
    }
}
hello:()=>{
    console.log(this);
}

obj.getname();
hello();