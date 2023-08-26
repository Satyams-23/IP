const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName : () =>{
       
     console.log(this.firstName + " " + this.lastName);
	
  }
}

const person={
firstName:"vcet",
  lastName: "it"
}

let a = myObject.fullName.bind(person);
a();
