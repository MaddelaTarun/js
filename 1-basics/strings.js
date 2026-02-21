const gameName = new String("Hello World");
console.log(gameName[0]); // Accesses the character at the 0th index (key-value pair style).
console.log(gameName.__proto__); // Accesses the String prototype object to see all available methods.

console.log(gameName.length); // Property that returns the total count of characters (11).
console.log(gameName.toUpperCase()); // Returns a NEW string in all caps; original string remains unchanged.
console.log(gameName.charAt(2)); // Returns the character at index 2 ('l').
console.log(gameName.indexOf('o')); // Finds the FIRST occurrence of 'o' and returns its index (4).

let newStr = gameName.substring(0,4); 
// Extracts from index 0 to 3 (4 is excluded). Negatives are treated as 0.
console.log(newStr);

newStr = gameName.slice(-11,4); 
// Similar to substring but accepts negatives. Math: (Length 11 - 11 = 0). Result: index 0 to 4.
console.log(newStr);

const newString = "      t      ";
console.log(newString);
console.log(newString.trim()); // Removes whitespace from both the start and the end of the string.

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url);
console.log(url.replace('%20','-')); // Searches for the first match of '%20' and replaces it with '-'.

console.log(url.includes('hello')); // Returns a boolean (true/false) checking if the substring exists.

const sampleString = new String("hello-world-good-morning-afternoon-evening-night");
console.log(sampleString.split("-")); // Splits the string into an ARRAY using '-' as the separator (delimiter).
