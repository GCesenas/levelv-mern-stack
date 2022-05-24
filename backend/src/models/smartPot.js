const mongoose = require("mongoose");

const { Schema } = mongoose;

const smartPot = new Schema({
    temperatura: Number,
    humedad: Number,
    nivel_agua: Number
});

module.exports = mongoose.model("ard_plant", smartPot, "ard_plant");