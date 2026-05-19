let frutasVermelhas = new Array();
let frutasCitricas = ["Limão", "Laranja", "Abacaxi", "Tangerina", "Acerola"];



frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Amora");
frutasVermelhas.push("Cereja");

// console.log(frutasCitricas);
console.log(frutasVermelhas);
const frutaRemovida = frutasVermelhas.pop();//retira o último elemento do array
console.log(frutasVermelhas);

console.log(`${frutaRemovida} foi removida da cesta de frutas`);

