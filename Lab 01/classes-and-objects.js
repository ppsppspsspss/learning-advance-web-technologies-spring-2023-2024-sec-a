let name
let age
let cgpa

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showDetails(){
        console.log("Name:", this.name)
        console.log("Age:", this.age)
    }
}
class Student extends Person{
    constructor(name, age, cgpa){
        super(name, age)
        this.cgpa = cgpa
    }
    showStudentDetails(){
        console.log("Name:", this.name)
        console.log("Age:", this.age)
        console.log("CGPA:", this.cgpa)
    }
}

let person1 = new Person("Rian", 22)
person1.showDetails()

let student1 = new Student("Rian", 22, 3.27)
student1.showStudentDetails()

console.log(Object.keys(student1))
console.log(Object.values(student1))
console.log(Object.entries(student1))