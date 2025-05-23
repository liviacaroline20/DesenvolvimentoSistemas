// Questão 17

function precoCompra(preco){
    gorjeta = 0
    precoTotal = 0 
    if (preco){
        preco = preco
    }
    if(preco){
        gorjeta = preco * 0.10
    }
    if (preco){
        precoTotal = preco + gorjeta
    }
}
console.log("O preço da compra é: " + precoCompra(250)); 
console.log("O preço com as gorjetas foi: " + "R$" + gorjeta); 
console.log("O valor total da compra foi: " + "R$" + precoTotal); 