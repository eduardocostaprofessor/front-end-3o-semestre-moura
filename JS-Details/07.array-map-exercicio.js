// Criar um array com 10 números.
const numeros = [
    50,
    200,
    99,
    200,
    150,
    30,
    7,  
    80,
    900,
    274
];
// rodar o map multiplicando o valor de cada item por 2
const dobro = numeros.map((n)=>{
    return n * 2; 
});

// exibir o array modificado no final com o console log
console.log(dobro);
