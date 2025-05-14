let idade = 16; 

if (idade >= 5 && idade <= 7) {
    console.log('Infantil A'); 
}

else if ( idade >= 8 && idade <= 10) {
    console.log('Infantil B'); 
}

else if ( idade >= 11 && idade <= 13) {
    console.log('Juvenil A'); 
}

else if ( idade >= 14 && idade <= 17) {
    console.log('Juvenil B'); 
}

else if ( idade > 18 && idade < 120) {
    console.log('Adulto'); 
}

else if (idade < 0 || idade > 120){
    console.log('ERRO. esta idade não é aprovada.'); 
}

