// Opção 01: Média simples de duas notas 
// Opção 02: Média ponderada de 3 notas com pesos 2, 3 , 5 

function mediaSimples(nota1, nota2) {
    return (nota1 + nota2) / 2; 
}

function mediaPonderada(n1, n2, n3) {
    let m = (n1 * 2 + n2 * 3 + n3 * 5) / 10; 
    return m; 
} 

console.log(mediaSimples(60, 80)); 

// codigo

let opcao = 2 
let media;

switch(opcao){
   case 1: 
      media = mediaSimples(60, 70);
      console.log(`Média Simples: ${media} pontos`); 
      break; 
    case 2: 
      media = mediaPonderada(60, 90, 40);
      console.log(`Média Ponderada: ${media} pontos`); 
      break; 
    
    default: 
        console.log('Opção inválida');
        break;

}