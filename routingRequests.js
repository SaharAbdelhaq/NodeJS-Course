const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title> Welcome</title> <head>");
    res.write(
      '<body> <form action="/message" method="POST"> <input type="text" name="messege"><button type= "submit"> Go</button> </body>'
    );
    res.write("</html>");
    return res.end();
  }

  res.write("<html>");
  res.write("<body> Welcome </body>");
  res.write("</html>");
});

server.listen(8000);
