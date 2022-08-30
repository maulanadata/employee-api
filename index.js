const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const koneksi = require("./models/database");
const path = require('path');
const router = require('./router');
// const view = __dirname + "/views/";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(router);
app.use(cors());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// =======================
// app.get('/', (req, res) => {
//   res.sendFile(path.join(view + "home.html"));
// });
// =======================

app.set('view engine', 'ejs');
// =======================
app.get('/docs', (req, res) => {
  res.render('docs/index');
});
// =======================


// log server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})

