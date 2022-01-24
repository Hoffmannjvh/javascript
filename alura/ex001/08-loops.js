console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false
let temPassagemComprada = false
const destino = "Rio de Janeiro"

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
while (contador <3) {
    if (listaDeDestinos [contador] == destino) {
        destinoExistente = true
        break
    }
    contador += 1
}

console.log("Destino existe: ", destinoExistente)

if (podeComprar && destinoExistente) {
    console.log("Boa viagem!")
}else {
    console.log("Desculpe, tivemos um erro!")
}

for(let i = 0 ; i < 3; i++) {
    if (listaDeDestinos [i] == destino) {
        destinoExistente = true
        
    }
    
}