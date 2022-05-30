class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        const book = {
            bookName,
            bookAuthor,
            payed: false
        };

        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
}