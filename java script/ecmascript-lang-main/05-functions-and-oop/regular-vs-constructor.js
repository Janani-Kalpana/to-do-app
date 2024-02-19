function doSomething(){
    return 10;
}

function Student(id, name){
    this.id = id;
    this.name = name;
}

let result1 = doSomething();
console.log(result1, typeof result1);
let instance1 = new doSomething();
console.log(instance1, typeof instance1)

console.log("----------------");

let instance2 = new Student(1, 'Kasun');
console.log(instance2);
let result2 = Student(1, 'Nuwan');
console.log(result2);
console.log(globalThis);

console.log(instance1 instanceof Student);
console.log(instance2 instanceof Student);
