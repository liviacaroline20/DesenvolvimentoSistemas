// 7. Crie duas funções: quadrado(n): retorna o quadrado de n. somaQuadrados(a, b): retorna a soma dos quadrados de a e b, utilizando a função quadrado.

function quadrado(n) {
    return n * n;
}
function somaQuadrados(a, b) {
    return quadrado(a) + quadrado (b); 
}
const resultado = somaQuadrados(3,4);
console.log("A soma dos quadrados é" , resultado); 