/* Best Practice */
// import {y, Customer, myModule1Fn as fn} from './module1.js';
import * as mod1 from './module1.js';

console.log("Module3", myGlobal, myGlobal2);
let x = 30;

console.log(mod1.y);
console.log(new mod1.Customer());
mod1.myModule1Fn();
