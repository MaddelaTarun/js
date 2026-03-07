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

// Functions -- Continued

function calculatePrice(val1,val2,...num1) {
    return num1;
}

console.log(calculatePrice(200,400,500,700));


function calculatedPrice(...num1) {
    return num1;
}

console.log(calculatedPrice(200,400,500,700));

const user = {
    username: "Tarun",
    age: 20
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username}, age is ${anyObject.age}`);
}

handleObject(user);

handleObject({
    username: "T",
    age: 20
})

const newArray = [10,20,40];

function returnSecVal(getArray) {
    return getArray[0];
}

console.log(returnSecVal(newArray));
