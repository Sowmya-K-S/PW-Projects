// Function to validate a LinkedIn profile URL using regex
function isValidLinkedInProfile(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the URL against the regex
    return linkedinRegex.test(url);
}

// Example usage
const testUrls = [
    'https://www.linkedin.com/in/john-doe-123',
    'https://www.linkedin.com/in/johndoe',
    'https://www.linkedin.com/in/john_doe_1234567890',
    'https://www.linkedin.com/in/johndoe123456789012345678901234567890', // Too long
    'https://www.linkedin.com/in/john!doe', // Invalid character
    'https://www.linkedin.com/in/john', // Too short
    'http://www.linkedin.com/in/johndoe' // Wrong protocol
];

// Validate each URL and print the result
testUrls.forEach(url => {
    if (isValidLinkedInProfile(url)) {
        console.log(`The URL "${url}" is a valid LinkedIn profile URL.`);
    } else {
        console.log(`The URL "${url}" is not a valid LinkedIn profile URL.`);
    }
});
