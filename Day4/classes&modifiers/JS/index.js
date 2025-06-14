"use strict";
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. You can contact me at ${this.email}.`;
    }
}
const person = new Person("John Doe", 30, "john.doe@example.com");
console.log(person.getDetails());
console.log(person.greet());
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
    getModel() {
        return `The model of this car is ${this.model}.`;
    }
}
const car = new Car("Toyota", "Corolla", 2020);
console.log(car.brand);
console.log(car.getModel());
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes some generic sound`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} barks`);
    }
}
const dog = new Dog("Buddy");
dog.makeSound();
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);
console.log(`Rectangle Area: ${rectangle.getArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.getPerimeter()}`);
console.log(`Circle Area: ${circle.getArea()}`);
console.log(`Circle Perimeter: ${circle.getPerimeter()}`);
//# sourceMappingURL=index.js.map