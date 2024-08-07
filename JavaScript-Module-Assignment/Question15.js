// Function to determine if a number is positive, negative, or zero using a ternary operator
function checkNumber(number) {
    const result = (number > 0) ? 'The number is positive.' :
                   (number < 0) ? 'The number is negative.' :
                   'The number is zero.';
    
    console.log(result);
}

// Example usage
let inputNumber = -5; // Change this value to test different numbers
checkNumber(inputNumber);
