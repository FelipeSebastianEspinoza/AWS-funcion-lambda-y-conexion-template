var mysql = require('mysql');

var con = mysql.createConnection({
  host: "database-2.cmb9xmxm2ece.sa-east-1.rds.amazonaws.com",
  user: "felipe",
  password: "felipeaws",
  database: "databaseaws"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});