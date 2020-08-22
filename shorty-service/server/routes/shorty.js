"use strict";

const routes = require("express").Router();
const validate = require("express-validation");

const ShortyValidations = require("../validation").Shorty;
const ShortyController = require("../controllers").Shorty;

// Shorty retrieve
routes.get(
  "/:slug",
  validate(ShortyValidations.retrieve),
  ShortyController.retrieve
);

// Shorty create
routes.post("/", validate(ShortyValidations.create), ShortyController.create);

module.exports = routes;
