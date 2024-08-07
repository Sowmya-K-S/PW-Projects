// Function to validate a URL using regex
function isValidURL(url) {
    // Regular expression to match valid URLs
    const urlRegex = /^https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    // Test the URL against the regex
    return urlRegex.test(url);
}

// Example usage
const inputURL = 'https://example.com'; // Change this value to test different URLs

if (isValidURL(inputURL)) {
    console.log('The URL is valid.');
} else {
    console.log('The URL is not valid.');
}
