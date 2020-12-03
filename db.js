var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "yourusername",
  password: "yourpassword"
});

function createDatabase (){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE dlihm", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
}


function createTable (){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
}


createDatabase();
createTable ();