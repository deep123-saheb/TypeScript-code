"use strict";
let dir = "down";
let config = {
    size: 'medium',
    isOpen: true,
    direction: 'up'
};
console.log(dir);
console.log(config);
let scores = {
    alice: 90,
    bob: 85,
    charlie: 92
};
console.log(scores);
console.log(scores['alice']);
scores['dave'] = 88;
console.log(scores['dave']);
console.log(scores);
let appStates = {
    user: 'loading',
    products: 'success',
    orders: 'error'
};
console.log(appStates);
console.log(appStates['user']);
appStates['reviews'] = 'success';
console.log(appStates['reviews']);
console.log(appStates);
//# sourceMappingURL=index.js.map