// 04. Crie um array chamado nomes com os seguintes nomes: ['Ana', 'Carlos', 'Fernanda', 'João']
// - Localize o índice do nome 'Fernanda' e remova-o do array. 

const nomes = ['Ana', 'Carlos', 'Fernanda', 'João'];
const indiceAna = nomes.indexOf('Fernanda');
if (indiceAna !== -1) {
    nomes.splice(indiceAna, 1); 
}