let a = 1;
// a = "hello"; // No Error: Type 'string' is assignable to type 'number'.
let b: number = 2;
console.log(b); // Output: 1
//b = "hello"; // Error: Type 'string' is not assignable to type 'number'.

function add(x: number, y: number): number {
    return x + y;
}
a=1;
console.log(a)
const result: number = add(1, 2);
console.log(result); // Output: 3