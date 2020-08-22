"use strict";

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeShorts = Array(500)
      .fill()
      .map(
        (element) =>
          (element = {
            slug: faker.random.word(),
            address: faker.internet.url(),
            createdAt: new Date(),
            updatedAt: new Date(),
          })
      );

    return queryInterface.bulkInsert("Shorts", [...fakeShorts]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Shorts", null, {});
  },
};
