const express = require("express");
const bodyParser = require("body-parser");
const koneksi = require("./config/database");
const router = require('./router');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(router);

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// =======================

app.get('/', (req, res) => {
	res.send('Membuat API');
});

// =======================

// log server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})


