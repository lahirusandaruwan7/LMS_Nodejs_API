const http = require("http");

const server = http.createServer((req, res) => {
  //requst,resonse
  console.log("Hello from Sever");

  res.setHeader("Content-Type", "text/plain");
  console.log(req.url);
  
  switch (req.url) {
    case "/home":
      res.write("Home Page data");
      res.end();
      break;
    case "/about":
      res.write("About Page Data");
      res.end();
      break;
    default:
      res.write("404 not found")
      res.end();
      break;
  }
  /*  res.setHeader("Content-Type", "text/html");
  
  res.write("<h1>hello response</h1>");
  res.write("<h1>hlo response</h1>"); */

  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Sever Running on Port 3000");
});
