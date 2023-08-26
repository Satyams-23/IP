let f=  async function myFunction() {
console.log("hello");  
return Promise.resolve("hello");
}

console.log(f().then((value)=>{console.log("success");}));