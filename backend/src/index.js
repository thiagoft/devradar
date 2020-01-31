const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://devradar:devradar0926@cluster0-1gtkd.mongodb.net/devradar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors()); // cors() without parameter release the access from any place
app.use(express.json()); // setting up express to accepts json
app.use(routes);

app.listen(3333);
