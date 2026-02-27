// Functions

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result; // Value is passed back to the caller
}

let result = addTwoNumbers(3, 4); 
console.log(result); // Output: 7

function loginUserMessage(username) {
    // Professional Tip: (username === undefined) is the same as (!username)
    if(!username) {
        console.log("Please enter the username");
        return; // Exits the function early so the next line doesn't run
    } 
    return `${username} just logged in!`;
}

console.log(loginUserMessage("T")); // "T just logged in!"
console.log(loginUserMessage());    // Logs "Please enter..." and returns undefined
