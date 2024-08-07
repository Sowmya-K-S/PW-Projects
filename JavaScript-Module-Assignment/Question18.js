// Function to print all positive even numbers up to the specified number
function printEvenNumbers(maxNumber) {
    console.log(`Positive even numbers up to ${maxNumber}:`);
    for (let i = 2; i <= maxNumber; i += 2) {
        console.log(i);
    }
}

// Example usage
let inputNumber = 20; // Change this value to print even numbers up to a different number
printEvenNumbers(inputNumber);
