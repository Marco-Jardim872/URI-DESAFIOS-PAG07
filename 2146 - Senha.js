var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let num = parseInt(dados.shift());
    if(num >= 1001 && num <= 9999){
        let senha = num - 1;
        console.log(senha);
    }
}