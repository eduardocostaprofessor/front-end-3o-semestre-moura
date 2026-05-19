const hobbies = [
    "Jogar Basquete", 
    "Conversar Muito", 
    "Ouvir Música", 
    "Jogar Vídeo Game",
    "Fazer Brownie",
    "Cozinhar",
    "Academia"
];



hobbies.forEach(
    // função de Callback
    // função anônima
    function (hobby) {
        console.log(hobby);
    }
);

// função convercional no js
function teste(x, y) {
    return x + y
}