const arrowList = document.querySelector('.arrow-list');
const arrows = arrowList.querySelectorAll('.arrow');
let currentIndex = 0;

// Oculta todos os arrows, exceto o primeiro
arrows.forEach((arrow, index) => {
    if (index !== 0) {
        arrow.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'Control') { // Verifica se a tecla pressionada é 'Ctrl'
        // Verifica se há próximo arrow para mostrar
        if (currentIndex < arrows.length - 1) {
            arrows[currentIndex].style.display = 'none'; // Esconde o arrow atual
            currentIndex++; // Atualiza o índice para o próximo arrow
            arrows[currentIndex].style.display = 'block'; // Mostra o próximo arrow
            arrowList.scrollTop = arrows[currentIndex].offsetTop - (arrowList.offsetHeight / 2); // Rola a lista para que o arrow esteja no meio
        }
    }
});
