// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

// Define the length and width of the rectangle
let length = 10;
let width = 5;

// Calculate the perimeter
let perimeter = calculatePerimeter(length, width);

// Print the result to the console
console.log(`The perimeter of the rectangle with length ${length} and width ${width} is ${perimeter}.`);
