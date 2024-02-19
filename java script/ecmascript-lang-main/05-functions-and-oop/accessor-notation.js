const nameSymbol = Symbol();

let myObj = {
    id: 'C001',
    [nameSymbol]: 'Kasun',
    print(){
        console.log(this.id, this[nameSymbol]);
    }
}

// Dot Notation
console.log(myObj.id);
myObj.print();

// Square Bracket Notation
console.log(myObj['id']);
myObj['print']();

console.log(myObj[nameSymbol]);