// Function to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to handle the delay and string reversal
function delayedReverse(input) {
    console.log('Reversing the string after a delay of 2 seconds...');
    
    setTimeout(() => {
        const reversed = reverseString(input);
        console.log(`Reversed string: ${reversed}`);
    }, 2000); 
}

// Example usage
let input = 'Hello, World!'; // Change this value to test with different strings
delayedReverse(input);
