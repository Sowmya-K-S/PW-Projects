// 1. Number: numeric data
let age = 25;
console.log(typeof age); // number

// 2. String: textual data
let name = "John Doe";
console.log(typeof name); // string

// 3. Boolean: true/false
let isStudent = true;
console.log(typeof isStudent); // boolean

// 4. Undefined: uninitialized variables
let score;
console.log(typeof score); // undefined

// 5. Null: intentional absence of any object value
let car = null;
console.log(typeof car); // object (this is a quirk in JavaScript, typeof null returns "object")

// 6. Object: collection of key-value pairs
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
};
console.log(typeof person); // object

// 7. Symbol: unique and immutable data type
const uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol

// 8. BigInt: for integers larger than 2^53 - 1
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

// Logging all values and their types
console.log('age:', age, '->', typeof age);
console.log('name:', name, '->', typeof name);
console.log('isStudent:', isStudent, '->', typeof isStudent);
console.log('score:', score, '->', typeof score);
console.log('car:', car, '->', typeof car);
console.log('person:', person, '->', typeof person);
console.log('uniqueId:', uniqueId, '->', typeof uniqueId);
console.log('bigNumber:', bigNumber, '->', typeof bigNumber);
