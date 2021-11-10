const express = require("express");
const server = express();

server.listen(3000, () => {
  console.log("Sever Running on Port 3000");
});

let members = require('./Member_data');
let books = require('./Book_data');

server.use(express.urlencoded({ extended: true }));
server.use(express.json()); 

/* server.get("/home", (req, res) => {
  res.type("txt");
  res.send("Home page data");
});

server.get("/about",(req,res) => {
  res.type("txt");
  res.send("About Page Data");
});
//Get Or Post We don't Know // order is keep in mind if oreder chane always come 404 page
server.use((req,res)=>{
  res.type("txt");
  res.send("404 not found");
}); */
                                        /*****************************************
                                                          
                                                            Boooks
                                                          
                                        *******************************************/
//creat Json Objects inside Array


// /book: View all books
server.get("/book", (req, res) => {
  res.send(books);
});
// /book/1: View book 1
// /book/:id
server.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((element) => element.id === id);
  res.send(book);
});
// /book : Post Create book
// title, author
server.post("/book", (req, res) => {
  //console.log(req.body);
  //const { title, author } = req.body; // ES6 Destucturing
  const title = req.body.title;
  const author = req.body.author;

  const book = {
    id: Math.random().toString(16).slice(2),
    title,
    author,
    isAvailable: true,
    burrowedMemberId: "",
    burrowedDate: "",
  };
  books.push(book);
  res.send(book);
});
// /book/:id/burrow: Burrow book
// /book/1/burrow
//burrowedMemberId,burrowedDate
server.put("/book/:id/burrow", (req, res) => {
  const id = req.params.id;
  //const {burrowedMemberId,burrowedDate} = req.body;
  const burrowedMemberId = req.body.burrowedMemberId;
  const burrowedDate = req.body.burrowedDate;
  //console.log(id, burrowedMemberId, burrowedDate);

  const bookIndex = books.findIndex((element) => element.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    isAvailable: false,
    burrowedMemberId,
    burrowedDate,
  };
  res.send(books[bookIndex]);
});
// /book/:id/return: Return book
// /book/1/return

server.put("/book/:id/return", (req, res) => {
  const id = req.params.id;
  const bookindex = books.findIndex((element) => element.id === id);
  console.log(bookindex);
  books[bookindex] = {
    ...books[bookindex],
    isAvailable: true,
    burrowedDate: "",
    burrowedMemberId: "",
  };
  res.send(books[bookindex]);
  console.log(books);
});

// /book/:id Put:  Edit Book
// title,author
server.put("/book/:id", (req, res) => {
  const id = req.params.id;
  //const { title, author } = req.body; // ES6 Destucturing
  const title = req.body.title;
  const author = req.body.author;
  const bookIndex = books.findIndex((element) => element.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    title,
    author,
  };
  res.send(books[bookIndex]);
});

// /book/:id Delete: Delete Book
// /book/1
server.delete("/book/:id", (req, res) => {
  const id = req.params.id;
  books = books.filter((element) => element.id !== id);
});
                                      /*****************************************
                                                          
                                                            Member
                                                          
                                      *******************************************/

// /members: View all Members
server.get("/members", (req, res) => {
  res.send(members);
});
// /members:id View single member
// /members/1

server.get("/members/:id", (req, res) => {
  id = req.params.id;
  const member = members.find((element) => element.id === id);
  res.send(member);
});
// /member
// nic firstName middleName lastName contactNumber address  userType
server.post("/member", (req, res) => {
  const nic = req.body.nic;
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const contactNumber = req.body.contactNumber;
  const address = req.body.address;
  const userType = req.body.userType;

  const member = {
    id: Math.random().toString(16).slice(2),
    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  };
  members.push(member);
  res.send(member);
});

// /member/:id Edit Member
// /member/1 edit member

server.put("/member/:id", (req, res) => {
  // Ask How to edit first name,moddle name only
  const id = req.params.id;
  console.log(id);
  const nic = req.body.nic;
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const contactNumber = req.body.contactNumber;
  const address = req.body.address;
  const userType = req.body.userType;

  const memberIndex = members.findIndex((element) => element.id === id);
  members[memberIndex] = {
    ...members[memberIndex],

    nic,
    firstName,
    middleName,
    lastName,
    contactNumber,
    address,
    userType,
  };
  res.send(members[memberIndex]);
});

// /member/:id Delete Member
// /member/1

server.delete("/member/:id", (req, res) => {
  const id = req.params.id;
  members = members.filter((element) => element.id != id);
  res.send(members);
});
