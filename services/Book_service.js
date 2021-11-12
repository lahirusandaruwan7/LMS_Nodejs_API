const BOOKS = require("../data/Book_data");

let books = BOOKS;

const getAllBooks = () => {
  return books;
};
const getBook = (id) => {
  return books.find((book) => book.id === id);
};
const addBook = (title, author) => {
  const book = {
    id: Math.random().toString(16).slice(2),
    title,
    author,
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  };
  books.push(book);
  return book;
};
const burrowBook = (id, burrowedMemberId, burrowedDate) => {
  const bookIndex = books.findIndex((element) => element.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    isAvailable: false,
    burrowedMemberId,
    burrowedDate,
  };
  return books[bookIndex];
};
const returnBook = (id) => {
  const bookIndex = books.findIndex((element) => element.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  };
  return books[bookIndex];
};
const editBook = (id, title, author) => {
  const bookIndex = books.findIndex((element) => element.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    title,
    author,
  };
  return books[bookIndex];
};
const deleteBook = (id) => {
  books = books.filter((element) => element.id !== id);
  return books;
};

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  burrowBook,
  returnBook,
  editBook,
  deleteBook,
};
