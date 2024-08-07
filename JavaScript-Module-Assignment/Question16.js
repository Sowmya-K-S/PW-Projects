// Function to find and print the larger of two numbers
function printLargerNumber(num1, num2) {
    const larger = (num1 > num2) ? num1 : num2;
    console.log(`The larger number is ${larger}.`);
}

// Example usage
let number1 = 12; // Change these values to test different numbers
let number2 = 25;

printLargerNumber(number1, number2);
