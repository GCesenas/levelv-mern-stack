const mongoose = require("mongoose");

const { Schema } = mongoose;

const amplistein_statsSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    tiempo_uso: Number
});

module.exports = mongoose.model("ard_amplistein_stats", amplistein_statsSchema);