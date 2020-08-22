"use strict";

const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const status = require("http-status");

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Config
const env = process.env.NODE_ENV || "development";
const config = require(`./server/config/config.json`)[env];

// Set all our routes
const routes = require("./server/routes");

// Set all our crone
require("./server/crones");

// Set up the express app
const app = express();

// CORS
app.use(cors());

// Log requests to the console.
if (env === "development") {
  app.use(logger("dev"));
}

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));

//  Connect all our routes to our application
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.set("apiDocPath", "/api-docs");
app.use("/api", routes);
app.set("apiPath", "/api");

// Serve root route
app.get("/", (req, res) => {
  res.status(status.OK).send({ message: config.welcome });
});

// Serve root otherwise
app.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = app;
