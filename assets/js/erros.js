document.addEventListener('DOMContentLoaded', function () {
    const categoriaInput = document.getElementById('categoria');
    const photoInput = document.getElementById('photo');
    const categoriaLabel = document.querySelector('label[for="categoria"]');
    const photoLabel = document.querySelector('label[for="photo"]');

    // Função para remover o asterisco vermelho de categoria
    function removeAsteriscoCategoria() {
        const asterisco = categoriaLabel.querySelector('.required');
        if (asterisco) {
            categoriaLabel.removeChild(asterisco);
        }
    }

    // Função para remover o asterisco vermelho de imagem
    function removeAsteriscoImagem() {
        const asterisco = photoLabel.querySelector('.required');
        if (asterisco) {
            photoLabel.removeChild(asterisco);
        }
    }

    // Verifica se uma categoria foi selecionada e remove o asterisco vermelho
    categoriaInput.addEventListener('change', function() {
        if (this.value !== '') {
            removeAsteriscoCategoria();
        }
    });

    // Verifica se uma imagem foi anexada e remove o asterisco vermelho
    photoInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            removeAsteriscoImagem();
        }
    });
});