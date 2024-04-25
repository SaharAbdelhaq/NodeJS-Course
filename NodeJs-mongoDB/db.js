const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;

exports.mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://AbdallahDereia:JLiq00ZXmUOuNl4v@cluster0.7ok67.mongodb.net/NodeJs_Course?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getdb = () => {
  if (_db) {
    return _db;
  }
  throw "no DB";
};
