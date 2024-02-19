// import './module2.js';      // import with side-effects
// import 'http://localhost:5500/js/module2.js';
import {x as y} from './module2.js';

// import abc, {x as x1, y as y1} from './module3.js';
import {x as x1, y as y1, default as abc} from './module3.js';

console.log("Module1", y);
let x = 10;

console.log(x1, y1, abc);

const btnElm = document.querySelector("button");
btnElm.addEventListener('click', ()=>{
    console.log("Loading Module4");
    const promise = import('./module4.js11');
    console.log(promise);
    console.log("Module Loading...!")
    promise.then(module => {     // resolve
        console.log(module);
        console.log(promise);
        console.log("Module loaded successfully");
    }).catch(error => {    // reject
        console.log(promise);
        console.log("Failed to load the module");
    }).finally(()=> {      // resolve, reject
        console.log("Nawa gilunath ban choon");
    });
    
});



