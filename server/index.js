const express = require('express');
const path = require('path');
const produtosRoutes = require('./routes/produtosRoutes') // Importa as rotas dos produtos
const ejs = require('ejs');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para o Express lidar com JSON nas requisições
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', '../src/view'); // Diretórios dos arquivos .ejs

// Configurar o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// Rota para servir arquivos JavaScript privados
app.get('/js/:filename', (req, res) => {
    const filename = req.params.filename;
    const jsPath = path.join(__dirname, '../assets/js', filename);
    res.sendFile(jsPath);
})

app.use('/produtos', produtosRoutes); // Define as rotas relacionadas aos produtos

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
