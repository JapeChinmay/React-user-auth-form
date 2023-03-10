const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    Firstname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    note: { type: String },
  },
  { collection: "user-data" }
);

const model = mongoose.model("Userdata", User);

module.exports = model;
