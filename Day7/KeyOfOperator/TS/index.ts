// The keyof operator in TypeScript is a type operator that takes an object type and produces a string or numeric literal union type of its keys. It's extremely useful for type-safe property access and creating reusable, generic types.

interface Person{
  name: string;
  age: number;
  isEmployed: boolean;
}

type PersonKeys = keyof Person; // "name" | "age" | "isEmployed"

interface Employee extends Person {
  employeeId: number;
}

type EmployeeKeys = keyof Employee; // "name" | "age" | "isEmployed" | "employeeId"
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
} 

// Example usage:
const person: Person = {
  name: "Alice",
  age: 30,
  isEmployed: true
};

const personName = getProperty(person, "name"); // Type is string
const personAge = getProperty(person, "age"); // Type is number
const personIsEmployed = getProperty(person, "isEmployed"); // Type is boolean