// 1. Declare a variable `age` and assign it your age as a number.
let age = 33;

// 2. Declare a variable `name` and assign it your name as a string.
let name = "Elahe";

// 3. Declare a variable `isStudent` and assign it a boolean value.
let isStudent = true;

// 4. Print the values of all the variables.
console.log(age);
console.log(name);
console.log(isStudent);

// 5. Check the data type of each variable using `typeof`.
console.log(typeof age);        // number
console.log(typeof name);       // string
console.log(typeof isStudent);  // boolean

// 6. Create `birthYear` based on current age.
let birthYear = 2026 - age;
console.log(birthYear);

// 7. Declare `fullName` and concatenate your name and age.
let fullName = name + " " + age;
console.log(fullName);

// 8. Length of your favorite fruit string.
let favoriteFruit = "Mango";
console.log(favoriteFruit.length);

// 9. Declare `nullVariable` and assign null. Check type.
let nullVariable = null;
console.log(typeof nullVariable);  // object (JavaScript quirk)

// 10. Declare `undefinedVariable` without assigning a value.
let undefinedVariable;
console.log(typeof undefinedVariable); // undefined

// 11. Convert numeric string to number using parseInt().
let numericString = "123";
let convertedNumber = parseInt(numericString);
console.log(convertedNumber);
console.log(typeof convertedNumber); // number

// 12. Create `nanVariable` with NaN.
let nanVariable = NaN;
console.log(typeof nanVariable); // number (another JS quirk)

// 13. `infinityVariable` with Infinity.
let infinityVariable = Infinity;
console.log(typeof infinityVariable); // number

// 14. `negativeInfinityVariable` with -Infinity.
let negativeInfinityVariable = -Infinity;
console.log(typeof negativeInfinityVariable); // number