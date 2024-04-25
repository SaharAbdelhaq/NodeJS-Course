const userModel = require("../models/userModel");

async function createUser(req, res) {
  const userData = req.body;
  try {
    const user = await userModel.createUser(userData);
    res.status(201).json(user);
  } catch (err) {
    console("Error creating user" + err);
    throw err;
  }
}

module.exports = createUser;
