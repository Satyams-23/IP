let P=new Promise((resolve,reject)=>{
let a=20;
if(a<20)
resolve("success");
else
reject("failure");
}
)

P.then((value)=>{
console.log(value);
}).catch((error)=>{
console.log(error);})