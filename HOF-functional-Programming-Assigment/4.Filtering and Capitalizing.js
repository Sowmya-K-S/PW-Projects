// Sample list of books
const books = [
    { title: 'Book One', author: 'author one', publicationYear: 2005 },
    { title: 'Book Two', author: 'author two', publicationYear: 2012 },
    { title: 'Book Three', author: 'author three', publicationYear: 2018 },
    { title: 'Book Four', author: 'author four', publicationYear: 2009 }
];

// Function to capitalize author names
function capitalizeAuthor(author) {
    return author.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
}

// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalizeBooks(books) {
    return books
        .filter(book => book.publicationYear >= 2010)
        .map(book => ({
            title: book.title,
            author: capitalizeAuthor(book.author),
            publicationYear: book.publicationYear
        }));
}

// Process the books
const updatedBooks = filterAndCapitalizeBooks(books);

// Print the result
console.log('Filtered and updated list of books:');
console.log(updatedBooks);
