// Faça um programa que leia 3 notas, calcule a média aritmética se e somente se, são notas válidas.
//Em seguida, exiba a situação do aluno (aprovado se média maior ou igual a 70 ou reprovado
//caso contrário). Média Situação, Média >= 70 Aprovado Média < 40 Reprovado, Média < 70 e Média >= 70 em recuperação.
 
let nota01 = 20;
let nota02 = 40;
let nota03 = 60;
let nota04 = 80;

media = (nota01 + nota02 + nota03 + nota04 ) / 4 ; 

if (media >= 60) {
    console.log(" A nota é:", media, "o aluno esta aprovado!");
    
}
if (media <40) {
    console.log(" A nota é:", media, "o aluno esta reprovado!");
    
}
if (media >= 40 && media <=60) {
    console.log(" A nota é:", media, "o aluno esta em recuperação!");
}



