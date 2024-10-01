const prompt = require('prompt-sync');
const entrada = prompt();

const { arrayBuffer } = require("stream/consumers");

const nomeCompleto = "Felipe lemos freitas";
const anoNascimento = 2005;
let anoAtual = 2024;
let idade = 19;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

anoAtual = anoAtual + 1;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " empreendedorismo");

console.log(`oi eu sou ${nomeCompleto} meu ano é ${anoNascimento} minha idade é ${idade}`)

const loginCerto = "Felipe";
const senhaCerto = 123;

console.log("-----------------------");
console.log("--AGÊNCIA DE VIAGENS--");
console.log("-----------------------");
console.log("Faça seu login");

var login = entrada("digite seu login: ");
var senha = entrada("digite sua senha: ");

while(login != loginCerto){
  console.log("login Incorreto");
  login = entrada("digite seu login novamente: ");
}

while(senha != senhaCerto ){
  console.log("login Incorreto");
  senha = entrada("digite sua senha novamente: ");
} 

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

var nomeComprador = entrada("qual é seu nome? ");

var idadeComprador = entrada("qual é a sua idade?");

if(idadeComprador < 18){

  console.log(`olá ${nomeComprador} ,se o senhor tiver acima de 18 anos poderá comprar o bilhete${idadeComprador} `);
  
}
if(idadeComprador >= 18){
  console.log(`olá senhor (a) ${nomeComprar}, qual será o seu detino, temos várias opções de viagens!`);
}