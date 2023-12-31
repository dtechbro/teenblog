const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./user");
// const adminRouter = require("./admin");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userRouter);
// app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("welcome to foodelo");
});

module.exports = app;