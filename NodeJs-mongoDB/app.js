const express = require("express");
const userRoutes = require("./routes/userRoutes");
const { mongoConnect } = require("./db");

const app = express();
app.use(express.json());

app.use(userRoutes);

const PORT = 5500;

mongoConnect((client) => {
  app.listen(PORT);
});
