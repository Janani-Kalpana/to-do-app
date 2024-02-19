console.log("Operators");

let x = 10;
console.log(typeof x);
x = true;
console.log(typeof x);
x = 10n;
console.log(typeof x);
x = 'This is a string';
x = "This is a string";
x = `This is a string`;
console.log(typeof x);
x = Symbol();
console.log(typeof x);
x = undefined;
console.log(typeof x);
x = NaN;
x = Infinity;
console.log(typeof x);
x = {};                 // Object Literal
console.log(typeof x);
x = [];                 // Array Literal
console.log(typeof x);
x = /abc/;              // RegExp Literal
console.log(typeof x);  
x = null;
console.log(typeof x);  // Fault in ECMAScript Engine

x = 0b0101;
x = ~x;
console.log(x);

x = void (10+20);
console.log(x);

let a = 0;
x = void (a++);
console.log(x, a);

// let b = undefined;
let b = void 100;
console.log(b);
console.log(typeof b);

console.log(typeof null);       // Engine Fault
console.log(typeof []);
console.log(typeof {});
console.log(null instanceof Object);
console.log([] instanceof Object);
console.log({} instanceof Object);

/* delete <property>; */

x = 2 ** 3;         // 2^3
console.log(x);

/* <property> in <object> : boolean */
console.log('toString' in Date);
console.log('ijse' in Date);

x = undefined;
x = 20;
// let result = (x == null) ? 10 : x;
let result = x ?? 10;
console.log(result);