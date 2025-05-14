// 14. Faça um programa que calcule a média entre 3 notas se e somente se essas notas forem válidas.
//Uma nota é considerada válida se ela for maior ou igual a zero e menor ou igual a cem (0<= nota
//<=100).

let nota1 = 50; 
let nota2 = 65; 
let nota3 = 20; 

let media = (nota1 + nota2 + nota3) / 3; 

if(nota1 && nota2 && nota3 <= 0 || nota1 && nota2 && nota3 <= 100){
    console.log("ERRO. Essas notas não são validas.");
}

else{
    console.log('A media dessas notas será:' + media + 'pontos'); 
}