"use strict";

const status = require("http-status");

const Short = require("../models").Short;

module.exports = {
  async retrieve(req, res) {
    try {
      const short = await Short.findOne({
        where: {
          slug: req.params.slug,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (short)
        return res.status(status.PERMANENT_REDIRECT).redirect(short.address);
      throw {
        status: status.NOT_FOUND,
        message: "SHORTY_RETRIEVE_SLUG_NOT_EXIST_ERROR",
      };
    } catch (err) {
      return res.status(err.status || status.INTERNAL_SERVER_ERROR).send({
        error: true,
        message: err.message || "SHORTY_RETRIEVE_INTERNAL_SERVER_ERROR",
        stack: err.stack,
      });
    }
  },
  async create(req, res) {
    try {
      const short = await Short.findOne({
        where: {
          slug: req.body.slug,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (!short) {
        const short = await Short.create({
          slug: req.body.slug,
          address: req.body.address,
        });
        if (short) {
          return res
            .status(status.OK)
            .send({ message: "SHORTY_CREATE_SUCCESS" });
        }
      }
      throw {
        status: status.BAD_REQUEST,
        message: "SHORTY_CREATE_SLUG_EXIST_ERROR",
      };
    } catch (err) {
      return res.status(err.status || status.INTERNAL_SERVER_ERROR).send({
        error: true,
        message: err.message || "SHORTY_CREATE_INTERNAL_SERVER_ERROR",
        stack: err.stack,
      });
    }
  },
};
