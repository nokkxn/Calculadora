# 🧮 Calculadora JS — Projeto de Estudo

Uma calculadora moderna feita com **HTML**, **CSS** e **JavaScript puro**, com **modo claro/escuro**, **histórico de cálculos**, suporte a teclado e **interface responsiva**.

---

## 📁 Estrutura de Pastas

```
calculadora/
│
├── index.html      # Estrutura base da página
├── style.css       # Estilos visuais (modo claro/escuro)
└── script.js       # Lógica da calculadora e eventos
```

---

## ⚙️ Funcionalidades

✅ **Operações básicas:** soma, subtração, multiplicação e divisão  
✅ **Modo escuro e claro:** alternância suave entre temas  
✅ **Histórico de cálculos:** exibe as últimas expressões resolvidas  
✅ **Suporte ao teclado:** digite números e operadores direto no teclado  
✅ **Botões especiais:** limpar (C) e apagar (⌫)  
✅ **Interface responsiva:** se adapta a diferentes tamanhos de tela  

---

## 🧠 Como funciona

### 1. `index.html`
Cria a estrutura da calculadora:
- Um campo `<input>` que mostra o número ou resultado.
- Os botões com `data-value` (usados para identificar o valor digitado).
- O botão de tema (`.trilho`) para trocar o modo claro/escuro.

### 2. `style.css`
Responsável por toda a aparência:
- Define o layout da calculadora (grid de botões, cores, sombras, etc).
- Aplica transições suaves entre **modo claro e escuro**.
- Usa classes `.dark` no `<body>` para mudar a aparência global.

### 3. `script.js`
Contém a lógica do projeto:
- Captura o clique dos botões (`.btn`) e monta a expressão.
- Usa `eval()` para calcular o resultado (apenas fins didáticos).
- Limpa, apaga, atualiza o histórico e alterna o modo de cor.
- Implementa eventos de teclado (`keydown`).

---

## 🧩 Tecnologias usadas

| Tecnologia | Uso |
|-------------|-----|
| **HTML5** | Estrutura e semântica da calculadora |
| **CSS3** | Estilos, responsividade e animações |
| **JavaScript (ES6)** | Lógica e interatividade |
| **Flexbox/Grid** | Organização dos botões |
| **Modo Dark** | Implementado via toggle de classes no `body` |

---

## 🌗 Alternância de Tema

```js
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

trilho.addEventListener('click', () => {
  trilho.classList.toggle('dark');
  body.classList.toggle('dark');
});
```

Quando o usuário clica no trilho, a classe `dark` é adicionada/removida do `<body>`, e o CSS muda as cores automaticamente.

---

## 🧰 Como rodar o projeto

1. Baixe a pasta completa (`index.html`, `style.css`, `script.js`);
2. Abra o arquivo `index.html` no seu navegador;
3. Pronto! A calculadora funcionará localmente.

---

## 🚀 Melhorias futuras

- Adicionar tecla de **porcentagem (%)**
- Histórico permanente com **localStorage**
- Suporte a **teclas de parênteses e expoentes**
- Animação nas teclas ao pressionar
- Tema customizável (escolher cores)

---

## 👨‍💻 Autor

**Vinicius Lourenço Silva dos Santos**  
💼 Projeto criado como parte dos estudos de **Desenvolvimento Web (JavaScript)**  
📍 *Guarujá - SP, Brasil*
