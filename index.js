const express = require("express");
const mongoose = require("mongoose");
const clat = require("dotenv");
const studentModel = require("./models/model");
const dotter = process.env;

// const cors = require("cors");
clat.config();
const app = express();
const con = mongoose.connection;
mongoose.connect(dotter.DATABASE_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
con
  .once("open", () => {
    console.log("Connected to database Successfully!!!");
  })
  .on("error", () => {
    console.log("Databse connection failed!!!");
  });

app.use(express.json());

app.listen(dotter.port, () => {
  console.log(`app is running on port ${process.env.port}`);
});
