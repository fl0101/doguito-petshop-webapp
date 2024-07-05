/**
 * Arquivo de rotas para gerenciamento de clientes.
 * Define as rotas relacionadas ao cadastro de clientes.
*/

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/cadastro.html'))
});

router.get('/cadastro-concluido', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/cadastro_concluido.html'))
})

module.exports = router;