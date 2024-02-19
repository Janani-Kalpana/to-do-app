const nums = [10,20,30,40,50];
const customer = {
    id: 'C001',
    name: 'Kasun',
    address: 'Galle',
    // contact: '077-1234567'
};

/* Destructure Assignment */
const {name:customerName, id, contact:c='no contact'} = customer;
const [x,,,y,z] = nums;

const [a,,...rest] = nums;
const [k,...[e,d]] = nums;

// const [first, , ...rest2] = nums;
const [first, , ...{length:l}] = nums;

console.log(id, customerName, c);
console.log(x,y,z);
console.log(a);
console.log(rest);
console.log(k);
console.log(e, d);

console.log(first);
console.log(l);

let dx = 10;
let dy = 20;
// let temp = dx;
// dx = dy;
// dy = temp;

[dy, dx] = [dx, dy]

console.log('dx', dx);
console.log('dy', dy);

const myObj = {
    ...customer,
    contact: '077-1234567',
    ...nums
};

console.log(myObj);

// const myArray2 = [...nums, ...myObj];
// console.log(myArray2);

let num1, num2, num3;
[num1, num2, num3] = [10,20,30,40,50];
console.log(num1, num2, num3);

let prop1, prop2;
({id:prop1, name:prop2} = {id: 'C001', name: 'Kasun'});
console.log(prop1, prop2);

console.log("=============");

myFn(customer, nums)

// function myFn(a,b){}

function myFn({name, address}, [x, y, ,z]){
    console.log(name, address);
    console.log(x,y, z);
}
