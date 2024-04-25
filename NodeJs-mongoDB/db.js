const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "testing-db";

async function connecetToDatabase() {
  try {
    const client = new MongoClient(uri, {
      userNewUrlParser: true,
      useUndefiedTopology: true,
    });
    await client.connect();
    console.log("connected to MongoDB");
    const database = client.db(dbName);
    return database;
  } catch (e) {
    console.log("error connecting to MongoDB");
    throw e;
  }
}

module.exports = connecetToDatabase;
