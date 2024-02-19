
// Class Expression
const Customer = class {
    id;
    name;
    location;

    constructor(id, name, location = "Panadura"){
        this.id = id;
        this.name = name;
        this.location = location;
    }
}

let c1 = new Customer(1, 'Nuwan');
console.log(c1);

// class Student{}
// class Student{}