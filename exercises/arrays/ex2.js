/*
Take the string "JavaScript is amazing". Convert it into an array of words, join them with a hyphen (-), and make the whole thing lowercase. (Expected: "javascript-is-amazing")
 */

let string = "JavaScript is amazing";
// console.log(string.replace(' ','-'));
let arrWords = string.split(" ");
// console.log(arrWords);
let combined = arrWords.join('-');
console.log(combined.toLowerCase());

