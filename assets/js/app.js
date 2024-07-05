/**
 * Define as funções de pesquisa, visualização de produtos e tratamento de erros.
*/

// Selecionando elementos do DOM
const campoPesquisa = document.getElementById('campoPesquisa');
const resultados = document.querySelector('.resultados');
const divProdutos = document.querySelector('.visivel');
const formPesquisa = document.getElementById('formPesquisa');

// Função para realizar a pesquisa
async function realizarPesquisa(termoPesquisa) {
    try {
        const response = await fetch(`/produtos/buscar?pesquisa=${encodeURIComponent(termoPesquisa)}`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }

        const produtos = await response.json();
        resultados.innerHTML = '';

        produtos.forEach(produto => {
            const divProduto = document.createElement('div');
            divProduto.classList.add('produto');
            divProduto.innerHTML = `
                <div>
                    <img class="produto__imagem" src="/img/produtos/Porsche.jpg" alt="${produto.nome}">
                </div>
                <div class="informacoes-produto">
                    <h3 class="produto__nome">${produto.nome}</h3>
                    <p class="produto__preco">R$ ${(produto.preco / 100).toFixed(2)}</p>
                    <p class="produto__descricao">${produto.descricao}</p>
                    <div class="botoes-editar-excluir">
                        <button class="botao-simples botao-simples--editar" onclick="editarProduto('${produto.id}')">Editar</button>
                        <button class="botao-simples botao-simples--excluir" onclick="excluirProduto('${produto.id}')">Excluir</button>
                    </div>
                </div>
            `;
            resultados.appendChild(divProduto);
        });

        if (termoPesquisa) {
            resultados.classList.remove('escondido');
            divProdutos.classList.add('escondido');
        } else {
            resultados.classList.add('escondido');
            divProdutos.classList.remove('escondido');
        }
    } catch (error) {
        console.error('Erro ao realizar pesquisa:', error);
    }
}

// Evento de input para o campo de pesquisa
campoPesquisa.addEventListener('input', function () {
    const termoPesquisa = campoPesquisa.value.trim();
    realizarPesquisa(termoPesquisa); // Chama a função de pesquisa ao digitar no campo
});

// Evento de submit para o formulário de pesquisa
formPesquisa.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
    const termoPesquisa = campoPesquisa.value.trim();
    realizarPesquisa(termoPesquisa); // Chama a função de pesquisa ao enviar o formulário
    window.history.pushState({}, '', `/produtos/buscar?pesquisa=${encodeURIComponent(termoPesquisa)}`);
});

// Evento popstate para detectar mudanças no histórico do navegador
window.addEventListener('popstate', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const termoPesquisa = urlParams.get('pesquisa') || '';
    realizarPesquisa(termoPesquisa); // Chama a função de pesquisa ao detectar mudanças no histórico
});

// Inicialização da pesquisa ao carregar a página
window.addEventListener('load', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const termoPesquisa = urlParams.get('pesquisa') || '';

    if (window.location.pathname === '/produtos/buscar') {
        window.location.replace('/produtos');
    } else {
        const campoPesquisa = document.querySelector('#campoPesquisa');
        if (campoPesquisa) {
            campoPesquisa.value = termoPesquisa;
        }
        if (typeof realizarPesquisa === 'function') {
            realizarPesquisa(termoPesquisa);
        } else {
            console.error(error);
        }
    }
});