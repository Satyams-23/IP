class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class truck {
  constructor(brand) {
    this.carname = brand;
  }
}

class Model extends Car,truck {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
const myCar = new Model("Ford", "Mustang");
console.log(myCar);