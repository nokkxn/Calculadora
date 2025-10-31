// Seleciona o input (onde aparece o resultado)
const display = document.getElementById('display');

// Seleciona todos os botões com número e operador
const botoes = document.querySelectorAll('.btn');

// Seleciona o container do histórico
const historico = document.getElementById('historico');

// Variável para armazenar o cálculo atual
let expressao = "";

// ==========================
// 1. CLICAR NOS BOTÕES NORMAIS
// ==========================
botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    let valor = botao.getAttribute('data-value');
    let mostrar = valor;

    // Substitui símbolos visuais
    if (valor === '*') mostrar = '×';
    if (valor === '/') mostrar = '÷';

    expressao += valor;
    display.value += mostrar;
  });
});

// ==========================
// 2. BOTÃO DE IGUAL (=)
// ==========================
document.getElementById('igual').addEventListener('click', () => {
  try {
    const resultado = eval(expressao);
    adicionarAoHistorico(display.value, resultado);
    display.value = resultado;
    expressao = resultado.toString();
  } catch (erro) {
    display.value = "Erro";
    expressao = "";
  }
});

// ==========================
// 3. BOTÃO DE LIMPAR (C)
// ==========================
document.getElementById('limpar').addEventListener('click', () => {
  expressao = "";
  display.value = "";
});

// ==========================
// 4. BOTÃO DE APAGAR (⌫)
// ==========================
document.getElementById('apagar').addEventListener('click', () => {
  expressao = expressao.slice(0, -1);
  display.value = display.value.slice(0, -1);
});

// ==========================
// 5. SUPORTE AO TECLADO
// ==========================
document.addEventListener('keydown', (event) => {
  const tecla = event.key;

  if (/[\d+\-*/.]/.test(tecla)) {
    expressao += tecla;
    display.value += (tecla === '*' ? '×' : tecla === '/' ? '÷' : tecla);
  }

  if (tecla === 'Enter') {
    try {
      const resultado = eval(expressao);
      adicionarAoHistorico(display.value, resultado);
      display.value = resultado;
      expressao = resultado.toString();
    } catch {
      display.value = "Erro";
      expressao = "";
    }
  }

  if (tecla === 'Backspace') {
    expressao = expressao.slice(0, -1);
    display.value = display.value.slice(0, -1);
  }

  if (tecla === 'Escape') {
    expressao = "";
    display.value = "";
  }
});

// ==========================
// 6. HISTÓRICO DE CÁLCULOS
// ==========================
function adicionarAoHistorico(expr, resultado) {
  const item = document.createElement('p');
  item.textContent = `${expr} = ${resultado}`;
  historico.prepend(item); // adiciona no topo
}

let trilho = document.getElementById ('trilho')
let body = document.querySelector ('body')

trilho.addEventListener ('click', vini)

function vini (){
    trilho.classList.toggle ('dark')
    body.classList.toggle ('dark')
}
