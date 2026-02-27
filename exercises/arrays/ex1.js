/*
 Given const data = [10, 20, 30, 40, 50, 60], use slice to get the middle two elements and splice to remove the last element. Log the original array after each step to see which one changed it
 */

const data = [10, 20, 30, 40, 50, 60]
result1 = data.slice(2,4);
console.log(result1);

result2 = data.splice(5,1);
console.log(result2);
