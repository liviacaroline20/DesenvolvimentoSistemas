// 16. Crie um array de números e use findIndex() para retornar o índice do primeiro número menor que 10.

let numeros = [2, 5, 7, 9]; 

let menornumero = numeros.findIndex(numeros => numeros < 10);

console.log(menornumero);
