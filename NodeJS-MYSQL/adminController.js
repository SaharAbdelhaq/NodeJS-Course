// i added this file just insure i understand the sequelization sessions content!
const product = require("./productModel");

exports.addProduct = () => {
  product
    .create({
      title: "title1",
      price: "33$",
      description: "dodo",
    })
    .then(() => {
      console.log(" table created successfully!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

exports.getProducts = () => {
  product
    .findAll()
    .then((products) => {
      console.log(products);
    })
    .catch((error) => {
      console.log(error);
    });
};
