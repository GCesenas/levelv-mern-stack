const mongoose = require("mongoose");

const { Schema } = mongoose;

const dispenserSchema = new Schema({
  uso: Number,
  fecha: String,
  temp: Number,
});

module.exports = mongoose.model("ard_dispenser", dispenserSchema, "ard_dispenser");
