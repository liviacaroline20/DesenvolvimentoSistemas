// 25. Faça um programa que leia o ano atual e o ano de nascimento de uma pessoa e em seguida exiba uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

let anoAtual = 2025;
let anoNascimento = 2008;
let idade;

idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Você pode votar este ano.");
} else {
  console.log("Você não pode votar este ano.");
}