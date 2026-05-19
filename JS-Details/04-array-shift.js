//            índices   0          1          2         3           4
let frutasCitricas = ["Limão", "Laranja", "Abacaxi", "Tangerina", "Acerola"];

// shift - remove o primeiro elemento e reorganiza os índices

console.log(frutasCitricas);

console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);

//remove o Limão
let frutaRemovida = frutasCitricas.shift();
console.log(frutasCitricas);
console.log(`Removemos a fruta: ${frutaRemovida}`);

console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);