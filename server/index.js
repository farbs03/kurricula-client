const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post("/login", (req, res) => {
  console.log(req.body)
  res.json({ token: "token123" });
});

// All other GET requests not handled before will return our React app
/*app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});*/

// Have Node serve the files for our built React app
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});