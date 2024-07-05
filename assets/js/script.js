/**
 * Arquivo de funções para gerenciamento de produtos.
 * Define as funções de cadastro, edição, exclusão de produtos tratamento de erros.
*/

document.addEventListener('DOMContentLoaded', function () {
    const mensagemErro = document.querySelector('.cadastro-cartao__mensagem-erro');
    const params = new URLSearchParams(window.location.search); //obtém parâmetros da URL como 'error' e 'fildName'
    const errorType = params.get('error');
    const fieldName = params.get('fieldName');
    const formProduto = document.getElementById('form');

    function getFieldName(errorType, fieldName) { //recebe o tipo de erro e nome do campo
        switch (errorType) {
            case 'validation': //se o tipo do erro for 'validation'
                return `${fieldName} inválido`;
            case 'server': //se o tipo do erro for 'server'
                return 'Erro no servidor';
            default:
                return 'Erro desconhecido';  // erro não identificado
        }
    }

    if (mensagemErro) {
        mensagemErro.textContent = getFieldName(errorType, fieldName);
    }

    if (formProduto) {
        formProduto.addEventListener('submit', async function(event) {
            event.preventDefault();

            const formData = new FormData(formProduto); // Cria um FormData a partir do formulário

            try {
                const response = await fetch('/produtos/cadastro-produto', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                console.log(data);

                if (data.ok) {
                    window.location.href = '/produtos/cadastro-produto-concluido';
                } else {
                    window.location.href = `/produtos/erro-cadastro-produto?error=${encodeURIComponent(data.error)}&fieldName=${encodeURIComponent(data.fieldName)}`;
                }
            } catch (error) {
                console.error('Erro:', error);
                window.location.href = '/produtos/erro-cadastro-produto?error=server&fieldName=Erro no servidor';
            }
        });
    }
});

function editarProduto (id) { 
    window.location.href = `/produtos/atualizar-produto/${id}`;
}

// Função para excluir produto
function excluirProduto(id) {
    // Exibe uma confirmação antes de excluir o produto
    if (confirm('Deseja realmente excluir este produto?')) {
        // Envia uma requisição DELETE para excluir o produto
        fetch(`/produtos/deletar-produto/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // Recarrega a página para atualizar a lista de produtos após a exclusão
                window.location.reload();
            } else {
                // Exibe um erro caso ocorra algum problema ao excluir o produto
                console.error('Erro ao excluir o produto');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }
}