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

    getStatistics(bookAuthor) {
        let result = [];

        if (bookAuthor) {
            const book = this.findBookByAuthor(bookAuthor);

            if (!book) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            const bookPaid = book.payed ? 'Has Paid' : 'Not Paid';
            return `${book.bookName} == ${book.bookAuthor} - ${bookPaid}.`;

        } else {
            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`);

            const sortedBooks = this.books.sort((b1, b2) => b1.bookName.localeCompare(b2.bookName));

            sortedBooks.forEach((book) => {
                const bookPaid = book.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${book.bookName} == ${book.bookAuthor} - ${bookPaid}.`);
            });
        }

        return result.join('\n');
    }

    findBookByName(name) {
        return this.books.find(b => b.bookName == name);
    }

    findBookByAuthor(author) {
        return this.books.find(b => b.bookAuthor == author);
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());