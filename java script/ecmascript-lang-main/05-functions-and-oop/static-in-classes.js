class Employee {
    id;
    name;
    static myStaticField1 = 10;

    static{
        console.log(this.myStaticField1);
        // console.log(Employee.myStaticField2);
        console.log("Static Initiallizer 1");
    }

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static #myStaticField2 = 20;

    static{
        console.log(Employee.myStaticField1);
        console.log(this.#myStaticField2);
        console.log("Static Initiallizer 2");
    }

    static doSomething(){
        console.log("doSomething()");
        Employee.#myPrivateStaticMethod();
    }

    print(){

    }

    static #myPrivateStaticMethod(){
        console.log("This is private static method");
    }
}

console.log(Employee.myStaticField1);
// console.log(Employee.#myStaticField2);
Employee.doSomething();
let e1 = new Employee(1, 'Kasun');
// e1.doSomething();
console.log("doSomething" in Employee);
console.log("doSomething" in Employee.prototype);
console.log("print" in Employee.prototype);