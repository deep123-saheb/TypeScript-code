console.log("Hello, TypeScript!");
//normal function
// function add(a: number, b: number): number {
//     return a + b;
// }
// //function expression


// const sub = function(a: number, b: number): number {
//     return a - b;
// };
// //arrow function
// const multiply = (a: number, b: number): number => {
//     return a * b;
// };

// //shorter arrow function
// const divide= (a: number, b: number): number => a / b;

//function with default parameter
const greet = (name: string = "World"): string => {
    return `Hello, ${name}!`;
};


function process(value: string): string;
function process(value: number): number;
function process(value: string | number): string | number {
    if (typeof value === "string") {
        return `Processed string: ${value}`;
    } else {
        return value * 2; // Example processing for numbers
    }
}



interface MathOperations {
  (a: number, b: number): number;
}

const add: MathOperations = (a, b) => a + b;
const sub: MathOperations = (a, b) => a - b;  
const multiply: MathOperations = (a, b) => a * b;
const divide: MathOperations = (a, b) => a / b;

let result:number=add(5, 3);
result=sub(5, 3);
result=multiply(5, 3);
result=divide(5, 3);

console.log(greet("TypeScript"));
console.log(process("hello"));
console.log(process(10));

