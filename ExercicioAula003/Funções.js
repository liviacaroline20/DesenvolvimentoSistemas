// Funções, é o reaproveitamento de código

// Função do tipo PROCEDIMENTO 
function somar() {
    console.log(5 + 9);
}

somar(); 

function subtrair(n1, n2){
    console.log("Resultado da subtração: " + (n1 - n2)); 
}
subtrair(9, 2);
subtrair(19, 9);
subtrair(50, 45);

// Função do tipo FUNÇÃO
function multiplicar(n1, n2) {
    return n1 * n2; 
}

console.log(multiplicar(2, 3));  
