"use strict";
console.log("Hello, TypeScript!");
const greet = (name = "World") => {
    return `Hello, ${name}!`;
};
function process(value) {
    if (typeof value === "string") {
        return `Processed string: ${value}`;
    }
    else {
        return value * 2;
    }
}
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let result = add(5, 3);
result = sub(5, 3);
result = multiply(5, 3);
result = divide(5, 3);
console.log(greet("TypeScript"));
console.log(process("hello"));
console.log(process(10));
//# sourceMappingURL=index.js.map