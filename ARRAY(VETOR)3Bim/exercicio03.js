// 03. Dado o array: let frutas = ['maçã', 'banana', 'laranja', 'uva'];
// - Crie um laço de repetição para exibir cada fruta no console em minúsculo (toLowerCase()).

let frutas = ['maçã', 'banana', 'laranja', 'uva'];

frutas = frutas.sort();
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i].toLowerCase()); 
}