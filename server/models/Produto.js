const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');

const Produto = sequelize.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Produto;