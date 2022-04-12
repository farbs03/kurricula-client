const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.post("/login", (req, res) => {
  console.log(req.body)
  res.json({ token: "token123" });
});

// Have Node serve the files for our built React app
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});