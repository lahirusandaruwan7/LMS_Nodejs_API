const router = require("express").Router();
const bookService = require("../services/Book_service");

//View all books
router.get("", (req, res) => {
  res.send(bookService.getAllBooks());
});
//View singale book
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(bookService.getBook(id));
});
// Add New Book
router.post("",(req,res)=>{
  const title = req.body.title;
  const author = req.body.author;
  res.send(bookService.addBook(title,author));
});
//Burrow book
router.put("/:id/burrow",(req,res) =>{
  const id = req.params.id;
  const burrowedMemberId = req.body.burrowedMemberId;
    const burrowedDate = req.body.burrowedDate;
  res.send(bookService.burrowBook(id,burrowedMemberId,burrowedDate));
});
//Return book
router.put("/:id/return",(req,res) =>{
  const id = req.params.id;
  res.send(bookService.returnBook(id));
})
// Edit Book
router.put("/:id",(req,res)=>{
  const id = req.params.id;
  const title = req.body.title;
    const author = req.body.author;
  res.send(bookService.editBook(id,title,author ));
});
//Delete Book
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(bookService.deleteBook(id));
});

module.exports = router;
