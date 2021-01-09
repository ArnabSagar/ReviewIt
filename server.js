const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

//movie-review-app
//  DB  Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));

// app.get("/", (req, res));
