const sequelize = require("./sequelization");

sequelize
  .sync()
  .then(() => {
    console.log(" table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
