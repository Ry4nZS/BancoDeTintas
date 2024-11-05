// Alterna a visibilidade do dropdown ao clicar no ícone de engrenagem
document.querySelector('.gear-icon').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling; // Pega o próximo elemento (o dropdown)
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade
});

// Alterna a visibilidade do submenu de acessibilidade
document.querySelector('.dropdown_gear li a').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling; // Pega o próximo elemento (o submenu)
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade
    }
});


  function toggleContraste() {
    const body = document.body;
    body.classList.toggle("alto-contraste");
  }  

  // Variáveis para controlar o estado
let fontSize = 1; // Tamanho da fonte padrão

// Diminuir fonte
document.querySelector('.decrease-font').addEventListener('click', function(e) {
    e.preventDefault();
    fontSize = Math.max(0.8, fontSize - 0.2); // Diminui o tamanho da fonte (não pode ficar menor que 0.8em)
    document.body.style.fontSize = fontSize + 'em'; // Atualiza o tamanho da fonte
});

// Aumentar fonte
document.querySelector('.increase-font').addEventListener('click', function(e) {
    e.preventDefault();
    fontSize += 0.2; // Aumenta o tamanho da fonte
    document.body.style.fontSize = fontSize + 'em'; // Atualiza o tamanho da fonte
});

  
