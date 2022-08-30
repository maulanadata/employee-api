const mysql = require("mysql");


async function koneksi() {
  const db = mysql.createConnection({
    host: "remotemysql.com",
    user: "2KlNMOkc3b",
    password: "0aNdhRWoyk",
    database: "2KlNMOkc3b",
    multipleStatements: true
  })

  db.connect((err) => {    // The server is either down
    if(err) {                   // or restarting (takes a while sometimes).
      console.log('Gagal mengoneksikan database:', err);
      setTimeout(koneksi, 2000); // We introduce a delay before attempting to reconnect,
    }else{
      console.log('koneksi baru')
    }                            // to avoid a hot loop, and to allow our node script to
  });                            // process asynchronous requests in the meantime.
                                 // If you're also serving http, display a 503 error.
  db.on('error', (err) => {
    console.log('Database error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      koneksi();                                  // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

module.exports = { koneksi };