let myArray = new Array(5);
console.log(myArray.length);
myArray[0] = 10;
myArray[1] = 20;
myArray[2] = 30;
myArray[3] = 40;
myArray[4] = 50;
myArray[5] = 60;
myArray[6] = 70;
myArray[10] = 80;
console.log(myArray, myArray.length);

// Array Literal (Array Initializer)
let myArray2 = [10, 20, 30, 40, 50,,, 60];
console.log(myArray2, myArray2.length);

console.log("==================");

let nums = [];
// nums[-10] = 5;
// nums[-5] = 5;
// nums['ijse'] = 6;

// let myObj = {};
// myObj['ijse'] = 10;
// myObj[-5] = 2;
// console.log(myObj);

// push == append
// unshift == prepend
nums.push(10);
nums.push(20, 30, 40);
nums.push(50);
nums.unshift(0);
nums.unshift(-30, -20, -10);
console.log(nums, nums.length);
// pop = delete from tail
// shift = delete from head
nums.pop();
nums.pop();
console.log(nums, nums.length);
nums.shift();
nums.shift();
console.log(nums, nums.length);
nums.splice(3, 0, 25);
console.log(nums);

nums = [10,20,30,40,50];
// nums.splice(2, 1);
// nums.splice(2, 2);

// nums.splice(2, 0, 25);
// nums.splice(2, 0, 25, 27);

nums.splice(2, 1, 25, 35);
console.log(nums);

const clone = nums.slice();
console.log(clone);

nums = [10,true,{},Symbol(),[[],{}]];
nums = [10,20,30,40,50];

for (const value of nums){
    console.log(value);
}

console.log("-----------");

// nums.forEach(function (value, index){
//     console.log(value, index);
// });

nums.forEach((value, index) => {
    console.log(value, index);
});

console.log(nums.includes(20));
console.log(nums.includes(25));

const names = ['Kasun', 'Nuwan', 'Kamal', 
                'Ruwan', 'Nishan', 'Kamal', 'Supun'];
console.log(names.includes('Kamal'));
console.log(names.indexOf('Kamal'));
console.log(names.lastIndexOf('Kamal'));

const namesStartWithK =  names.filter(function (value){
    // Filtering logic
    return value.startsWith("K");
});

console.log(namesStartWithK);

const customers = [
    { id: 'C001', name: 'Kasun', address: 'Panadura'},
    { id: 'C002', name: 'Nuwan', address: 'Galle'},
    { id: 'C003', name: 'Ruwan', address: 'Matara'},
    { id: 'C004', name: 'Supun', address: 'Panadura'},
    { id: 'C005', name: 'Nimal', address: 'Colombo'}
];

const mappedResult = customers.map(function (customer){
    return customer.id;
});

console.log("Mapping", mappedResult);

// const panaduraCustomers = customers.filter(function(c){
//     // Filtering Logic
//     return c.address === 'Panadura';
// });

const panaduraCustomers = customers.filter((c) => {
    // Filtering Logic
    return c.address === 'Panadura';
});

console.log(panaduraCustomers);

// find, findLast
// findIndex, findLastIndex
let result = customers.findIndex(function (customer){
    return customer.name === 'Ruwan';
});
console.log(result);

let arr1 = [10,20,30];
let arr2 = [40,50,60];
let arr3 = [70,80,90];
let resultArray = arr1.concat(arr2, arr3);
console.log(resultArray);

let resultArray2 = [...arr1, ...arr2, ...arr3];
console.log(resultArray2);

let myObj2 = {
    id: 'C001',
    name: 'Kasun',
    address: 'Galle'
};

let myNumList = [10,20,30,40,50,60,70,80,90];
// start = inclusive
// end = exclusive
console.log(myNumList.slice(2));
console.log(myNumList.slice(2, 4));

let studentList = [
    {id: 'S001', name: 'Kasun', address: 'Galle'},
    {id: 'S002', name: 'Nuwan', address: 'Panadura'},
    {id: 'S003', name: 'Ruwan', address: 'Matara'},
    {id: 'S004', name: 'Supun', address: 'Galle'},
];

result = studentList.some(function(s) {
    return s.address === 'Galle';
});

console.log(result);

nums = [5,2,3,1,0,2-3,2];
// nums.sort();
const cloneNums = nums.toSorted();

console.log(nums);
console.log(cloneNums.reverse());

const clonedStudentList = studentList.toReversed();
console.log(studentList);
console.log(clonedStudentList);

studentList = [
    {id: 'S001', name: 'Kasun', marks: 85, subject: 'oop'},
    {id: 'S002', name: 'Nuwan', marks: 65, subject: 'oop'},
    {id: 'S003', name: 'Ruwan', marks: 95, subject: 'oop'},
    {id: 'S004', name: 'Supun', marks: 25, subject: 'oop'}
];

studentList.sort(function (s1, s2) {
    if (s1.marks === s2.marks) return 0;
    else if (s1.marks > s2.marks) return -5;
    else return 5;
});

console.log(studentList);

result = studentList.every(function(e){
    return e.subject === 'oop';
});

console.log(result);

/* 
push <=> unshift
pop <=> shift
splice
slice
find, findLast
findIndex, findLastIndex
indexOf, lastIndexOf
includes
every
some
filter
forEach
map
sort
reverse
toSorted
toReversed
concat
join
reduce
*/

const someArray = ['He', 'll', 'o',' ', 'DE', 'P', 11];
console.log(someArray.join('-'));

result = someArray.reduce((prev, cur)=>{
    return prev + cur;
},'👋');

console.log(result);


