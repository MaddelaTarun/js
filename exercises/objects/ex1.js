/*
 Create a Symbol called internalId. Create an object user with your name. Assign the internalId symbol to the user object with any value. Log the object and ensure the key shows up correctly as a Symbol.
 */

const internalId = Symbol();

const t = {
    [internalId]: "any value"
}

console.log(t);
console.log(typeof t[internalId]);
console.log(Object.getOwnPropertySymbols(t));
