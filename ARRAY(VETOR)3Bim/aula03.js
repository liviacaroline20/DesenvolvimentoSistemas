let alunos = ['felipe', 'gabriel', 'klara', 'livia'];

alunos = alunos.sort(); 

for (let i = 0; i < alunos.length; i++){
    console.log('-' + alunos[i].toUpperCase()); 
}

if (alunos.indexOf('livia') != -1){
    console.log('achei vc!'); 
}
else {
    console.log('não achei vc!');
}

console.log(alunos.includes('klara'));