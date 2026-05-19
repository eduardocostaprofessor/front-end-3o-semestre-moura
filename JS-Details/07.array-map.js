const hobbies = [
    "Jogar Basquete",   //0
    "Conversar Muito",  //1
    "Ouvir Música",     //2
    "Jogar Vídeo Game", //3
    "Fazer Brownie",    //4
    "Cozinhar",         //5
    "Academia"          //6
];

// Array map é um método da classe array  que itera sobre o array retornando um novo array, compondo um novo resultado para cada índice antigo, veja:

const novosHobbies = hobbies.map((hobby) => {
    return `<p>${hobby}</p>`;
});

console.log(novosHobbies);



// 