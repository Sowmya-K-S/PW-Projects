// Function to check if the number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log(`${number} is zero.`);
    }
}

// Example usage
let inputNumber = -5; // Change this value to test different numbers
checkNumber(inputNumber);
