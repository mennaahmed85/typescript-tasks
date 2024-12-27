import { Book } from "./interfaces/interface";

/*
### **Library Management System**

**Concepts**: Objects, Array Methods, Functions, Object Methods

### **Problem Description**:

You are tasked with building a **library management system** where books are stored as objects in an array. Each book object has the properties: `title`, `author`, `yearPublished`, and `availableCopies`. Your tasks include:

1. **Add a new book** to the library.
2. **Borrow a book** from the library, which decreases the number of available copies.
3. **Return a book** to the library, which increases the number of available copies.
4. **Find books by author**.
5. Implement an object method in the book to **get a brief description** of the book, including its title and author.
*/

const libraryManagementSystem: Book[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    availableCopies: 5,
    getBriefDescription,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    availableCopies: 3,
    getBriefDescription,
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    availableCopies: 7,
    getBriefDescription,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    availableCopies: 4,
    getBriefDescription,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    yearPublished: 1851,
    availableCopies: 2,
    getBriefDescription,
  },
];

//Add a new book to the library.
function addElement(el: Book): void {
  libraryManagementSystem.push(el);
}

//Borrow a book from the library, which decreases the number of available copies.
function borrowBook(title: string): void {
  const book = libraryManagementSystem.find((el) => el.title === title);
  if (book) {
    if (book.availableCopies >= 1) book.availableCopies--;
    else {
      console.log("No copies available.");
      return;
    }
  } else {
    console.log("There is no book with this name.");
    return;
  }
}

//Return a book to the library, which increases the number of available copies.
function ReturnBook(title: string): void {
  const book = libraryManagementSystem.find((el) => el.title === title);
  if (book) {
    book.availableCopies++;
  } else {
    console.log("There is no book with this name.");
  }
}

//Find books by author
function Author(author: string) {
  const book = libraryManagementSystem.find((el) => el.author === author);
  if (book) {
    return book;
  } else {
    console.log("There is no book with this author name.");
    return [];
  }
}

//Implement an object method in the book to get a brief description of the book, including its title and author.
function getBriefDescription(this: Book) {
  console.log(
    `The book "${this.title}" authored by ${this.author}, was published in ${this.yearPublished}, and there are ${this.availableCopies} copies available.`
  );
}
