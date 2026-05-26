// 1. isEven
function isEven(num) {
  return num % 2 === 0;
}

// 2. printRange
function printRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

// 4. countOccurrences
function countOccurrences(arr, target) {
  let count = 0;
  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

// 5. reverseString
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 6. isPalindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// 7. capitalizeFirstLetter
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 8. FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 9. Sum 1–10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 10. Even/Odd 0–5
for (let i = 0; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i + " Even");
  } else {
    console.log(i + " Odd");
  }
}

// 11. Multiplication tables 1–10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 12. Names starting with J
const names = ["John", "Mary", "James", "Sara", "Jack", "Liam"];

for (let name of names) {
  if (name.startsWith("J")) {
    console.log("Hello, " + name);
  } else {
    console.log("Goodbye, " + name);
  }
}

// 14. Even square, odd cube
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i * i);
  } else {
    console.log(i * i * i);
  }
}

// 15. Prompt user 5 times (browser only)
let total = 0;
for (let i = 1; i <= 5; i++) {
  let num = Number(prompt("Enter a number:"));
  total += num;
}
console.log("Total sum:", total);

// 16. Random numbers until > 5
let num = 0;
while (num <= 5) {
  num = Math.floor(Math.random() * 10) + 1;
}
console.log("Final number:", num);