let alunos = []; 

// Inserindo elementos no último índice
alunos.push('Ruan');
alunos.push('Jão Henrique');
alunos.push('Cibelly');
console.log(alunos);

// Removendo elementos no último índice
alunos.pop();
console.log(alunos); 

// Inserindo elementos no primeiro índice 
alunos.unshift('Dandara');
alunos.unshift('Maria Helena');
console.log(alunos); 

// Removendo elementos no primeiro índice 
alunos.shift();
console.log(alunos); 

// Tamanho do array 
console.log('Tamanho do array: ' + alunos.length); 

// Livre
alunos.push('Klara');
alunos.unshift('Felipin'); 

console.log('Antes: ' + alunos);

console.log(alunos.reverse()); 

