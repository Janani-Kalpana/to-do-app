function Student(id, name){
    this.id = id;
    this.name = name;
}

let s1 = new Student(1, 'Kasun');
console.log(Student.prototype.constructor === Student);
console.log(s1.__proto__ === Student.prototype);

// Student.prototype = {};
// s1.__proto__ = {};
// console.log(s1 instanceof Student);

// Via Funcntion Constructor
let myFn = new Function('id', 'name', 
    'console.log(id, name)');
myFn(1, 'Kasun');

// Via Function Literal
function myFn2(id, name){
    console.log(id, name);
}
myFn2(2, 'Nuwan');

console.log("----------------");

console.log(Object.prototype.__proto__)
console.log(Object.prototype.constructor === Object);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Student.__proto__ === Function.prototype);

console.log(s1 instanceof Student);
console.log(s1 instanceof Object);
console.log(s1 instanceof Function);

Student.prototype.abc = "IJSE";
console.log(s1.abc);
