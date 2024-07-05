/**
 * Arquivo de conexão com o banco de dados
 * Define as variáveis de ambiente local para conexão
*/

require('dotenv').config(); // Importar o dotenv para carregar as variáveis de ambiente do .env

const { Sequelize } = require('sequelize');

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD) {
    throw new Error('Variáveis de ambiente não configuradas para a conexão com o banco de dados');
}

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost', // Usando variável de ambiente para o host ou usando localhost como padrão
    dialect: process.env.DB_DIALECT || 'mysql', // Usando variável de ambiente para o dialeto ou usando MySQL como padrão
});

module.exports = sequelize;