const userHandler = (req, res) => {
  const url = req.url;
  const method = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>  Welcome  <head>");
    res.write(
      ' <form action="/create-user" method="post"> <input type="text" name="username"> <button type="submit"> go </button></form>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<body> Welcome Users  </body>");
    res.write(
      "<ul><li>user1</li> <li>user2</li> <li>user3</li> <li>user4</li> </ul>"
    );
    res.write("</html>");
    return res.end();
  }
  // Send a HTML response
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
};

module.exports = {
  users: userHandler,
};
