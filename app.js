const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//Establish database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "schooldb",
});

//make the app connection 
app.post('/api/student/add', (req, res) => {
  //key has to match to the db column name
  let details = {
    name: req.body.name,
    course: req.body.course,
    fee: req.body.fee
  };

  let sqlQuery = "INSERT INTO students SET ?";
  db.query(sqlQuery, details, (error) => {
    if(error) {
      res.send({status: false, message: "Student creation failed"})
    } else {
      res.send({status:true, message:"Student creation succesful"})
    }
  });
});

//verify the db connection
db.connect((err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Succesfully connected!")
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
