const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")
const { register, login } = require("./auth")

const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.post("/register", register)
app.post("/login", login)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})