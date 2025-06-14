//Note:Generics in TypeScript alow you to create reusable components that can work with any data type.


// function logAndReturn(value:string | number): string | number {
//     console.log(value);
//     return value;
// }

function logAndReturnGeneric<T>(value: T): T {
    console.log(value);
    return value;
}

const stringValue = logAndReturnGeneric<string>("Hello, TypeScript!");
const numberValue = logAndReturnGeneric<number>(42);
console.log(stringValue); // Output: Hello, TypeScript!
console.log(numberValue); // Output: 42

abstract class Person<T> {
    constructor(public name: string, public age: number, public data: T) {
      this.name = name;
      this.age = age;
      this.data = data;
    }
    
    abstract getDetails(): string;
}
class Student extends Person<string> {
    getDetails(): string {
        return `Student Name: ${this.name}, Age: ${this.age}, Data: ${this.data}`;
    }
}
class Employee extends Person<{ position: string; salary: number }> {
    getDetails(): string {
        return `Employee Name: ${this.name}, Age: ${this.age}, Position: ${this.data.position}, Salary: ${this.data.salary}`;
    }
}
const student = new Student("Alice", 20, "Computer Science");
const employee = new Employee("Bob", 30, { position: "Developer", salary: 60000 });
console.log(student.getDetails()); // Output: Student Name: Alice, Age: 20, Data: Computer Science
console.log(employee.getDetails()); // Output: Employee Name: Bob, Age: 30, Position: Developer, Salary: 60000


