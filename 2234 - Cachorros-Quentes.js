var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let numTotal = parseInt(dados.shift());
let parTotal = parseInt(dados.shift());
let media = parseFloat(numTotal/parTotal).toFixed(2);

console.log(media);