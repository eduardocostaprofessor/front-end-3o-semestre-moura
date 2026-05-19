// const pares = [2, 4, 6, 8, 10];
// const [x,y, ...numeros] = pares
// console.log(x);
// console.log(y);
// console.log(numeros);

// console.clear();
// const camisaPolo = {
// descricao: 'Polo',
// preco: 49.99,
// desconto: 5,
// fornecedor: 'Lacoste'
// }
// const { descricao, ...restoProps } = camisaPolo
// console.log(descricao);
// console.log(restoProps);

console.clear();
// const pares = [2,4,6,8,10];
// const impares = [1,3,5,7,9];
// const parImpar = [...pares, ...impares];
// console.log(parImpar);


const funcionario = {
nome: 'Joana Dark',
idade: 200,
profissao: 'Bruxa das Antigas'
}
const funcionarioModerno = {...funcionario, profissao: 'Encantadora'}
console.log(funcionarioModerno);