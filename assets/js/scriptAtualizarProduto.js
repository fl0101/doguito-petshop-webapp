/**
 * Define as funções de cadastro, edição, exclusão de produtos e tratamento de erros.
*/

document.addEventListener('DOMContentLoaded', function () {
    // Função para formatar preço com simple-mask-money
    const formatarPreco = (input) => {
        SimpleMaskMoney.setMask(input, {
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.'
        });
    };

    // Captura do ID do Produto diretamente da URL
    const urlParts = window.location.pathname.split('/');
    const idProdutoParam = urlParts[urlParts.length - 1];

    if (!idProdutoParam) {
        console.error('ID do produto não encontrado na URL');
        return;
    }

    const precoInput = document.getElementById('preco');
    formatarPreco(precoInput);

    // Formatação REGEX
    precoInput.addEventListener('input', function () {
        let valor = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        valor = (valor / 100).toFixed(2); // Divide por 100 para tratar como valor monetário e fixa 2 casas decimais

        // Separa a parte inteira da parte decimal
        let [parteInteira, parteDecimal] = valor.split('.');

        // Adiciona o separador de milhares à parte inteira usando uma expressão regular
        parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Formatação final: junta a parte inteira, vírgula e parte decimal
        valor = parteInteira + ',' + parteDecimal;

        this.value = valor; // Atualiza o valor no campo
    });

    // Obter os dados do produto do elemento <script> com tipo application/json
    const produtoDataElement = document.getElementById('produto-data');
    if (produtoDataElement) {
        try {
            const produto = JSON.parse(produtoDataElement.textContent);
            document.getElementById('nome').value = produto.nome;
            precoInput.value = produto.preco;
            document.getElementById('descricao').value = produto.descricao;
            document.getElementById('categoria').value = produto.categoria;

            // Formata o campo preço ao carregar a página
            formatarPreco(precoInput);
            
        } catch (error) {
            console.error('Erro ao analisar os dados do produto:', error);
        }
    }

    // Configura o formulário para atualização do produto
    const formProduto = document.getElementById('form');
    if (formProduto) {
        formProduto.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(formProduto); // Usa FormData diretamente do formulário

            try {
                const response = await fetch(`/produtos/atualizar-produto/${idProdutoParam}`, {
                    method: 'PUT',
                    body: formData,
                });

                const data = await response.json();

                if (response.ok) {
                    // Redireciona para uma página de sucesso ou qualquer outra ação após a atualização bem-sucedida
                    window.location.href = '/produtos/atualizacao-produto-concluido';
                } else {
                    // Trate os erros de acordo com a resposta do servidor
                    window.location.href = `/produtos/erro-atualizacao-produto?error=${encodeURIComponent(data.error)}&fieldName=${encodeURIComponent(data.fieldName)}`;
                }
            } catch (error) {
                console.error('Erro:', error);
                // Redireciona para uma página de erro geral em caso de falha na requisição
                window.location.href = `/produtos/erro-atualizacao-produto?error=server&fieldName=Erro no servidor`;
            }
        });
    }

    // Exibe mensagem de erro, se houver
    const mensagemErro = document.querySelector('.cadastro-cartao__mensagem-erro');
    const params = new URLSearchParams(window.location.search);
    const errorType = params.get('error');
    const fieldName = params.get('fieldName');

    if (mensagemErro) {
        mensagemErro.textContent = getFieldName(errorType, fieldName);
    }

    // Adiciona o ID do produto ao botão 'Tente novamente'
    const botao = document.getElementById('botao');
    if (botao) {
        botao.href = `/produtos/atualizar-produto/${idProdutoParam}`;
    }

    function getFieldName(errorType, fieldName) {
        switch (errorType) {
            case 'validation':
                return `${fieldName} inválido`;
            case 'server':
                return 'Erro no servidor';
            default:
                return 'Erro desconhecido';
        }
    }

    // Atualiza a pré-visualização da imagem ao selecionar um novo arquivo
    const photoInput = document.getElementById('photo');
    if (photoInput) {
        photoInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgPreview = document.getElementById('preview');
                    if (imgPreview) {
                        imgPreview.src = e.target.result;
                        imgPreview.style.display = 'block';
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

