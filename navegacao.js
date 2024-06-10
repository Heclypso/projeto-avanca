// Obtém todas as seções
  var sections = document.querySelectorAll('section');
  // Define a seção atual como a primeira
  var currentSection = 0;

  // Função para ocultar todas as seções, exceto a atual
  function hideSections() {
    sections.forEach(function(section, index) {
      if (index !== currentSection) {
        section.style.display = 'none';
      }
    });
  }

  // Função para exibir a próxima seção
  function showNextSection() {
    if (currentSection < sections.length - 1) {
      currentSection++;
      hideSections();
      sections[currentSection].style.display = 'block';
    }
  }

  // Função para exibir a seção anterior
  function showPreviousSection() {
    if (currentSection > 0) {
      currentSection--;
      hideSections();
      sections[currentSection].style.display = 'block';
    }
  }

  // Evento de tecla pressionada
  document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é a seta para a direita
    if (event.key === 'ArrowRight') {
      showNextSection(); // Exibe a próxima seção
    }
    // Verifica se a tecla pressionada é a seta para a esquerda
    else if (event.key === 'ArrowLeft') {
      showPreviousSection(); // Exibe a seção anterior
    }
  });

  // Inicia ocultando todas as seções, exceto a primeira
  hideSections();
  sections[currentSection].style.display = 'block';