// Object Literals -- Basics

const mySym = Symbol("key1"); // Creating a unique identifier

const user = {
    name: "Tarun",
    "full name": "T",        // String key with a space (Must use quotes)
    [mySym]: "mykey1",       // Using a Symbol as a Key (Must use square brackets)
    age: 20,
    location: "Bangalore",
    mail: "sample@mail.com",
    isLoggedIn: true,
    prevLogin: ["Monday", "Tuesday", "Thursday"],
}

console.log(user.name);      // Dot notation: Simple and clean.
console.log(user["name"]);   // Bracket notation: More powerful.
console.log(user["full name"]); // Required for keys with spaces.

console.log(user.mySym);     // Output: undefined (Looking for a string key named "mySym")
console.log(user[mySym]);    // Output: "mykey1" (Accessing the actual Symbol key)

user["full name"] = "M Tarun";
// Object.freeze(user);      // If we did this, the object would become unchangeable.

user.greeting = function() {
    console.log(`Hello, ${this.name}`);
}

console.log(user.greeting); // Returns the function reference (the code)
user.greeting();              // Executes the function (Prints: Hello, Tarun)

// Singleton

const tinderUser1 = new Object(); // Singleton Object
const tinderUser2 = {} // Non-Singleton Object

tinderUser1.id = "123abc";
tinderUser1.name = "Sammy";
tinderUser1.isLoggedIn = false;

console.log(tinderUser1)
console.log(tinderUser2)

const anotherUser = {
    email: "some@gmail.com",
    fullname: {
	userFullName: {
	    firstName: "M",
	    lastName: "Tarun"
	}
    }
}

console.log(anotherUser["fullname"]);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = Object.assign(obj1,obj2);
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);
const obj5 = {...obj1,...obj2};
console.log(obj5);

const users = [
    {
	id: 1,
	email: "a@gmail.com"
    },
    {
	id: 2,
	email: "b@gmail.com"
    },
    {
	id: 3,
	email: "c@gmail.com"
    }
]

console.log(users[0].id);
console.log(users[0].email);
console.log(users[1].id);
console.log(users[1].email);

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));
console.log(tinderUser1.hasOwnProperty('isLogged'));
