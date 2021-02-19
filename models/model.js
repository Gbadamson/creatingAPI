const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Course: {
    type: String,
    required: true,
  },
  Picture: {
    type: String,
    required: true,
  },
});
const studentModel = mongoose.model("studentModel", studentsSchema);

module.exports = studentModel;

//mongodb+srv://gbadamson:<password>@cluster0.vhynm.mongodb.net/test
//mongodb+srv://gbadamson:<password>@cluster0.vhynm.mongodb.net/<dbname>?retryWrites=true&w=majority
