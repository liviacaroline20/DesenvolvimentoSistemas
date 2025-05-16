let bruto = 1000.00;
let ir;
let inss = bruto*0.10;
let sindicato = bruto*0.03;
let descontos;
let liquido;

if ( bruto <= 900){
    ir = bruto;
}
else if ( bruto <= 1500){
    ir = bruto *0.5
}
else if (bruto <= 2500){
    ir = bruto*0.1
}
else {
    ir = bruto * 0.2
}

descontos = ir + sindicato + inss;
liquido = bruto - descontos;

console.log(` Seu salario é: ${liquido} Reais`);






