/*
 You have obj1 = {a: 1, b: 2} and obj2 = {b: 10, c: 3}. Merge them into a new obj3.
    Question: What happened to the value of b in the final result? Why?
*/

const obj1 = {a: 1, b: 2};
const obj2 = {b: 10, c: 3};
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
