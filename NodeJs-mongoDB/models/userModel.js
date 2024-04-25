const { connecetToDatabase } = require("../db");

async function createUser(userData) {
  try {
    const database = await connecetToDatabase();
    const collection = database.collection("users");
    const result = await collection.insertOne(userData);
    return result.ops[0]; // ops stands for operations , and here we return an array that accessed the first element which is the nwely user created
  } catch (error) {
    console.log("Error creating user " + error);
    throw error;
  }
}

module.exports = { createUser };
