// Stack (Primitive) and Heap (Non-Primitive) Memory

let myName = "t";
let name2 = myName; // STACK: A brand new copy of the value "t" is created for name2.
name2 = "tt";       // Changing name2 does NOT affect myName; they are independent.
console.log(myName);
console.log(name2);

let userOne = {
    email: "sample@mail.com",
    upi: "upi@bank"
} 
// HEAP: The object is stored in the Heap. 
// userOne (in the Stack) only holds the "memory address" to that object.

let userTwo = userOne; 
// REFERENCE: userTwo is NOT a copy of the object. 
// It is a copy of the "memory address." Both now point to the same object.

console.log(userTwo.email);

userTwo.email = "idk.mail.com" 
// MUTATION: Changing the object via userTwo affects userOne 
// because they are looking at the exact same data in the Heap.

console.log(userTwo.email);
