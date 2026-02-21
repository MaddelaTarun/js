// Dates

let myDate = new Date(); // Creates a new Date object representing the current moment.

console.log(myDate); // Raw output (often hard to read).
console.log(myDate.toString()); // Full date and time string including Timezone.
console.log(myDate.toDateString()); // Just the Date (e.g., "Sat Feb 21 2026").
console.log(myDate.toLocaleString()); // Formatted based on your local settings (12-hour/24-hour).
console.log(typeof myDate); // Returns "object" because Dates are non-primitive.

// Note: When using (Year, Month, Day), Months are 0-indexed (0 = Jan, 1 = Feb).
let myCreatedDate = new Date(2026, 0, 23); // Jan 23, 2026.
let myCreatedDate1 = new Date(2026, 0, 23, 5, 3); // Jan 23, 2026, at 5:03 AM.

// Note: When using "YYYY-MM-DD" strings, Months follow the calendar (01 = Jan).
let myCreatedDate2 = new Date("2026-00-23"); // "00" is invalid! This will return "Invalid Date".
let myCreatedDate3 = new Date("2026-01-23"); // Jan 23, 2026.

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now(); // Returns the milliseconds since Jan 1, 1970 (Epoch).
console.log(myCreatedDate.getTime()); // Returns the millisecond value of that specific date for easy comparison.
console.log(Math.floor(Date.now()/1000)); // Converts milliseconds to seconds (useful for APIs).
