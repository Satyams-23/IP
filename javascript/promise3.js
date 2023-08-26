
let P= new Promise((resolve, reject)=>{
let a=20;
if (a>30)

resolve("successful");
else
reject("This is failure");
})
console.log(P);

P.then((value)=>
{
console.log(value);}
).catch((error)=>
{console.log(error);})