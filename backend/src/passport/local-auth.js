const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOne({ email: email });
      console.log(user);
      if (user) {
        return done(null, false, req.flash("signupMessage", "Este email ya ha sido usado en otra cuenta"));
      } else {
        const newUser = new User();
        newUser.nombre = req.body.nombre;
        newUser.apellidos = req.body.apellidos;
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        console.log(newUser);
        await newUser.save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, req.flash("signinMessage", "Usuario no encontrado"));
      }
      if (!user.comparePassword(password)) {
        return done(null, false, req.flash("signinMessage", "Contraseña Incorrecta"));
      }
      return done(null, user);
    }
  )
);

