let f1=function A()
{
let a=20;
console.log("A");
	let f2=function B()
	{
	let b=30;
	console.log("B");
		let f3=function C()
		{
		let c=40;
		console.log("C");
		return c;
		}
	return(f3);
	}
return(f2);
}

console.log(f1()()());

