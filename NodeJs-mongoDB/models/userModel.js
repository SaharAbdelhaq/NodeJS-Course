const { getdb } = require("../db");

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  save() {
    const db = getdb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
