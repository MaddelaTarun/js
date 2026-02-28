/*
 * You receive this messy API response: [1, [2, 3], [[4, 5], 6]]. Turn it into a single flat array of numbers using only one method.
 * */

let apiResponse = [1, [2, 3], [[4, 5], 6]];
let result = apiResponse.flat(Infinity);
console.log(result);
