// Object Constructor
let myObj = new Object();   
// Object Literal (Object Initializer)
let myObj2 = {}; 

myObj.id = 'C001';
myObj.name = 'Kasun';
myObj2.id = 'C002';
myObj2.name = 'Nuwan';
myObj.address =  'Galle';
myObj2.address = 'Matara'

myObj.name = 'Kasun Sampath';
myObj.print = function (){
    console.log("Function 1")
    console.log(this.id, this.name, this.address);
}

console.log(myObj);
console.log(myObj2);

let abc = myObj.print;
abc();

myObj.print();

myObj.print = function(){
    console.log("Function 2");
}

myObj.print();

delete myObj.id;
delete myObj.name;
delete myObj.print;

console.log('id' in myObj);
console.log('name' in myObj);
console.log('address' in myObj);
console.log('print' in myObj);
console.log('something' in myObj);

for (const property in myObj) {
    console.log(property);
}

