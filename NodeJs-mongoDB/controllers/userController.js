const User = require("../models/userModel");

exports.createUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //
  const user = new User(username, password);
  user
    .save()
    .then((result) => {
      console.log(result);
      console.log("user created");
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
