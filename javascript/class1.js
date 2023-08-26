
class square{
	constructor(side)
	{
		this.side=side;
		console.log("parent   " + this.side);
	}
	constructor(length,breadth)
	{
		this.side=side;
		console.log("parent   " + this.side);
	}

	getArea()
	{
		console.log(this.side*this.side);
	}
}

let C = new square(30);
console.log(C);
console.log(C.getarea());