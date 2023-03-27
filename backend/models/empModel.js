const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  ssn: { type: String, required: true, unique: true },
  name: { type: String },
  age: { type: Number },
  email: { type: String },
});

module.exports = mongoose.model("employee", empSchema);
