let nota1 = 70; 
let nota2 = 60;
let nota3 = 50; 



function verificarSituacaoAluno(nota1, nota2, nota3) {
  if (
    nota1 < 0 || nota1 > 100 ||
    nota2 < 0 || nota2 > 100 ||
    nota3 < 0 || nota3 > 100
  ) {
    console.log("Notas inválidas. Todas as notas devem estar entre 0 e 100.");
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;

  console.log("Média:", media.toFixed(2));

  if (media >= 70) {
    console.log("Situação: Aprovado");
  } else if (media < 40) {
    console.log("Situação: Reprovado");
  } else {
    console.log("Situação: Em recuperação");
  }
}