// 18. Faça um programa que mostre a quantidade de divisores do número 1000 que existe no intervalo de 0 - 1000. Lembre-se que n é divisor de x, se o resto da divisão de n por x for 0.

let numero = 1000;
let cont = 0;

for ( let i = 1; i <= 1000; i++){
    if (numero % i === 0 ){
        cont ++;
    }
}
console.log( " a quantidade de numeros divisores de 1000 é: " + cont );
