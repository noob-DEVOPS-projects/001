const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

app.get("/", (req,res) => {res.send("TEST ENDPOINT")})

//event loop for server
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
  });