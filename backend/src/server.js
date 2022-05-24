const express = require("express");
const path = require("path");
const engine = require("ejs-mate");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");

const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

// Almacen de sesiones

const store = new MongoDBStore({
  uri: "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.jxnfm.mongodb.net/arduino_db?retryWrites=true&w=majority",
  collection: "sessiones",
});

require("./database");
require("./passport/local-auth");

// Config

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

app.use(cors());

// middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 1 * 60 * 60 * 1000 },
    store: store,
    saveUninitialized: true,
    resave: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  app.locals.signinMessage = req.flash("signinMessage");
  app.locals.signupMessage = req.flash("signupMessage");
  app.locals.user = req.user;
  console.log(app.locals);
  next();
});

// Rutas
app.use("/api/", require("./routes/index"));

// Iniciar servidor
app.listen(app.get("port"), () => {
  console.log("Servidor en puerto:", app.get("port"));
});
