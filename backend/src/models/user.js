const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const { Schema } = mongoose;

const userSchema = new Schema({
  nombre: String,
  apellidos: String,
  email: String,
  password: String,
  articulos: { type: [], default: [] },
  date : { type: Date, default: Date.now }
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, (bcrypt.genSaltSync10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("usuarios", userSchema);
