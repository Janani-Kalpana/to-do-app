function Customer(id, name, address){
    this.id = id;
    this.name = name;
    this.address = address;

    this.print = function (){
        console.log(this.id, this.name, this.address)
    }
}

// Customer(1, 'Kasun', 'Galle');

let c1 = new Customer(1, 'Kasun', 'Galle');
console.log(c1);
let c2 = new Customer(2, 'Nuwan', 'Galle');
console.log(c2);

c1.print();
c2.print();