

function anoNovo(minutos) {
    let segundos = minutos * 60;
    for(let i = segundos ; i >= 0; i--) {
        if (segundos > 5) {
            console.log(i);
            
        } else if (segundos <= 5 && segundos > 0) {
            console.log(segundos);
        } else {
            console.log("Feliz Ano Novo!");
        }
    }
}
