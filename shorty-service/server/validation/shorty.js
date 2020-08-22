"use strict";

const Joi = require("joi");

module.exports = {
  retrieve: {},
  create: {
    body: {
      slug: Joi.string().required(),
      address: Joi.string().required().uri(),
    },
  },
};
