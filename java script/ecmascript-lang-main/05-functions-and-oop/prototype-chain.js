function Student(id, name){
    this.id = id;
    this.name = name;
    
    Student.prototype.print = function(){
        console.log(this.id, this.name);
    }
}

function SpecialStudent(id, name, speciality){
    Student.call(this, id, name);
    this.speciality = speciality;

    SpecialStudent.prototype.print = function(){
        console.log(this.id, this.name, this.speciality);
    }
}

// SpecialStudent.prototype.__proto__ = Student.prototype;
Object.setPrototypeOf(SpecialStudent.prototype, Student.prototype);

let s1 = new SpecialStudent(1, 'Kasun', 'OOP');
s1.print();
console.log(s1 instanceof SpecialStudent);
console.log(s1 instanceof Student);