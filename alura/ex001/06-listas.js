console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
    

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


listaDeDestinos.push(`Curitiba`) // Adicionando um item na lista depois de ser declarada
console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);