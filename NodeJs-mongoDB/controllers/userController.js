const User = require("../models/userModel");

exports.createUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

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

exports.getUsers = (req, res) => {
  User.fetchAll()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserById = (req, res) => {
  const _id = req.params._id;
  User.findById(_id)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateUser = (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;
  const _id = req.body._id;

  const updatedUser = {
    username: newUsername,
    password: newPassword,
  };
  User.update(_id, updatedUser);

  return res.status(201).json({
    message: "success",
  });
};

exports.deleteUser = (req, res) => {
  const _id = req.params._id;
  User.delete(_id);
  res.status(204).json({ message: "Deleted" });
};
