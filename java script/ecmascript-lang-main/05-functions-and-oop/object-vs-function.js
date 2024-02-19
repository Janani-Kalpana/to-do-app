let myObj = new Object();

myObj.id = 'C001';
myObj.name = 'Kasun';
myObj.print = function(){
    console.log(this.id, this.name);
}

console.log('print' in myObj);

// Object Literal
let myObj2 = {
    id: 'C002',
    name: 'Kasun',
    print: function(){
        console.log(this.id, this.name);
    }
};

// =============================================

let myFn = new Function('a', 'b', 'c', 
        `let sum = a+b+c;
         return sum;
        `);
let result = myFn(10,20,30);
console.log(result);

// function literal

function myFn2(a,b,c){
    let sum = a+b+c;
    return sum;
}

let result2 = myFn2(10,20,30);
console.log(result2);

// function Student(){}
let Student = new Function();

