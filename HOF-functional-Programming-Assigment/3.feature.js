// Object containing items and their prices in US Dollars
const items = {
    "Apple": 1.5,
    "Banana": 0.5,
    "Orange": 1.0,
    "Mango": 2.0
};

// Function to convert USD to INR
function convertToINR(pricesInUSD, exchangeRate) {
    // Create a new object with converted prices using map function
    const pricesInINR = Object.fromEntries(
        Object.entries(pricesInUSD).map(([item, price]) => [item, price * exchangeRate])
    );
    
    return pricesInINR;
}

// Exchange rate from USD to INR
const exchangeRate = 80;

// Convert prices
const convertedPrices = convertToINR(items, exchangeRate);

// Print the converted prices
console.log("Prices in Indian Rupees:");
console.log(convertedPrices);
