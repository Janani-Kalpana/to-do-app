const myObj = {
    id: 'C001',
    name: 'Kasun',
    address: 'Galle'
};
const myArray = [10,20,30,40,50];
/* 
const myArray = {
    0: 10,
    1: 20,
    2: 30,
    4: 40,
    5: 50
};
*/
console.log(myObj instanceof Object, 
            myArray instanceof Object);

for(const property in myObj){
    console.log(property);
}
for (const index in myArray){
    console.log(index, myArray[index]);
}
console.log("------------");
for (const property in RegExp){
    console.log(property);
}
console.log("-------------");
// for(const property of myObj){
//     console.log(property);
// }
for (const value of myArray){
    console.log(value);
}

console.log(myObj[Symbol.iterator]);
console.log(myArray[Symbol.iterator]);
console.log(myObj[Symbol.iterator] ? 'Iterable': 'Non-iterable');
console.log(myArray[Symbol.iterator] ? 'Iterable': 'Non-iterable');

const myObj2 = {
    id: 'C002',
    name: 'Kasun',
    address: 'Galle',
    [Symbol.iterator]: function* (){
        yield this.id;
        yield this.name;
        yield this.address;
    }
};

console.log(myObj2[Symbol.iterator] ? 'Iterable': 'Non-iterable');
for(const value of myObj2){
    console.log(value);
}

console.log('------------');

with (myObj){
    // let id = 'C003';
    console.log(id);
    console.log(name);
    console.log(address);
}

console.log('--------------');

try{
    throw 'something';
}catch(e){
    console.log(e);
}finally{
    console.log("Finally");
}

try{
    throw new Error("Something went wrong");
}catch(e){
    //console.log(e);
}

debugger;
console.log("Hi!")