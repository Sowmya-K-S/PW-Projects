// Function to generate and print the multiplication table for a given number
function generateMultiplicationTable(number) {
    console.log(`Multiplication Table for ${number}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example usage
let inputNumber = 7; // Change this value to generate the table for a different number
generateMultiplicationTable(inputNumber);
