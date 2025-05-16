//24. Laranjas custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de laranjas compradas, calcule e escreva o custo total da compra. 

let qntLarajas = 40;
let valorLaranja;
let totPagar;

if (qntLarajas < 12) {
    valorLaranja = 1.30;
}
else {
    valorLaranja = 1;
}

totPagar = qntLarajas * valorLaranja;

console.log(`Total a pagar: R$ ${totPagar}`);
