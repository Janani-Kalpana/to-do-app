// via Constructor

// Syntax
// new RegExp('pattern','flags')
// g = global
// i = ignore case sentivity
// m = multiline

let regExp = new RegExp('[0-9]{9}v', 'gi');
let text = `Kasun: Hi!
            Kasun: My nic is 123456789v.
            Kasun: What is yours?
            Nuwan: Hi!
            Nuwan: My nic is 456789123V!
            `;

console.log(regExp.test(text), regExp.lastIndex, 
    text.charAt(regExp.lastIndex)); // true
console.log(regExp.test(text), regExp.lastIndex,
    text.charAt(regExp.lastIndex)); // true
console.log(regExp.test(text), regExp.lastIndex); // false
console.log(regExp.test(text), regExp.lastIndex); // true
console.log(regExp.test(text), regExp.lastIndex); // true
console.log(regExp.test(text), regExp.lastIndex); // false

// console.log(regExp.exec(text));
console.log("================");
// console.log(text.match(regExp));

text = `Hello
        My contact number: 123-1234567
        What's yours?`;
//regExp = new RegExp('\\d{3}-\\d{7}$', "m");

/* via Literal */
regExp = /\d{3}-\d{7}$/m;
console.log(regExp.test(text));

console.log(/^[A-Za-z ]+$/.test('Kasun 123'));
console.log(/^[A-Za-z ]+$/.test('Kasun'));

console.log("=======================");

text = `Kasun: Hi!
            Kasun: My nic is 123456789v.
            Kasun: What is yours?
            Nuwan: Hi!
            Nuwan: My nic is 456789123V!
            `;
// regExp = /\d{9}[Vv]/;
regExp = /(\d{9})([Vv])/g;
// console.log(regExp.exec(text));
// console.log(regExp.exec(text));
// console.log(regExp.exec(text));

// console.log(text.match(regExp));

const iterator = text.matchAll(regExp);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log("========================");

let url = 'https://localhost:3306/path';
regExp = /(?<p>http[s]?):\/\/(?<h>\w+):(\d{1,4})\/(.+)/;

// console.log(regExp.test(url));
const matcher = url.match(regExp);
console.log(matcher[0]);
console.log(matcher[1]);
console.log(matcher[2]);
console.log(matcher[3]);
console.log(matcher[4]);
console.log(matcher.groups.p);
console.log(matcher.groups.h);
// console.log(url.matchAll(regExp));