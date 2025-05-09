// Exercício 07: Faça uma função que receba o salário de um trabalhador e o empréstimo, verifique se o empréstimo é de até 20% do salário do trabalhador, se for, o empréstimo deve ser aprovado, caso contrário, deve ser rejeitado. 

function calcularEmprestimo(salario, emprestimo) {
    salario = 1000; 
    emprestimo = 150; 
    let porcentagemSalario = salario * 0.2; 

    if (emprestimo > porcentagemSalario) {
        console.log('O emprestimo foi negado.');
    }
    else { 
        console.log('O emprestimo foi aprovado.'); 
    }
}

calcularEmprestimo(1000, 700);