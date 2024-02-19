// console.log(this);
// console.log(globalThis);
// console.log(this === globalThis);

function myFn() {
    console.log(this === globalThis);
}

myFn();
// myFn.call(this);

let customer = {};
customer.print = function () {
    console.log(customer === this);
    myFn2();
};

function myFn2() {
    console.log(this === customer);
    console.log(this === globalThis);
}

customer.print();

console.log("----------------------");

/* 
    call(this, arg1, arg2, arg3, ....)
    apply(this, [arg1, arg2, arg3, ...])
    bind
*/

function myFn3(id, name) {
    console.log(this, id, name);
}

let student = { id: 'C001' };

myFn3('C001', 'Kasun');
myFn3.call(student, 'C001', 'Kasun');
myFn3.apply({}, ['C001', 'Kasun']);

console.log("-----------------------");

let kasun = {
    id: 'E001',
    name: 'Kasun',
    address: 'Galle',
    print(){
        console.log("Kasun's print method()");
        console.log(this.id, this.name, this.address);
    }
};

let nuwan = {
    id: 'E002',
    name: 'Nuwan',
    address: 'Matara',
    print(){
        console.log("Nuwans's print method()");
        console.log(this.id, this.name, this.address);
    } 
}

const newFn = kasun.print.bind(nuwan);
newFn();

// kasun.print();
// nuwan.print();

console.log("---------------------");

let employee = {
    id: 'E001',
    name: 'Kasun'
};

let myThis = this;

employee.print = () => {
    console.log(this.id, this.name);
    console.log(this);
    console.log(this === myThis);
};

employee.print();

// let myObj1 = {};
// let myObj2 = {};

// console.log(myObj1 === myObj2);

function outerFn(){
    let myObj = {
        id: 'C001'
    }
    myObj.print = () => {
        console.log(this.id);
        console.log(this);
        console.log(this === myThis);
    }
    myObj.print();
}

console.log("---------");
outerFn.call(student);

