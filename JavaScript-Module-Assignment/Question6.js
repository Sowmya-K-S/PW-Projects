// Function to print multiplication table of a specified number
function printMultiplicationTable(number) {
    console.log(`Multiplication Table for ${number}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Specify the number for which you want the multiplication table
let number = 5;
printMultiplicationTable(number);
