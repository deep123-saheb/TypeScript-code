"use strict";
function logAndReturnGeneric(value) {
    console.log(value);
    return value;
}
const stringValue = logAndReturnGeneric("Hello, TypeScript!");
const numberValue = logAndReturnGeneric(42);
console.log(stringValue);
console.log(numberValue);
class Person {
    constructor(name, age, data) {
        this.name = name;
        this.age = age;
        this.data = data;
        this.name = name;
        this.age = age;
        this.data = data;
    }
}
class Student extends Person {
    getDetails() {
        return `Student Name: ${this.name}, Age: ${this.age}, Data: ${this.data}`;
    }
}
class Employee extends Person {
    getDetails() {
        return `Employee Name: ${this.name}, Age: ${this.age}, Position: ${this.data.position}, Salary: ${this.data.salary}`;
    }
}
const student = new Student("Alice", 20, "Computer Science");
const employee = new Employee("Bob", 30, { position: "Developer", salary: 60000 });
console.log(student.getDetails());
console.log(employee.getDetails());
//# sourceMappingURL=index.js.map