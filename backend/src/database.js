const mongoose = require("mongoose");
const { mongodb } = require("./keys");

mongoose.set("useFindAndModify", false);
mongoose
  .connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Conectado con MongoDB"))
  .catch((err) => console.log(err));
