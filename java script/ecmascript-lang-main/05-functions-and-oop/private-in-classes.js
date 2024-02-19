class Customer {
    // id;
    // name;
    #contact;
    location = 'Panadura';

    constructor(id, name, contact, location){
        this.id = id;
        this.name = name;
        this.#contact = contact;
        // if (location) this.location = location;
        this.location = location ?? this.location;
        this.#myPrivateMethod();
    }

    #myPrivateMethod(){
        console.log("Only from inside");
    }
}

let c1 = new Customer(1, 'Kasun', '111');
console.log(c1);
// c1.#myPrivateMethod();