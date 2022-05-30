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

    payBook(bookName) {
        const book = this.findBookByName(bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const book = this.findBookByName(bookName);

        if (!book) {
            throw new Error('The book, you\'re looking for, is not found.');
        }

        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        const bookIndex = this.books.indexOf(book);
        this.books.splice(bookIndex, 1);

        return `${bookName} remove from the collection.`;
    }

   
    findBookByName(name) {
        return this.books.find(b => b.bookName == name);
    }

    checkIfPaid(book) {
        return book.payed ? 'Has Paid' : 'Not Paid';
    }
}