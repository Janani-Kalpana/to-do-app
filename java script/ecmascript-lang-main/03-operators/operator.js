// Optional Chaining Operator (?.)
// Safe Navigation Operator

let myObj = {
    id: 'C001',
    name: 'Kasun',
    print(){
        console.log(this.id, this.name);
    }
};

// myObj = null;
myObj = void 0;
myObj?.print();

let myArray = ['Kasun', 'Nuwan', 'Ruwan', null];
myArray = null;
const result = myArray?.toReversed()[0]?.toUpperCase();
console.log(result);