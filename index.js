const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("The Blog Home"));

app.listen(port, () => console.log(`The server is listenning at port ${port}`));
