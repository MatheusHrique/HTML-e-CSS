// Obtém o campo de exibição e todos os botões
const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('button'));

// Adiciona um evento de clique a cada botão
buttons.map(button => {
  button.addEventListener('click', (e) => {
    // Se o botão pressionado for "=", calcula o resultado
    if (e.target.innerText === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erro!";
        setTimeout(() => display.value = '', 1000);
      }
    } 
    // Se não for o botão "=", adiciona o texto do botão ao campo de exibição
    else {
      display.value += e.target.innerText;
    }
  })
});

// Adiciona um evento de tecla pressionada para permitir a entrada de números e operadores do teclado
window.addEventListener('keydown', (e) => {
  // Se a tecla pressionada for um número ou um ponto, adiciona ao campo de exibição
  if ((e.key >= 0 && e.key <= 9) || e.key === '.') {
    display.value += e.key;
  } 
  // Se a tecla pressionada for um operador, adiciona ao campo de exibição com espaços em torno
  else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    display.value += ' ' + e.key + ' ';
  } 
  // Se a tecla pressionada for Enter, tenta avaliar o cálculo
  else if (e.key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Erro!";
      setTimeout(() => display.value = '', 1000);
    }
  } 
  // Se a tecla pressionada for Backspace, remove o último caractere do campo de exibição
  else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
});
