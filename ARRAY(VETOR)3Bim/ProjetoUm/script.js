let array = [];

console.log("Tipo do meu array:" + typeof(array));

function adicionarNumero(){
    let input = document.querySelector('#numero');
    let n = parseInt(input.value); 
    // alert(n);
    let exibirArray = document.querySelector
    ('#exibir-array');

    // se N for não numérico, mostrará um alert e encerrará a função
    if(isNaN(n)) {
        alert('Digite um número válido!');
        return; 
    }

    array.push(n); 

    // limpar o campo de entrada
    input.value = ''; 

    console.log(array);
    exibirArray.innerHTML = `Array: ${array} <br/>Tamanho do array: ${array.length}`;  
}