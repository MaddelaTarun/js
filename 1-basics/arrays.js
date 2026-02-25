// Arrays -- BASICS
const arr = [1, 2, 3, 4, 5];
const arr2 = ["hero1", "hero2", "hero3"];
const arr3 = new Array(1, 2, 3, 4); // Alternative way to create an array (Heap)

console.log(arr[0]); // Accessing by index
console.log(arr.length); // Getting the total count

// Array Methods
arr.push(6);     // Adds 6 to the END
arr.pop();      // Removes the LAST element
arr.unshift(12); // Adds 12 to the START (Expensive operation for large arrays)
arr.shift();    // Removes the FIRST element

console.log(arr.includes(12)); // Returns Boolean (false)
console.log(arr.indexOf(9));   // Returns -1 because 9 is not in the array
console.log(arr.indexOf(2));   // Returns 1 (the index of the value 2)

const array = ["h", "e", "l", "l", "o"];
const newArr = array.join(""); // Converts Array to String: "hello"
console.log(newArr);

// --- Slice vs Splice ---
const myArr = [0, 1, 2, 3, 4, 5];
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); 
// SLICE: Starts at index 1, stops BEFORE index 3. 
// Original array is NOT modified.
console.log(myn1); // [1, 2]
console.log("B ", myArr); // [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3); 
// SPLICE: Starts at index 1 and REMOVES 3 elements.
// Original array IS modified (it loses those elements).
console.log("C ", myArr); // [0, 4, 5]
console.log(myn2); // [1, 2, 3]


// Arrays -- Intermediate

const heros = ["thor", "iron man", "hulk"];
const heros1 = ["superman", "flash", "batman"];

// heros.push(heros1); 
// Note: If uncommented, this pushes the entire array as ONE element [3], creating a nested array.

const concatArr = heros.concat(heros1); 
// Merges two arrays into a NEW array. Original arrays remain untouched.
console.log(concatArr);

const anothArr = [...heros, ...heros1]; 
// Spread Operator: "Shatters" the arrays and spreads elements into a new one. (Modern & Preferred)
console.log(anothArr);

const sample_arr = [1, 2, 3, [4, 5], [6, 7, [8, 9, 10], 11]];
console.log(sample_arr.flat(Infinity)); 
// Flattens nested arrays into a single array. 'Infinity' tells it to go as deep as needed.

console.log(Array.isArray("tarun")); 
// Checks if the input is an array. Returns false (it's a string).

console.log(Array.from("tarun")); 
// Converts an iterable (like a string) into an array: ["t", "a", "r", "u", "n"].

console.log(Array.from({name: "tarun"})); 
// Returns []. Why? Because JS doesn't know whether to make an array of keys or values. 
// You have to specify: Array.from(Object.keys(obj)) or Object.values(obj).

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); 
// Creates a new array instance from a variable number of arguments.
