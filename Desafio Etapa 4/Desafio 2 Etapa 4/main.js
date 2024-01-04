alert("Parte 2 : ");
// item 1
alert("Hellow World");
// item 2
let n1 = Number(prompt("Insira o primeiro valor:"));
let n2 = Number(prompt("Insira o segundo valor:"));
const sum = n1 + n2;

alert(`A soma dos valores é ${sum}`);
// item 3 , 4 e 5
let item1 = true;

if (typeof item1 === "number") {
  alert("Isso é um número");
} else if (typeof item1 === "string") {
  alert("Isso é uma string");
} else if (typeof item1 === "boolean") {
  alert("Isso é um dado booleano");
}

// item 6, 7 e 8
const valor1 = 10;
const valor2 = 30;

const sub = valor1 - valor2;
const mult = valor1 * valor2;
const div = valor1 / valor2;

alert(`a subtração é ${sub}`);
alert(`a multiplicação é ${mult}`);
alert(`a divisão é ${div}`);

// item 9 e 10
let parOuImpar = prompt("Digite um número");

// Convertendo a entrada para um número
let numero = parseFloat(parOuImpar);

if (!isNaN(numero)) {
  if (numero % 2 == 0) {
    alert("O número é par");
  } else {
    alert("O número é ímpar");
  }
} else {
  alert("A entrada não é um número válido");
}
