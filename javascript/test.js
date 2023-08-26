

let x= new Promise((resolve,reject)=> {
 let a= 20;
setTimeout(()=>{
console.log("SetTimeout")
},1000) 
if(a<30)
	resolve("sucessful");

else
	reject("Failure");
});
 x.then((a)=>{
console.log(a)
}).catch((error)=>{
console.log(error);
}).finally(()=>{
console.log("this")
})


 
console.log(x);