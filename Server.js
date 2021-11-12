const express = require("express");
const bookRoutes = require("./routes/book_routes");
const memberRoutes = require("./routes/member_routes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);

app.use("/book", bookRoutes);
app.use("/member", memberRoutes);



