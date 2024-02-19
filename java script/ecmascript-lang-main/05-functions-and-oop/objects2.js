const address = 'Panadura';

function print(){
    console.log(this.id, this.name, this.age, this.status);
}

let myVar = 'name';

let myObj = {
    "id": 'C001',            // This is not necessary
    myVar: 'Test',
    [myVar + 10]: 'Kasun',   // Computed Properties
    age: 10,
    // address: address,
    address,
    status: false,
    // print: print,
    print,
    // update: function(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    update(name, age){
        this.name = name;
        this.age = age;
    }
};

myObj.contact = "077-1234567";
console.log(myObj);

const myObj2 = {
    _id: 'S001',            /* private */
    __name__: 'Kasun',      /* hodatama private */
    _address: 'Galle',
    print(){
        console.log(this._id, this._name__, this._address);
    }
};

console.log(myObj2);

const myObj3 = {
    _id: '',
    get id(){
        return this._id + '-DEP11';
    },
    set id(id){
        this._id = 'S' + id;
    },
    name: 'Kasun',
    address: 'Galle',
    address: {
        no: '20B',
        street: 'Grace Peries Road',
        city: 'Panadura'
    },
    contacts: ['071-1234567', '011-1234567', {}]
};

myObj3.id = 10;
console.log(myObj3.id, myObj3.name, myObj3.address);
console.log('_id' in myObj3);   // data / value property
console.log('name' in myObj3);
console.log('address' in myObj3);
console.log('id' in myObj3);    // accessor property



