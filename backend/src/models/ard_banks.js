const mongoose = require("mongoose");

const { Schema } = mongoose;

const bankSchema = new Schema({
  cantidad: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ard_banks", bankSchema, "ard_bank");
