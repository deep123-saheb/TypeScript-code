"use strict";
let numbers = [1, 2, 3, 4, 5];
let strings = ['a', 'b', 'c', 'd', 'e'];
let mixed = [1, 'a', 2, 'b', 3];
numbers.forEach(num => console.log(num.valueOf()));
strings.forEach(str => console.log(str.toUpperCase()));
mixed.forEach(item => console.log(item));
let tuple = [1, 'hello', true];
console.log(`Tuple: ${tuple[0]}, ${tuple[1]}, ${tuple[2]}`);
let coordinate3D = [10, 20, 30];
console.log(`3D Coordinate: ${coordinate3D[0]}, ${coordinate3D[1]}, ${coordinate3D[2]}`);
let userData = ['Alice', 25, true];
console.log(`User Data: ${userData[0]}, ${userData[1]}, ${userData[2]}`);
let response = [200, 'OK'];
console.log(`Response: ${response[0]}, ${response[1]}`);
var color;
(function (color) {
    color["Red"] = "Red";
    color["Green"] = "Green";
    color["Blue"] = "Blue";
})(color || (color = {}));
var appDetails;
(function (appDetails) {
    appDetails["appName"] = "MyApp";
    appDetails["version"] = "1.0.0";
    appDetails["author"] = "John Doe";
})(appDetails || (appDetails = {}));
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
let favoriteColor = color.Green;
console.log(`Favorite Color: ${favoriteColor}`);
let appInfo = appDetails.appName;
console.log(`App Name: ${appInfo}`);
let appVersion = appDetails.version;
console.log(`App Version: ${appVersion}`);
let medium = 1;
let large = 2;
let small = 0;
let size = Size.medium;
console.log(`Size: ${size}`);
let unknownVar = 'This can be anything';
function testUnknownType(input) {
    if (typeof input === 'string') {
        console.log('Input is a string:', input.toUpperCase());
    }
    else if (typeof input === 'number') {
        console.log('Input is a number:', input.toFixed(2));
    }
    else if (typeof input === 'boolean') {
        console.log('Input is a boolean:', input ? 'True' : 'False');
    }
    else {
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
let inferredNumber = 42;
let inferredString = 'Hello, TypeScript!';
let inferredArray = [1, 2, 3];
let someValue = 'This is a string';
let stringLength = someValue.length;
let anotherStringLength = someValue.length;
function printId(id) {
    if (typeof id === 'string') {
        console.log(`String ID: ${id.toUpperCase()}`);
    }
    else {
        console.log(`Number ID: ${id.toFixed(2)}`);
    }
}
printId(101);
printId('abc123');
let id;
id = 123;
id = 'abc';
console.log(`ID: ${id}`);
let user1 = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    age: 30,
    role: 'admin'
};
let user2 = {
    id: '2',
    name: 'Bob',
    email: 'bob@example.com',
    age: 25
};
console.log(`User: ${user1}`);
console.log(`User: ${user2}`);
let customer1 = {
    id: Math.floor(Math.random() * 1000),
    name: 'Laptop',
    price: 1000,
    orderId: 101,
    quantity: 2,
    customer: {
        id: Math.floor(Math.random() * 1000),
        name: 'Alice',
        email: 'alice@example.com'
    }
};
console.log(`Order with Customer: ${JSON.stringify(customer1)}`);
//# sourceMappingURL=index.js.map