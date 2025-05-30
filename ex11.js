// 11. Faça um programa que leia números inteiros digitados pelo usuário até que seja digitado um número negativo. Conte quantos números foram digitados e exiba esse valor na tela.

let cont = 0;
        do {
            n = prompt(" digite um numero: ")
            if ( n > 0 ){
                cont ++
            }

        } while ( n > 0 )
        document.writeln(`<h1>palavra: ${cont}</h1>`)