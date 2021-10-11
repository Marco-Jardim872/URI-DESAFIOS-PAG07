var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('');

console.log(dados.length > 81 && dados.length < 502 ? "NO": "YES");
