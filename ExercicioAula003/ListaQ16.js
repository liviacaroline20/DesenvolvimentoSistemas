// Faça um programa que leia 3 notas, calcule a média aritmética se e somente se, são notas válidas.
//Em seguida, exiba a situação do aluno (aprovado se média maior ou igual a 70 ou reprovado
//caso contrário). Média Situação, Média >= 70 Aprovado Média < 40 Reprovado, Média < 70 e Média >= 70 em recuperação.

let nota1 = 70;
let nota2 = 40; 
let nota3 = 70;
let = media;

 if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    Console.log("Todas as notas devem estar entre 0 e 10. Tente novamente.");
 } else {
    media = (nota1 + nota2 + nota3) / 3;

if (media >= 70) {
    console.log("Média: %.2f - Você foi Aprovado!", media);
} else if (media < 40) {
    console.log("Média: %.2f - Você foi Reprovado.", media);
} else {
    console.log("Média: %.2f - Você está em Recuperação.", media);
   }
}