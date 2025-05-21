// 10. Implemente uma função que receba outra função como parâmetro (callback) e a execute.

function executar(funcao){
    funcao();
}

executar(function() {
    console.log("Executando a Função!");
})