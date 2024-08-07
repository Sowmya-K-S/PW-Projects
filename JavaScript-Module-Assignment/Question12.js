// Function to check divisibility and print the appropriate message
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

// Example usage
let inputNumber = 15; // Change this value to test different cases
fizzBuzz(inputNumber);
