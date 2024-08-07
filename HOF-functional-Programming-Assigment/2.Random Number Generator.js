// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to handle the delay, time remaining messages, and random number generation
function delayedRandomNumber(delay) {
    let remainingTime = delay / 1000; // Convert milliseconds to seconds

    // Display a message every second indicating the time remaining
    const intervalId = setInterval(() => {
        console.log(`Time remaining: ${remainingTime} seconds`);
        remainingTime -= 1;
        if (remainingTime < 0) {
            clearInterval(intervalId); // Clear the interval when time is up
        }
    }, 1000); // 1000 milliseconds = 1 second

    // Generate a random number after the delay
    setTimeout(() => {
        const randomNumber = generateRandomNumber(1, 100); // Random number between 1 and 100
        console.log(`Generated random number: ${randomNumber}`);
    }, delay);
}

// Example usage
const delay = 3000; // 3000 milliseconds = 3 seconds
delayedRandomNumber(delay);
