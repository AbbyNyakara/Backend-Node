const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//Establish database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "schooldb"
});

//verify the db connection

db.connect((err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Succesfully connected!")
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
