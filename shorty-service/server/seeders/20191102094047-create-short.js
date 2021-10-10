'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface) => {
    const fakeShorts = Array(500)
      .fill()
      .map(() => ({
        slug: faker.random.word(),
        address: faker.internet.url(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

    return queryInterface.bulkInsert('Shorts', [...fakeShorts]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Shorts', null, {});
  },
};
