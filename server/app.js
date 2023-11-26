const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path')
const cors = require("cors");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");
const bookmarkRoute = require("./routes/bookmarkRoute");
const cookieParser = require("cookie-parser");

// config.
// #GNEWS = "e7de534700ec6f93ba2c69c2c0caf64f";
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
// routes
app.use("/auth", routes);
app.use("/articles", bookmarkRoute);
// Handle other routes by serving the index.html file
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


// Connect Mongodb
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected MONGODB");
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
