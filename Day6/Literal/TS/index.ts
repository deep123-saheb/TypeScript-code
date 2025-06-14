//Literal Types

type Direction = 'up' | 'down' | 'left' | 'right';

interface ModalConfig{
  size: 'small' | 'medium' | 'large';
  isOpen: boolean;
  direction: Direction;
}

let dir:Direction="down";

//dir="bohs"//error

let config: ModalConfig = {
  size: 'medium',
  isOpen: true,
  direction: 'up'
};

console.log(dir)
console.log(config);

//Note:index signatures

// Index signature allows an object to have arbitrary property keys of a certain type
// Useful when you don't know all property names in advance

interface StringNumberMap{
  [key: string]: number; // Index signature
}
let scores: StringNumberMap = {
  alice: 90,
  bob: 85,
  charlie: 92
};

console.log(scores);
// Accessing properties using index signature
console.log(scores['alice']); // 90

// Adding new properties dynamically
scores['dave'] = 88;
console.log(scores['dave']); // 88
console.log(scores);

interface ModelStates{
  [key: string]: 'loading' | 'success' | 'error'; // Index signature with specific literal types
}

let appStates: ModelStates = {
  user: 'loading',
  products: 'success',
  orders: 'error'
};
console.log(appStates);
// Accessing properties using index signature
console.log(appStates['user']); // 'loading'
// Adding new properties dynamically
appStates['reviews'] = 'success';
console.log(appStates['reviews']); // 'success'
console.log(appStates);



