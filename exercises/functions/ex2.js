// Write a function called handleObject that takes any object and prints: "The price of [courseName] is [price]".
// Bonus: Use Destructuring inside the function arguments to make it cleaner

/*
 * APPROACH 1: The "Standard" Way 
 * ---------------------------------------------------------
 * - We pass the WHOLE object as a package named 'sampleObject'.
 * - Inside the function, we have to use "dot notation" (sampleObject.price) 
 * to reach inside the package.
 * - This is okay, but it gets repetitive if you use 'sampleObject' 10 times.
*/


// function handleObject(sampleObject) {
//     return `The price of ${sampleObject.courseName} is ${sampleObject.price}`
// }

/**
 * APPROACH 2: The "Destructured" Way (Your Active Version)
 * ---------------------------------------------------------
 * WHY THIS IS BETTER:
 * 1. CLEANER: You don't have to keep typing "sampleObject." over and over.
 * 2. READABLE: Anyone reading the first line knows EXACTLY what data this 
 * function needs (it needs 'courseName' and 'price').
 * 3. PROFESSIONAL: This is the standard in modern JS and React.
 * * THE RULE: The names inside { } MUST match the keys in the object exactly.
 */
function handleObject({ courseName, price }) {
    // Because we "unpacked" the object in the parentheses, 
    // we can use the variables directly here.
    return `The price of ${courseName} is ${price}`;
}

// THE DATA: An array of objects (Think of this as your Database)
const courses = [
    {
        id: 1,
        courseName: "WebDev",
        teacher: "Angela Yu",
        price: "550 INR"
    },
    {
        id: 2,
        courseName: "JS",
        teacher: "Hitesh",
        price: "Free"
    },
    {
        id: 3,
        courseName: "C",
        teacher: "BroCode",
        price: "Free"
    }
];

/**
 * EXECUTION:
 * We pass 'courses[0]', which is the ENTIRE first object.
 * The function receives that object, looks for 'courseName' and 'price', 
 * and ignores the 'id' and 'teacher' because we didn't ask for them.
 */
console.log(handleObject(courses[0]));
