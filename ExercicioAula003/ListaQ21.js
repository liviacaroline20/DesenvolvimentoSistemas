// 21. Faça um programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2-
// Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

let bruto = 1000.00; 
let ir;
let inss = salarioBruto * 0.10;
let sindicato = salarioBruto * 0.03;
let descontos;
let liquido;

if(bruto <= 900){
    ir = salarioBruto;
}

else if(bruto <= 1500){
    ir = bruto * 0.5
}

else if(salarioBruto <= 2500){
    ir = bruto * 0.1 
}

else{
    ir = bruto * 0.2;
}

descontos = ir + sindicato + inss;
liquido = bruto - descontos; 

console.log(`Seu salario liquido é R$${liquido}`);
