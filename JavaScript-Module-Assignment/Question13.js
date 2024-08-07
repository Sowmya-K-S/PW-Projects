// Function to get the month of the year based on the number using a switch statement
function getMonth(number) {
    let month;
    switch (number) {
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
        default:
            console.log('Invalid number. Please enter a number between 1 and 12.');
            return;
    }
    console.log(`The month corresponding to number ${number} is ${month}.`);
}

// Example usage
let inputNumber = 4; // Change this value to test different numbers
getMonth(inputNumber);
