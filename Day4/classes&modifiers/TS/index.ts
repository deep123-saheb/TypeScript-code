class Person{
  name: string
  age: number
  email: string
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. You can contact me at ${this.email}.`;
  }
}
const person = new Person("John Doe", 30, "john.doe@example.com");

console.log(person.getDetails());
console.log(person.greet());

//access modifiers [public, private, protected]

//Note: public is the default access modifier in TypeScript  , it can be accessed from anywhere

//Note: private can only be accessed within the class itself
//Note: protected can be accessed within the class and by subclasses

class Car{
   brand: string;
   private model: string;
   protected year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  private getDetails(): string {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }

  getModel(): string {
    return `The model of this car is ${this.model}.`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);
console.log(car.brand); // Accessible

// console.log(car.model); // Error: Property 'model' is private and only accessible within class 'Car'.
console.log(car.getModel()); // Accessible

// console.log(car.getDetails()); // Error: Property 'getDetails' is private and only accessible within class 'Car'.

// console.log(car.year); // Error: Property 'year' is protected and only accessible within class 'Car' and its subclasses.


// Inheritance

class Animal{   // Base class
  constructor(public name:string){

  }
  makeSound():void{
    console.log(`${this.name} makes some generic sound`);
  }
}

class Dog extends Animal{  // Derived class
  constructor(name:string){
    // Use the constructor of the parent class
    super(name);// Call the constructor of the parent class
  }
  makeSound():void{
    // Override the makeSound method
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks 

// Note: The Dog class inherits from the Animal class and overrides the makeSound method.
// The super() function is used to call the constructor of the parent class.


// Abstract Classes

abstract class Shape{
  abstract getArea(): number; // Abstract method, must be implemented by derived classes

  abstract getPerimeter(): number; // Abstract method, must be implemented by derived classes
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

console.log(`Rectangle Area: ${rectangle.getArea()}`); // Output: Rectangle Area: 50
console.log(`Rectangle Perimeter: ${rectangle.getPerimeter()}`); // Output: Rectangle Perimeter: 30
console.log(`Circle Area: ${circle.getArea()}`); // Output: Circle Area: 153.93804002589985
console.log(`Circle Perimeter: ${circle.getPerimeter()}`); // Output: Circle Perimeter: 43.982297150257104


//getters and setters

class User {
  private _username: string;
  private _email: string;

  constructor(username: string, email: string) {
    this._username = username;
    this._email = email;
  }

  get username(): string {
    return this._username;
  }

  set username(newUsername: string) {
    this._username = newUsername;
  }

  get email(): string {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }
}

const user = new User("john_doe", "john.doe@example.com");
console.log(user.username); // Output: john_doe
user.username = "jane_doe"; // Update username
console.log(user.username); // Output: jane_doe

user.email = "jane.doe@example.com"; // Update email
console.log(user.email); // Output: jane.doe@example.com

console.log(user); // Output: User { _username: 'jane_doe', _email: 'jane.doe@example.com' }

// Note: Getters and setters allow controlled access to private properties.
// They provide a way to encapsulate the logic for getting and setting values, allowing for validation or transformation if needed.

