const express = require("express");

const log = console.log();
const app = express();
const path = require("path");

const port = 3001;

// app.get("/", (req, res) => res.send("Hello World!"));
app.get("/", (req, res) =>
	res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
