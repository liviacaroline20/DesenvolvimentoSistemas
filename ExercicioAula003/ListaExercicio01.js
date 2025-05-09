// Exercício 01 - Faça um programa que leia 3 números inteiros e apresente o menor deles.

// Exercício 02 - Faça um programa que leia um número e mostre se ele é par ou ímpar. 

// Exercício 03 - Faça um programa que leia 3 números e mostre se o valor de sua soma é par ou ímpar. 

// Exercício 04 - Faça um programa que leia um número e mostre se ele é positivo ou negativo. 

let n1 = 60 ;
let n2 = 70 ; 
let n3 = 80 ;  
let menor; 
 
if(n1 < n2) {
    menor = n1; 
}
else{
   menor = n2; 
}
if(n3 < menor){
    menor = n3;
}
console.log(`O menor número é ${menor}`); 