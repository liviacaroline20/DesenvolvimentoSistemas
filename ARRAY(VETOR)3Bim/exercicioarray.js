let frutas = ['Maça', 'Banana', 'Laranja']; 

let indice = frutas.indexOf('Banana');

// Se o índice retornado for diferente de -1, mude, através do índice, para 'Uva"

if(indice !== -1) {
   // frutas[indice] = 'Uva'; 
   frutas.splice(indice, 1); // para remover a banana 
    frutas.unshift('Bergamota'); // unshift coloca no inicio
    frutas.push('Tangerina');  // push coloca no final
}

console.log(frutas); 