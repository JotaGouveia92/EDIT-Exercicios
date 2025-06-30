// Exercicio 01
// Desafio: Inverter uma String
// Enunciado:
// Cria uma função chamada inverterString que recebe uma string como argumento e retorna essa string invertida.
// Desafio Extra:
// Valida se o valor passado é mesmo uma string. Se não for, retorna "Input inválido".

function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado = resultado + str[i];
  }
  return resultado;
}

console.log(inverterString("Isaura"));

// ------------------

// Exercicio 02

// Receber uma string como parâmetro
// Transformar tudo em minúsculas para ignorar diferenças de minúsculas.

function PalinChecker(str) {
  let text = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(text);
}

PalinChecker("João");

// ------------------

// Exercicio 03

// Contador de vogais:
// Cria uma função que recebe uma string e retorna quantas vogais ela tem.

let resultado = "";
let letterChecker = "aeiou";

function countingWords(str) {
  str = str.toLowerCase();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let resultado = letterChecker.includes(str[i]);
    counter += resultado;
  }
  return counter;
}

// Exercicio 04

// Cria uma função que recebe um array e retorna outro com os elementos invertidos.

function inverterArray(arr) {
  let novoArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    novoArray.push(arr[i]);
  }

  return novoArray;
}
