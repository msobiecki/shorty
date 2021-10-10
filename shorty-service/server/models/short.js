'use strict';
module.exports = (sequelize, DataTypes) => {
  const Short = sequelize.define(
    'Short',
    {
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Short.associate = function () {
    // associations can be defined here
  };
  return Short;
};
