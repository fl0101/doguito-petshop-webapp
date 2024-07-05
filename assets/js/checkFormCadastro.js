/**
 * Define as funções de validação dos campos de cadastro de produtos, como formatação dos campos e tratamento de erros.
*/

// Espera o DOM ser carregado para iniciar
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do formulário
    const form = document.getElementById('form');
    const nomeInput = document.getElementById('nome');
    const precoInput = document.getElementById('preco');
    const descricaoInput = document.getElementById('descricao');
    const categoriaInput = document.getElementById('categoria');
    const photoInput = document.getElementById('photo');
    const preview = document.getElementById('preview');
    const botao = document.getElementById('botao');

    // Adiciona máscara de dinheiro ao campo de preço
    precoInput.addEventListener('input', function() {
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

    // Adiciona classe de destaque ao campo obrigatório vazio ao perder o foco
    nomeInput.addEventListener('blur', function () {
        validaNome(this);
    });
        
    precoInput.addEventListener('blur', function () {
         validaPreco(this);
    });
        
    descricaoInput.addEventListener('blur', function () {
        validaDescricao(this);
    });
        
    descricaoInput.addEventListener('blur', function () {
        validaCategoria(this);
    });

    // Pré-visualização da imagem ao trocar
    photoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            preview.src = '';
            preview.style.display = 'none';
        }
        validaCampos();
    });

    // Valida todos os campos quando algum deles perder o foco
    nomeInput.addEventListener('blur', validaCampos);
    precoInput.addEventListener('blur', validaCampos);
    descricaoInput.addEventListener('blur', validaCampos);
    categoriaInput.addEventListener('blur', validaCampos);

    // Função para validar se os campos obrigatórios estão preenchidos
    function validaCampos() {
        const nomeValido = nomeInput.value.trim() !== '';
        const precoValido = precoInput.value.trim() !== '';
        const descricaoValida = descricaoInput.value.trim() !== '';
        const categoriaValida = categoriaInput.value.trim() !== '';

        if (nomeValido && precoValido && descricaoValida && categoriaValida) {
            botao.style.opacity = '1'; // Define opacidade normal quando os campos estão preenchidos
            botao.style.pointerEvents = 'auto'; // Permite eventos de clique no botão
        } else {
            botao.style.opacity = '0.7'; // Define opacidade menor quando os campos não estão preenchidos
            botao.style.pointerEvents = 'none'; // Desabilita eventos de clique no botão
        }
    }

    // Permitir a submissão do formulário apenas se todos os campos obrigatórios estiverem preenchidos
    form.addEventListener('submit', (event) => {
        if (!validaCampos()) {
            event.preventDefault();
        }
    });
});

document.getElementById('form').addEventListener('submit', function(event) {
    // Captura o valor do campo preço
    const precoInput = document.getElementById('preco');
    const valorFormatado = precoInput.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    precoInput.value = valorFormatado; // Atualiza o valor no input antes de enviar o formulário

});

function validaNome(input) {
    //Função para retornar mensagens de erros nos campos obrigatórios
    const mensagemErro = document.querySelector('#mensagem-erro-nome');
    const valorNome = input.value.trim();

    if (input.validity.valueMissing) {
        input.parentElement.classList.add('input-container--invalido');
    } else if (valorNome.length < 4 || valorNome.length > 50) {
        input.parentElement.classList.add('input-container--invalido');
    } else {
        input.parentElement.classList.remove('input-container--invalido');
        mensagemErro.textContent = '';
    }
};

function validaPreco(input) {
    const mensagemErro = document.querySelector('#mensagem-erro-preco');
    const preco = parseInt(input.value.replace(',', '.'));

    if (input.validity.valueMissing || preco <= 0 || isNaN(preco)) {
        input.parentElement.classList.add('input-container--invalido');
    } else {
        input.parentElement.classList.remove('input-container--invalido');
        mensagemErro.textContent = '';
    }
};

function validaDescricao(input) {
    const mensagemErro = document.querySelector('#mensagem-erro-preco');
    const descricao = input.value.trim();

    if (descricao.length === 0) {
        input.parentElement.classList.remove('input-container--invalido');
        mensagemErro.textContent = '';
    } else if (descricao.length < 10 || descricao.length > 500) {
        input.parentElement.classList.add('input-container--invalido');
    } else {
        input.parentElement.classList.remove('input-container--invalido');
        mensagemErro.textContent = '';
    }
};

function validaCategoria(input) {
    const mensagemErro = document.querySelector('#mensagem-erro-categoria');
    const categoria = input.value.trim();

    if (categoria === '') {
        input.parentElement.classList.add('input-container--invalido');
    } else {
        input.parentElement.classList.remove('input-container--invalido');
        mensagemErro.textContent = '';
    }
};