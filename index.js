const express = require("express");
const mongoose = require("mongoose");
const clat = require("dotenv");
const studentModel = require("./models/model");
const dotter = process.env;

// const cors = require("cors");
clat.config();
const app = express();
mongoose.connect(dotter.DATABASE_URL);

app.use(express.json());

app.listen(dotter.port, () => {
  console.log(`app is running on port ${process.env.port}`);
});
