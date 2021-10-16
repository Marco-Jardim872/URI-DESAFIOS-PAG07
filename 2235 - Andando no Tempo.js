var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let a = parseInt(dados.shift());
let b = parseInt(dados.shift());
let c = parseInt(dados.shift());

if(((a + b) == c) ||((a + c) == b) || ((b + c) == a) || (a == b) || (a == c) || (b == c)) {
    console.log("S");
}else{
    console.log("N");
}