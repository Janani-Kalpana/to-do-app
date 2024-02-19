console.log(typeof null);       // object
console.log([] == []);          // false    (memory location == memory location)
console.log([] == ![]);         // true     ![] => !'' => false false => true
console.log([] + {});           // '' + [object Object] => [object Object]
console.log({} + []);           // [object Object] + '' => [object Object]
console.log([] + []);           // '' + '' => ''
console.log({} + {});           // [object Object] + [object Object] => [object Object][object Object]
console.log(0.1 + 0.2 === 0.3); // false (IEEE-754)
console.log(0 == []);           // true []=>''=> 0 
console.log(0 == '0');          // true
console.log('0' == []);         // false []=>''
console.log(5 + '5');           // 55
console.log(5 - '5');           // 0
console.log(('b' + 'a' + + 'n' + 'a').toLowerCase()); // baNaNa

console.log({}.toString());
console.log([].toString());
