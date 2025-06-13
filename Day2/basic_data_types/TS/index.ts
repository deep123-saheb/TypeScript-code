// let num:number=1234_564_5646;

// let num1:bigint=1234_564_5646n;

// let char:string='code with me';

// let bool:boolean=true;

// let arr:Array<number>=[1,2,3,4,5];

// let arr1:number[]=[1,2,3,4,5];

// let arr2:Array<string>=['a','b','c','d','e'];

// let arr3:string[]=['a','b','c','d','e'];

// let obj:{name:string,age:number}={
//   name:'John', age:30};

// let obj1={...obj, city:'New York'};

// let obj2:{name:string,age:number,city:string}={
//   name:'John', age:30, city:'New York'
// };

// // Error: Type '{ name: string; age: number; city: string; country: string; }' is not assignable to type '{ name: string; age: number; city: string; }'.
// // Object literal may only specify known properties, and 'country' does not exist in type '{ name: string; age: number; city: string; }'.
// // This happens because 'country' is not defined in the type of obj2.
// // obj2={...obj2, country:'USA'};

// //any Type
// let anyVar:any='This can be anything';



// //function to test any type
// function testAnyType(input:any):void {
//   console.log('Input is:', input);
// }

// testAnyType(anyVar);
// anyVar=1234;
// testAnyType(anyVar);
// anyVar=true;
// testAnyType(anyVar);


//  console.log(num);
// console.log(num1);
// console.log(char);
// console.log(bool);
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(obj);
// console.log(obj1);
// console.log(obj1.name); 
// console.log(obj1.age);
// console.log(obj1.city);
// ************************************************************************************************************





//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['a', 'b', 'c', 'd', 'e'];
let mixed: (number | string)[] = [1, 'a', 2, 'b', 3];

numbers.forEach(num => console.log(num.valueOf()));
strings.forEach(str => console.log(str.toUpperCase()));
mixed.forEach(item => console.log(item));
// *********************************************************************************************




// Tuples
let tuple: [number, string, boolean] = [1, 'hello', true];
console.log(`Tuple: ${tuple[0]}, ${tuple[1]}, ${tuple[2]}`);

let coordinate3D: [number, number, number] = [10, 20, 30];
console.log(`3D Coordinate: ${coordinate3D[0]}, ${coordinate3D[1]}, ${coordinate3D[2]}`);

let userData: [string, number, boolean] = ['Alice', 25, true];
console.log(`User Data: ${userData[0]}, ${userData[1]}, ${userData[2]}`);

let response: [number, string] = [200, 'OK']; //http response
console.log(`Response: ${response[0]}, ${response[1]}`);

//response.push('Additional Info'); // Adding an extra element -> drawback of tuples
// *********************************************************************************************************





//enum

enum color {

  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue' 
}

enum appDetails{
  appName = 'MyApp',
  version = '1.0.0',
  author = 'John Doe' 
}

enum Size{
  small,
  medium,
  large
}

let favoriteColor: color = color.Green;
console.log(`Favorite Color: ${favoriteColor}`);

let appInfo: appDetails = appDetails.appName;
console.log(`App Name: ${appInfo}`);
let appVersion: appDetails = appDetails.version;
console.log(`App Version: ${appVersion}`);

let medium:number=1;
let large:number=2;
let small:number=0

let size: Size = Size.medium; // Using const enum for performance optimization
console.log(`Size: ${size}`);

// ******************************************************************************************




//unknown type
let unknownVar: unknown = 'This can be anything';
// Function to test unknown type
function testUnknownType(input: unknown): void {
  if (typeof input === 'string') {
    console.log('Input is a string:', input.toUpperCase());
  } else if (typeof input === 'number') {
    console.log('Input is a number:', input.toFixed(2));
  } else if (typeof input === 'boolean') {
    console.log('Input is a boolean:', input ? 'True' : 'False');
  } else {
    console.log('Input is of unknown type:', input);
  }
}
testUnknownType(unknownVar);
unknownVar = 1234;
testUnknownType(unknownVar);
unknownVar = true;
testUnknownType(unknownVar);
unknownVar = { key: 'value' };
testUnknownType(unknownVar);
unknownVar = [1, 2, 3];
testUnknownType(unknownVar);

// ******************************************************************************************


/*Note:Type inference is a feature in TypeScript where the compiler automatically determines the type of a variable based on the value assigned to it, without the need for an explicit type annotation.

Example:

Here, inferredNumber is inferred to be of type number because it is initialized with a numeric value. This helps reduce boilerplate and makes code cleaner, while still providing type safety.*/
//Note:type inference code below
//type inference
let inferredNumber = 42; // TypeScript infers this as number
let inferredString = 'Hello, TypeScript!'; // TypeScript infers this as string

let inferredArray = [1, 2, 3]; // TypeScript infers this as number[]
//**************************************************************************************************








//Note: Type assertions
/*

Type Assertion in TypeScript allows you to tell the compiler 
"trust me, I know what I'm doing" to treat a value as a specific type

 There are two syntaxes for type assertion:

1. Using the 'as' syntax
2. Using angle-bracket syntax

*/ 
//Note: code below demonstrates type assertion
let someValue: any = 'This is a string';
let stringLength: number = (someValue as string).length; // Using 'as' syntax
let anotherStringLength: number = (<string>someValue).length; // Using angle-bracket syntax
//**********************************************************************************************************







//union types
function printId(id: number | string): void {
  if (typeof id === 'string') {
    console.log(`String ID: ${id.toUpperCase()}`);
  } else {
    console.log(`Number ID: ${id.toFixed(2)}`);
  }
}
printId(101);
printId('abc123');

let id: number | string ;// union type
id = 123; // Assigning a number
id = 'abc'; // Now assigning a string
console.log(`ID: ${id}`);

// ********************************************************************************************


//Aliases
type User = {
  id: number | string;
  name: string;
  email: string;
  age: number;
};

//intersection types
type Admin = User & {
  role: 'admin' | 'user';
};


let user1: Admin = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 30,
  role: 'admin'
};

let user2: User = {
  id: '2',
  name: 'Bob',
  email: 'bob@example.com',
  age: 25
};

console.log(`User: ${user1}`);
console.log(`User: ${user2}`);

// *******************************************************************************




//interfaces
interface Product {
  id: number;
  name: string;
  price: number;
}
interface Order extends Product {
  orderId: number;
  quantity: number;
}
interface Customer {
  id: number;
  name: string;
  email: string;
}
interface OrderWithCustomer extends Order {
  customer: Customer;//Alias 
}

let customer1:OrderWithCustomer={
  id: Math.floor(Math.random() * 1000), // Random ID for demonstration
  name: 'Laptop',
  price: 1000,
  orderId: 101,
  quantity: 2,
  customer: {
    id: Math.floor(Math.random() * 1000), // Random ID for demonstration
    name: 'Alice',
    email: 'alice@example.com'
  }
}
console.log(`Order with Customer: ${JSON.stringify(customer1)}`);
// ******************************************************************************************

