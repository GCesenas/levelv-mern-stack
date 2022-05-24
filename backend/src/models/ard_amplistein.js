const mongoose = require("mongoose");

const { Schema } = mongoose;

const amplistein_picksSchema = new Schema({
  cantidad: Number
});

module.exports = mongoose.model("ard_amplisteins", amplistein_picksSchema, "ard_amplistein");