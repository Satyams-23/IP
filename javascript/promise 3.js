
let P= new Promise((resolve, reject)=>{
let a=20;
if (a<30)
resolve("successful");
else
reject("failure");
})