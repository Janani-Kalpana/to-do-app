public class Student{
    String id;
    String name;
    Student(String id, String name){
        this.id = id;
        this.name = name;
    }
}

class SpecialStudent extends Student {
    String specialitiy;
    SpecialStudent(String id, String name, String speciaility){
        super(id, name);
        this.specialitiy = speciaility;
    }
}