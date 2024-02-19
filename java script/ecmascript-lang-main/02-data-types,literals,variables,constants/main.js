console.log("Hello ECMAScript!");
console.log(null == undefined);
console.log(null === undefined);

console.log(true, false);

/* Binary Numbers */
console.log(0b1010, typeof 0b1010);
console.log(0b1010n, typeof 0b1010n);

/* Octal Numbers */
console.log(010);
console.log(0o10, typeof 0o10);
console.log(0o10n, typeof 0o10n);

/* Hexadecimal Numbers */
console.log(0xFF, 0xFFn);
console.log(0XFF, 0XFFn);

/* Decimal Numbers */
console.log(10);
console.log(1250.25);
console.log(1.25e2, 1.25E2);
console.log(10, typeof 10);
console.log(10n, typeof 10n);

console.log(0b10_10);
console.log(0o1_0);
console.log(10_25);
console.log(0xFF_F);

// console.log(0x2p2);

/* IEEE-754 */
console.log(0.3-0.2);
console.log(Infinity)
console.log(-Infinity)
console.log(5/0, -5/0);
console.log(NaN);
console.log(false/0);

console.log("Hello World");
console.log('Hello World');

console.log("ABC",typeof "ABC");
console.log('ABC',typeof 'ABC');

console.log("This is with 'single' quote");
console.log('This is with "Double" quote');

console.log(`Hello 
                ${10+12}
            World!`);
            
console.log(`ABC`, typeof `ABC`);
console.log(Number.MAX_SAFE_INTEGER); // 2e53-1

console.log(undefined, null);

console.log(Symbol("abc"));
console.log(Symbol("edf"));
console.log(Symbol("abc") == Symbol("abc"));
console.log(Symbol("abc") === Symbol("abc"));
console.log(10 == "10");
console.log(10 === "10");

console.log("------------------")

var myVar = 10;
console.log(myVar,"-", typeof myVar);
myVar = true;
console.log(myVar,"-", typeof myVar);
myVar = "I want to assign this string";
console.log(myVar,"-", typeof myVar);

for(var i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

var x = 10;
var x = "ijse";

let y = 10;
// let y = 20;
y = "ijse";

// var y = 20;
// let x = 30;

myName = "Kasun";
var myName;

console.log(myName);

let myLocation;
myLocation = 'ijse';

for(let k = 0; k < 5; k++){
    console.log(k);
}
// console.log(k);

var myVar2;
console.log(myVar2);

let myLet;
console.log(myLet);

let something = "IJSE";
console.log(something);
{
    // console.log(something);
    let something = "ESOFT";
    console.log(something);
}
console.log(something);

console.log('-----------------');

// Object.defineProperty(globalThis, "PI", {
//     enumerable: false,
//     configurable: false,
//     value: 3.14,
//     writable: false
// });

// console.log(PI);
// PI = 4.5;
// console.log(PI);

// var DAYS_OF_WEEK = 7;

const PI = 3.14;
console.log(PI);
// PI = 4.5;
{
    const PI = 8.5;
    console.log(PI);
}
console.log(PI);

