'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('produtos', 'photo', {
      type: Sequelize.STRING, // Tipo de dado STRING
      allowNull: true, // Permite valores nulos (ajuste conforme necessário)
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('produtos', 'photo');
  }
};