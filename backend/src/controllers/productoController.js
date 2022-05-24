const Producto = require("../models/producto");

var productoController = {
  getProductos: (req, res) => {
    var consulta = Producto.find({});

    consulta.exec((err, data) => {
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

  buscar: (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
      return res.status(404).send({
        status: "Error",
        mensaje: "No se ingreso ID",
      });
    }

    Producto.findById(id, (err, data) => {
      if (err || !id) {
        return res.status(404).send({
          status: "Error:",
          mensaje: "Producto Inexistente",
        });
      }
      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  findProd: async (id) => {
    const result = await Producto.findById(id).exec();
    console.log(result);
    return result;
  },
};

module.exports = productoController;
