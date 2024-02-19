myFn();

function myFn(){
    console.log("myFn()");
}

function myReturnFn(){
    return 'ijse';
}

const result = myReturnFn();
console.log(result);
console.log("----------------");

function myParamFn(a, b, c){
    console.log(`a=${a}, b=${b}, c=${c}`);
}

myParamFn(10,20,30);
console.log("----------------");

function crazyFn(id, name, address){
    console.log("My Crazy Fn", id, name, address);
    const myArray = [10,20,30,40];
    console.log(myArray[0], myArray[1]);

    console.log(arguments[0], arguments[1],
         arguments[2], arguments[3], arguments[4]);

    console.log("MyArray: ", Array.isArray(myArray));
    console.log("arguments: ", Array.isArray(arguments));
}

crazyFn();
crazyFn('C001');
crazyFn('C001', "Kasun", 'Galle', 'Sri Lanka', "Universe");

console.log("----------------");

function myMethod(){
    console.log("myMethod()");
}

function myMethod(a){
    console.log("myMethod(a)");
}

function myMethod(a,b){
    console.log("myMethod(a,b)");
}

function myMethod(a,b,c){
    console.log("myMethod(a,b,c)");
}

myMethod();

console.log("----------------");

/* Rest (Syntax) Parameter (Var Args) */
function myRestFn(a, b, c, ...rest){
    console.log(a, b, c, rest);
}


myRestFn('Hi', 'DEP-11', '!', 'How', 'Are', 'You');

console.log("----------------");

function getCountry() {return 'Sri Lanka'};

/* Optional (Default) Parameters */
function myOptParmsFn(id = 'C0' + 1,
             name,
             address = 'Panadura',
             country = getCountry()){
    console.log(id, name, address, country);
}

myOptParmsFn(undefined, 'Kasun', null);

console.log("----------------");

const myObj = {
    id: 'C001',
    name: 'Kasun'
};

// const myCrazyObjFn = function /* Name is not required here */(){
//     console.log("Wow! this is crazy, you know");
// }

const myCrazyObjFn = () => {
    console.log("Wow! this is crazy, you know");
}

/* Anon Fn ≃ Lambda Fn */

console.log(myObj instanceof Object);
console.log(myCrazyObjFn instanceof Object);
console.log(typeof myObj);
console.log(typeof myCrazyObjFn);

// myObj();
myCrazyObjFn();
