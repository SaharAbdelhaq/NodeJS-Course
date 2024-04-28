const { getdb } = require("../db");
const { ObjectId } = require("mongodb");

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

  static fetchAll() {
    const db = getdb();
    return db
      .collection("users")
      .find({})
      .toArray((err, result) => {
        console.log(result);
      });
  }

  static findById(userId) {
    const db = getdb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((users) => {
        console.log(users);
        return users;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(userId, updatedUser) {
    const db = getdb();
    return db
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: updatedUser });
  }

  static delete(userId) {
    const db = getdb();
    return db.collection("users").deleteOne({ _id: new ObjectId(userId) });
  }
}

module.exports = User;
