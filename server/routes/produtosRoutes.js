/**
 * Arquivo de rotas para gerenciamento de produtos.
 * Define as rotas relacionadas ao cadastro, exibição e exclusão de produtos.
*/

const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const path = require('path');
const upload = require('../../config/multer');

// Rota para exibir o formulário de cadastro de produto
router.get('/cadastro-produto', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/cadastro_produto.html'));
});

// Rota para cadastrar um novo produto
router.post('/cadastro-produto', upload.single('photo'), produtosController.cadastrarProduto);

router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/dashboard.html'))
});

// Rota para exibir o motivo do erro no cadastro do produto
router.get('/erro-cadastro-produto', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/erro_cadastro_produto.html'))
});

// Rota para exibir a confirmação de cadastro do produto
router.get('/cadastro-produto-concluido', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/cadastro_produto_concluido.html'))
});

// Rota para listar todos os produtos
router.get('/', produtosController.listarProdutos); 

// Rota para buscar produtos pelo nome
router.get('/buscar', produtosController.buscarProdutos);

// Rota para deletar um produto específico
router.delete('/deletar-produto/:id', produtosController.deletarProduto);

router.get('/atualizar-produto/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await produtosController.getProduto(id);
        res.render('atualizar_produto', { produto });
    } catch (error) {
        console.error('Erro ao buscar o produto:', error);
        res.status(500).json({ error: 'Erro ao buscar o produto' });
    }
});

router.put('/atualizar-produto/:id', upload.single('photo'), produtosController.atualizarProduto);

router.get('/atualizacao-produto-concluido', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/atualizacao_produto_concluido.html'));
});

router.get('/erro-atualizacao-produto', (req, res) => {
    res.render('erro_atualizacao_produto');
});

module.exports = router;