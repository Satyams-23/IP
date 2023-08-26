let f=async  function f(){
console.log("hello");
return Promise.resolve(()=>{return Promise.reject("chain")})
}

console.log(f());
let a=f();
a.then((value)=>{console.log(value)}
).catch((error)=>{console.log(error)}
);