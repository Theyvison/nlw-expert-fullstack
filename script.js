const perguntas = [
  {
    pergunta: "O que significa o acrônimo 'DOM' em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Manipulation",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual destes não é um tipo de dado em JavaScript?",
    respostas: ["String", "Boolean", "Function"],
    correta: 2,
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: ["===", "=", "=="],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a função utilizada para imprimir algo no console em JavaScript?",
    respostas: ["print()", "log()", "console.log()"],
    correta: 2,
  },
  {
    pergunta:
      "Qual é a maneira correta de declarar uma variável com escopo de bloco em JavaScript?",
    respostas: ["var", "variable", "let"],
    correta: 2,
  },
  {
    pergunta:
      "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
    respostas: [
      "/* Este é um comentário */",
      "# Este é um comentário",
      "// Este é um comentário",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual destas é uma estrutura de controle de fluxo em JavaScript?",
    respostas: ["loop-for", "if-else", "switch-case"],
    correta: 1,
  },
  {
    pergunta:
      "Qual método é utilizado para remover o último elemento de um array em JavaScript?",
    respostas: ["removeLast()", "deleteLast()", "pop()"],
    correta: 2,
  },
  {
    pergunta: "Qual é a função de parseInt() em JavaScript?",
    respostas: [
      "Converter uma string em um número inteiro",
      "Arredondar um número",
      "Converter uma string em um número decimal",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o símbolo de concatenação de strings em JavaScript?",
    respostas: ["~", "&", "+"],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz");

const template = document.querySelector("template");

const corretas = new Set();

const totalDePerguntas = perguntas.length;

const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);

    dt.querySelector("span").textContent = resposta;

    dt.querySelector("input").setAttribute(
      "name",
      `pergunta-${perguntas.indexOf(item)}`
    );

    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }
  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
