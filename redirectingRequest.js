const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title> Welcome</title> <head>");
    res.write(
      '<body> <form action="/message" method="POST"> <input type="text" name="messege"><button type= "submit"> Go</button> </body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Hiii");
    fs.statusCode = 200;
  }
});

server.listen(8000);
