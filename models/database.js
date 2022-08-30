const mysql = require("mysql");

const koneksi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ujian_nodejs",
  multipleStatements: true
})

// const koneksi = mysql.createConnection({
// 	host: "remotemysql.com",
// 	user: "2KlNMOkc3b",
// 	password: "0aNdhRWoyk",
// 	database: "2KlNMOkc3b",
//   multipleStatements: true
// })

koneksi.connect((err) => {
  if (err) throw err;
  console.log("database terkoneksi");
})

module.exports = koneksi;
