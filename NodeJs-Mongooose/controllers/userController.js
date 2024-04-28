const User = require("../models/userModel");

exports.createUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = new User({ username: username, password: password })
    .save()
    .then((result) => {
      console.log("added");
      res.send(result);
    });
};

exports.getUsers = (req, res) => {
  User.find()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      console.log("Founded");
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const newusername = req.body.username;
  const newpassword = req.body.password;

  User.findById(id)
    .then((user) => {
      user.username = newusername;
      user.password = newpassword;
      user.save();
      res.status(200).send(user);
    })
    .then((result) => {
      console.log("updated successfully");
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      user.deleteOne().then((result) => {
        user.save();
        res.status(204).send();
      });
    })
    .then((result) => {
      console.log("deleted successfully");
    });
};
