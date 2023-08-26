
let a = A(1,2,3,4,5);

function A(a,b,c,d,e){
	let arr = new Array(a,b,c,d,e);
	return arr;
}

function f(args)
{
let sum =0;
for(let arg of args)
{
sum=sum + arg;
}
return sum;
}

console.log(f(a));

