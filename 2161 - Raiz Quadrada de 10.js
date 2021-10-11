var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let x = 0;

for(let i = 0; i < num; i++){
    x += 6;
    x = (1/x);
}
x += 3;
console.log(x.toFixed(10));