// 16. Faça um programa que exiba os valores entre 1000 e 2000 que são divisíveis por 3 e por 5 mas não são divisíveis por 10. Em seguida, calcule e exiba a média desses valores.

let soma = 0; 
let cont = 0; 

for (let i = 1000; i <= 2000; i++){
    if (i % 3 === 0 && i % 5 === 0 && i % 10 !== 0){
        console.log(i); 
        soma += i;
        cont++;
    }
}
let media = soma / cont;
console.log(`A média dos valores é: ${media}`);