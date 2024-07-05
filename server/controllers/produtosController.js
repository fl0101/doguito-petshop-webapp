/**
 * Arquivo de funções de controladores de produtos.
 * Define as funções de cadastro, visualização, edição, busca e exclusão de produtos.
*/

const { Op } = require('sequelize');
const Produto = require('../models/Produto');
const path = require('path');

// Função para cadastrar um produto
const cadastrarProduto = async (req, res) => {
    const { nome, preco, descricao, categoria } = req.body;
    const precoNumerico = parseFloat(preco.replace(',', '.'));

    if (!req.file) {
        return res.status(400).json({ ok: false, error: 'validation', fieldName: 'Imagem', message: 'Imagem é obrigatória' });
    }

    const imgName = req.file.filename;

    console.log('Nome do arquivo da imagem:', imgName);

    try {
        if (nome.length <= 4) {
            return res.status(400).json({ ok: false, error: 'validation', fieldName: 'Nome', message: 'Nome deve ter pelo menos 4 caracteres' });
        }

        if (precoNumerico <= 0) {
            return res.status(400).json({ ok: false, error: 'validation', fieldName: 'Preço', message: 'Preço deve ser maior que zero' });
        }

        if (!['medicamentos', 'roupas', 'cama', 'limpeza', 'brinquedos', 'outros'].includes(categoria)) {
            return res.status(400).json({ ok: false, error: 'validation', fieldName: 'Categoria', message: 'Categoria inválida' });
        }

        const novoProduto = await Produto.create({
            nome,
            preco: precoNumerico,
            descricao,
            categoria,
            photo: imgName
        });

        console.log('Novo produto:', novoProduto);

        return res.status(201).json({ ok: true, novoProduto });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, error: 'server', message: 'Erro no servidor' });
    }
};

const listarProdutos = async (req, res, next) => {
    try {
        // Busca todos os produtos do banco de dados
        const produtos = await Produto.findAll();

        // Renderiza a página HTML com os dados dos produtos
        res.render('produtos', { produtos });  
    } catch (error) {
        // Em caso de erro, passe para o middleware de tratamento de erro
        next(error);
    }
};

async function buscarProdutos(req, res, next) {
    const { pesquisa } = req.query;

    try {
        // Busca produtos por nome no banco de dados
        const produtos = await Produto.findAll({
            where: {
                nome: { [Op.like]: `%${pesquisa}%` } // Usando operador LIKE para pesquisa parcial
            }
        });

        // Verifica se a requisição é feita via AJAX
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            res.status(200).json(produtos);
        } else {
            // Se não for AJAX, renderiza a página HTML com os resultados
            res.render('produtos', { produtos });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
}

const atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco, descricao, categoria, existingPhoto } = req.body;
        const img = req.file ? req.file.filename : null; // variável para captura da img

        // Verifica se todos os campos necessários foram fornecidos
        if (!nome || !preco || !descricao || !categoria) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Validações
        if (nome.length <= 4) {
            return res.status(400).json({ ok: false, error: 'validation', fieldName: 'Nome', message: 'Nome deve ter pelo menos 4 caracteres' });
        }

        if (parseFloat(preco) <= 0) {
            return res.status(400).json({ ok: false, error: 'validation', fieldName: 'Preço', message: 'Preço deve ser maior que zero' });
        }
        
        // Busque o produto
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        // Atualizar campos do produto
        produto.nome = nome;
        produto.preco = preco;
        produto.descricao = descricao;
        produto.categoria = categoria;

        // Atualizar campo img, se uma nova imagem foi enviada
        // let imgName = produto.photo;
        if (img) {
            produto.photo = img;
        } else if (existingPhoto) {
            produto.photo = existingPhoto;
        } else {
            produto.photo = produto.photo
        }

        // produto.photo = imgName;

        await produto.save();

        return res.status(200).json({ message: 'Produto atualizado com sucesso', produto });
    } catch (error) {
        console.error('Erro ao atualizar o produto:', error);
        return res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
};

const getProduto = async (id) => {
    try {
        const produto = await Produto.findByPk(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        return produto;
    } catch (error) {
        throw new Error(`Erro ao buscar o produto: ${error.message}`);
    }
};

const deletarProduto = async (req, res) => {
    try {
        const { id } = req.params;

        // Consulta o produto no banco de dados
        const produto = await Produto.findByPk(id);
        // Verifica se o produto existe
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        await produto.destroy();

        return res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar o produto: ', error);
        return res.status(500).json({ error: 'Erro ao deletar o produto' });
    }
}

module.exports = {
    cadastrarProduto,
    listarProdutos,
    buscarProdutos,
    atualizarProduto,
    getProduto,
    deletarProduto
};