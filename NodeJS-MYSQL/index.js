const pool = require("./demo_db_connection");

pool.query("SELECT * FROM products", (error, result) => {
  if (error) throw error;
  console.log(`the result is: ${JSON.stringify(result)}`);
});

// create a table
// pool.query(
//   "CREATE TABLE costumers (name VARCHAR(255), address VARCHAR(255))",
//   (error, result) => {
//     if (error) throw error;
//     console.log(`the result is: ${JSON.stringify(result)}`);
//   }
// );

// insert records in costumers table
pool.query(
  "INSERT INTO costumers (name, address) VALUES ('Abdallah', 'Rawabi')",
  (error, result) => {
    if (error) throw error;
    console.log(`the result is: ${JSON.stringify(result)}`);
  }
);

//The Fields Object
pool.query("SELECT name FROM costumers", (error, result, fields) => {
  if (error) throw error;
  console.log(`the field is: ${JSON.stringify(fields)}`);
});

// Select With a Filter
pool.query(
  "SELECT * FROM costumers WHERE name = 'Abdallah' ",
  (error, result) => {
    if (error) throw error;
    console.log(`the result is: ${JSON.stringify(result)}`);
  }
);

//to jion
pool.query(
  "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);
/* some queries i learnt: 
ORDER BY > Sort the Result in dec/ace order
DELETE FROM costumers WHERE name etg > delete rows
DROP TABLE > Delete a Table
UPDATE >  update existing records in a table
LIMIT >  limit the number of records returned from the query
JOIN >  combine rows from two or more tables, based on a related column between them


*/
