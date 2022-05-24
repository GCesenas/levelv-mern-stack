const mongoose = require("mongoose");

const { Schema } = mongoose;

const productoSchema = new Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagen: String,
  status: String,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("productos", productoSchema);
