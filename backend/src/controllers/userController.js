const User = require("../models/user");

var userController = {
  showAllData: (req, res) => {
    var consulta = User.find({});

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
          mensaje: "No se encotraron registros",
        });
      }

      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  busqueda: (req, res) => {
    var userid = req.params.id;

    if (!userid || userid == null) {
      return res.status(404).send({
        status: "Error",
        mensaje: "No se ingreso ID",
      });
    }

    User.findById(userid, (err, data) => {
      if (err || !userid) {
        return res.status(404).send({
          status: "Error:",
          mensaje: "Usuario Inexistente",
        });
      }
      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  getArticulos: (req, res) => {
    var userid = req.params.id;

    if (!userid || userid == null) {
      return res.status(404).send({
        status: "Error",
        mensaje: "No se ingreso ID",
      });
    }

    User.findById(userid, "articulos", (err, data) => {
      if (err || !userid) {
        return res.status(404).send({
          status: "Error",
          mensaje: "Usuario Inexistente",
        });
      }
      return res.status(200).send({
        status: "Success",
        data,
      });
    });
  },

  addCarrito: (req, res) => {
    var idUser = req.params.uid;

    var idProd = req.params.pid;
    var nombre = req.params.nom;
    var descripcion = req.params.desc;
    var precio = req.params.pre;

    var prod = [[idProd, nombre, descripcion, precio]];

    var query = { _id: idUser };

    if (!idUser || idUser == null) {
      return res.status(404).send({
        status: "Error",
        mensaje: "No se ingreso ID de usuario",
      });
    }

    if (!idProd || idProd == null) {
      return res.status(404).send({
        status: "Error",
        mensaje: "No se ingreso ID de producto",
      });
    }

    User.findOneAndUpdate(query, { $push: { articulos: prod } }, (err, data) => {
      if (err || !idProd) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se pudo añadir al carrito",
        });
      }
      return res.status(200).send({
        status: "Success",
        mensaje: "Artículo agregado al carrito",
        data,
      });
    });
  },

  delCarrito: (req, res) => {
    var idUser = req.params.uid;
    var idProd = req.params.pid;

    var query = { _id: idUser };

    if (!idUser || idUser == null) {
      return res.status(404).send({
        status: "Error",
        mensaje: "No se ingreso ID de usuario",
      });
    }

    if (!idProd || idProd == null) {
      return res.status(404).send({
        status: "Error",
        mensaje: "No se ingreso ID de producto",
      });
    }

    User.findOneAndUpdate(query, { $pop: { articulos: 1 } }, (err, data) => {
      if (err || !idProd) {
        return res.status(404).send({
          status: "Error",
          mensaje: "No se pudo eliminar del carrito",
        });
      }
      return res.status(200).send({
        status: "Success",
        mensaje: "Artículo eliminado del carrito",
        data,
      });
    });
  },
};

module.exports = userController;
