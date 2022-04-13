const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path");
const { PrismaClient } = require('@prisma/client');
//const { register, login } = require("./auth")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const prisma = new PrismaClient(/*{ log: ['query', 'info']}*/)

//app.post("/register", register)
app.post("/register", (req, res) => {
  // pass to register
  //console.log(req.body)
  //res.json({ token: "token123" });
})

app.post("/login", async (req, res) => {
  // pass to login
  //console.log(req.body)

  //const val = await prisma.user.count()
  
  res.json({ banana: "token123" });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})