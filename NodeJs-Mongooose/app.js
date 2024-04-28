const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());

app.use(userRoutes);

mongoose
  .connect(
    "mongodb+srv://AbdallahDereia:JLiq00ZXmUOuNl4v@cluster0.7ok67.mongodb.net/NodeJs_Course?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(5500);
  })
  .catch((error) => {
    console.error(error);
  });
