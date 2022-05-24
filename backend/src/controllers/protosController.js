const PlumillasAmplistein = require("../models/ard_amplistein");
const UsoAmplistein = require("../models/amplistein_stats");
const ArdBank = require("../models/ard_banks");
const SmartPot = require("../models/smartPot");
const StingerCar = require("../models/car");
const Dispenser = require("../models/dispenser");

var protosController = {
  
  getUsage: (req, res) => {
    var consultaUso = UsoAmplistein.find({}).sort({ fecha: -1 }).limit(1);

    consultaUso.exec((err, data) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Error al ejecutar la consulta",
        });
      }

      if (!data) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se encontraron registros",
        });
      }

      if (data == null) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Consulta vacía",
        });
      }

      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  getPlumillas: (req, res) => {
    PlumillasAmplistein.find((err, data) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Error al ejecutar la consulta",
        });
      }

      if (!data) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se encontraron registros",
        });
      }

      if (data === null) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Consulta vacía",
        });
      }

      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  getBank: (req, res) => {
    var query = ArdBank.find({});

    query.exec((err, data) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Error al ejecutar la consulta",
        });
      }

      if (!data) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se encontraron registros",
        });
      }

      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  getSmartPot: (req, res) => {
    var query = SmartPot.find({});

    query.exec((err, data) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Error al ejecutar la consulta",
        });
      }

      if (!data) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se encontraron registros",
          data,
        });
      }

      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  getCar: (req, res) => {
    var query = StingerCar.find({});

    query.exec((err, data) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Error al ejecutar la consulta",
        });
      }

      if (!data) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se encontraron registros",
        });
      }

      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  getDispenser: (req, res) => {
    var query = Dispenser.find({});

    query.exec((err, data) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Error al ejecutar la consulta",
        });
      }

      if (!data) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se encontraron registros",
        });
      }

      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },
};

module.exports = protosController;
