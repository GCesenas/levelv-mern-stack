const router = require("express").Router();
const passport = require("passport");

const userController = require("../controllers/userController");
const productoController = require("../controllers/productoController");
const protosController = require("../controllers/protosController");

const URLFront = "http://localhost:3000";
//const URLFront = "https://levelv.herokuapp.com";

// Productos Routes

router.get("/productos", productoController.getProductos);
router.get("/producto/:id?", productoController.buscar);

// User Routes

router.get("/dataUser", userController.showAllData);
router.get("/buscarUser/:id?", userController.busqueda);
router.get("/addcarrito/:uid?/:pid?/:nom?/:desc?/:pre?/:img?", userController.addCarrito);
router.get("/delcarrito/:uid?/:pid?", userController.delCarrito);
router.get("/getarticulos/:id?", userController.getArticulos);

// Prototipos Routes

router.get("/amplisteinUso", protosController.getUsage);
router.get("/amplisteinPlumilla", protosController.getPlumillas);
router.get("/stingerCar", protosController.getCar);
router.get("/smartPot", protosController.getSmartPot);
router.get("/ardBank", protosController.getBank);
router.get("/dispenser", protosController.getDispenser);

// Auth Routes

router.post("/signup", function (req, res, next) {
  passport.authenticate("local-signup", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect(URLFront + "/registro/err");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect(URLFront + "/dashboard/" + user.id);
    });
  })(req, res, next);
});

router.post("/signin", function (req, res, next) {
  passport.authenticate("local-signin", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect(URLFront + "/login/err");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect(URLFront + "/menu/" + user.id);
    });
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect(URLFront + "/");
});

router.get(URLFront + "/compras", isAuthenticated, (req, res, next) => {
  res.render(URLFront + "/compras");
});

router.get("/menu/:id", isAuthenticated, (req, res, next) => {
  res.render(URLFront + "/menu/:id");
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(URLFront + "/Login");
}

module.exports = router;
