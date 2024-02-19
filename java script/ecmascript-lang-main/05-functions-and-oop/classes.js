class Student {
    id;
    name;

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    print(){
        console.log(this.id, this.name);
    }
}

class SpecialStudent extends Student {
    speciality;

    constructor(id, name, speciality){
        super(id, name);
        this.speciality = speciality;
    }

    // print(){
    //     console.log(this.id, this.name, this.speciality);
    // }
}

let s1 = new SpecialStudent(1, 'Nuwan', 'OOP');
s1.print();