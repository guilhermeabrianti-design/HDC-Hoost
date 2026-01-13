// SE (nota >= 7) ENTÃO
//   ESCREVA("Aprovado")
// SENÃO
//   ESCREVA("Reprovado")
// FIM SE

// let nota = 8;
// if (nota >= 7) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

// const n=5;
// if (n < 10){
//     console.log("5 Menor que 10");
// }

// const nome = "João";
// if (nome === "João"){
//     console.log("Olá João");
// }
// if (nome === "Maria"){
//     console.log("Olá Maria");
// }

// console.log(nome === "joão", nome === "maria");

// const cod = ["alice", "bob", "charlie", "diana"];

// for (let i = 0; i < cod.length; i++) {
//     console.log('O nome no índice ${i} é: ${cod[i]}');
// }

// const idade = 20;

// function verificarIdade(idade) {
//     console.log("Idade informada:", idade);
//     if (idade >= 18) {
//         console.log("Maior de idade");
//     } else {
//         console.log("Menor de idade");
//     }
// }

// verificarIdade(idade);

// const nomeCompleto = "gui";

// function nomeSaudação(nomeCompleto) {
//     if (nomeCompleto === "Ana Silva") {
//         console.log("Olá Ana Silva");
//     } else {
//         console.log("nome não identificado");
//     }    
// }

// nomeSaudação(nomeCompleto);

function podeDirigir(idade) {
    if (idade >= 18) {
        console.log('Pode dirigir');
    } else {
        console.log('Não pode dirigir');
    }
}

podeDirigir('20')
podeDirigir('16')