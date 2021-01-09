const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const items = require("./routes/api/items");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Database configuration
const db = require("./config/keys");
