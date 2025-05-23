// questao 16 

// TA DANDO ERRO MAS NÃO SEI MAIS O QUE MUDAR

function salarioLiquido(salarioBruto){
    let desconto = 0; 
    if ( salarioBruto <= 1518.00){
        desconto = salarioBruto * 0.05
    }
    if (salarioBruto <= 2826.65){
        desconto = salarioBruto * 0.075
    }
    if (salarioBruto <= 3751.05){
        desconto = salarioBruto * 0.15
    }
    if (salario > 3751.05){
        desconto = salarioBruto * 0.275
    }
    let salarioLiquido = salarioBruto - desconto
}
console.log(salarioBruto("O salario foi: " + salarioBruto));
console.log(desconto("O desconto foi: " + desconto));
console.log(salarioLiquido("O salario liquido foi: " + salarioLiquido));
