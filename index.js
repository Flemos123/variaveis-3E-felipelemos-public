const { arrayBuffer } = require("stream/consumers");

const nomeCompleto = "Felipe lemos freitas";
const anoNascimento = 2005;
let anoAtual = 2024;
let idade = 19;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

anoAtual = anoAtual + 1;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " empreendedorismo");

console.log(`oi eu sou ${nomeCompleto} meu ano é ${anoNascimento} minha idade é ${idade}`)

const listaDeViagens = new Array(
  ` Estados Unidos`,
  `Egito`,
  `turquia`,
  `japão`,
  `mexico`
);
console.log(listaDeViagens);

console.log(listaDeViagens[4]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,1);
console.log(listaDeViagens);

const idadeComprador = 24;

if(idadeComprador < 18){
  console.log("Infelizmente você não pode comprar se for menor de idade, as nossas passagens")
}
if(idadeComprador >= 18){
  console.log("otima noticia você pode comprar o bilhete com 18 ou mais");
}