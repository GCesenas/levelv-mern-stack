const mongoose = require("mongoose");

const { Schema } = mongoose;

const ard_car = new Schema({
  RPM: Number,
  Velocidad: Number,
});

module.exports = mongoose.model("ard_car", ard_car, "ard_car");
