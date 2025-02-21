// variáveis
let fatiaQueijo = 50; // 50g, cada fatia 
let fatiaPresunto = 50; 
let hamburguer = 100;

// entrada 
let sanduichesAFazer = 5;

// processamento
let quiloQueijo = (sanduichesAFazer * fatiaQueijo * 2) / 1000; 
let quiloPresunto = (sanduichesAFazer * fatiaPresunto) / 1000;
let quiloHamburguer = (sanduichesAFazer * hamburguer) / 1000;

// saída 
console.log("\t*** LANCHONETE ***");
console.log("Para " + sanduichesAFazer + " sanduiches é necessário: ");
console.log("-" + quiloQueijo + "kg de queijo");
console.log("-" + quiloPresunto + "kg de presunto");
console.log("-" + quiloHamburguer + "kg de hamburguer"); 


