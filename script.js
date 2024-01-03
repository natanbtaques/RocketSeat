n1 = Number(prompt("Digite o primeiro numero para as operações:"));
n2 = Number(prompt("Digite o segundo numero para as operações:"));

const sum = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = n1 / n2;
const rest = n1 % n2;

alert(`a soma deles é ${sum}`);
alert(`a subtração deles é ${sub}`);
alert(`a multiplicação deles é ${mult}`);
alert(`a divisão deles é ${div}`);
alert(`o resto da divisão deles é ${rest}`);

if (n1 == n2) {
  alert("Os numeros são Iguais");
} else {
  alert("Os Numeros são Diferentes");
}

if (sum % 2 == 0) {
  alert("O Resultado da soma é Par");
} else {
  alert("O Resultado da soma é impar");
}
