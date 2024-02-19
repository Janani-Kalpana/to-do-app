let text = "This is a string";
console.log(text.substring(5,7));
console.log(text.substr(5,2));

console.log("----------------")

let num = 10;
let flag = true;
let str = "This is another string";
console.log(num.toFixed(3))
console.log(flag.toString().toUpperCase());
console.log(str.split('').reverse().join(''));
console.log("----------------")

let num2 = new Number(20);
let flag2 = new Boolean(true);
let str2 = new String("This is a wrapper");

console.log(typeof num, typeof num2);
console.log(typeof flag, typeof flag2);
console.log(typeof str, typeof str2);
console.log("----------------");

let num3 = Number('30');
let flag3 = Boolean('true');
let str3 = String("This is not a wrapper");

console.log(typeof num3);
console.log(typeof flag3);
console.log(typeof str3);
console.log("----------------");

let num4 = +'40';
// num4 = Number('40');
// num4 = parseInt('40');
// num4 = parseFloat('40');
console.log(num4, typeof num4);

let flag4 = !!"This is a string";
let flag5 = !!(10-10);
console.log(flag4, typeof flag4);
console.log(flag5, typeof flag5);

let str5 = 10 + "";
let str6 = true + "";
console.log(str5, typeof str5);
console.log(str6, typeof str6);
// let flag6 = !!str6;
let flag6 = Boolean(str);
console.log(flag6, typeof flag6);

let objRef = new Boolean(true).valueOf();
let objRef2 = new Number(10).valueOf();
let objRef3 = new String("This is a wrapper").valueOf();
console.log(typeof objRef);
console.log(typeof objRef2);
console.log(typeof objRef3);

