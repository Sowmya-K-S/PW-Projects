// Function to find and print the largest of two numbers
function printLargestNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is larger than ${num1}`);
    } else {
        console.log(`${num1} and ${num2} are equal`);
    }
}

// Define two numbers
let number1 = 15;
let number2 = 20;

// Call the function to find and print the largest number
printLargestNumber(number1, number2);
