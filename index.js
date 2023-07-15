const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const koneksi = require("./src/models/database");
const path = require("path");
const router = require("./src/router");
// const view = __dirname + "/views/";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// body parser
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

app.use(cors());
app.use(router);

// =======================
// app.get('/', (req, res) => {
//   res.sendFile(path.join(view + "home.html"));
// });
// =======================
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
// =======================
app.get("/", (req, res) => {
	res.render("./home");
});

app.get("/docs", (req, res) => {
	res.render("docs/documentation");
});
// =======================

// log server
app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
