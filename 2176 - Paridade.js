var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let mensagemS = (dados.shift().split("")).map((value) => parseInt(value));
let count = 0;

mensagemS.forEach((value)=>{
    value == 1 ? count++ : count;
});
count % 2 === 0 ? mensagemS.push("0"): mensagemS.push("1");

console.log(mensagemS.join(""));