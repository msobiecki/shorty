"use strict";

const status = require("http-status");
const validate = require("express-validation");
const routes = require("express").Router();
const env = process.env.NODE_ENV || "development";

// Api shorty route
const Shorty = require("./shorty");

// Api warehouse route
routes.use("/shorty", Shorty);

// Api otherwise route
routes.get("*", (req, res) => {
  res.redirect("/");
});

// Error handler
routes.use((err, req, res, next) => {
  // specific for validation errors
  if (err instanceof validate.ValidationError)
    return res.status(status.BAD_REQUEST).send({
      error: true,
      message: "SHORTY_VALIDATION_FORMAT_ERROR",
      errors: err.errors,
    });

  // other type of errors, it *might* also be a Runtime Error
  // example handling
  if (env === "production") {
    return res.status(status.BAD_REQUEST).send({
      error: true,
      message: "SHORTY_BAD_REQUEST",
      stack: err.stack,
    });
  } else {
    return res.status(status.SERVICE_UNAVAILABLE).send({
      error: true,
      message: "SHORTY_SERVICE_UNAVAILABLE",
      stack: err.stack,
    });
  }
});

module.exports = routes;
