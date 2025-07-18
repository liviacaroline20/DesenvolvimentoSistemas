let nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

// 01 Verifique se o nome 'Carlos' está na lista e, se estiver, substitua por 'Caio'. includes()
let indiceCarlos = nomes.indexOf('Carlos');

if(indiceCarlos != -1) {
    nomes[indiceCarlos] = 'Caio'; 
}

// 02 Depois, remova o nome 'Ana' do array. splice()
let indiceAna = nomes.indexOf('Ana'); 
if(indiceAna != -1){
    nomes.splice(indiceAna, 1); // splice remove 
}

// 03 Mostrar o array final 
console.log(nomes);
