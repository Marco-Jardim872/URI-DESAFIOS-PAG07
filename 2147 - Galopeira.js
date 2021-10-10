var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
while(num){
    let pal = (dados.shift().trim()).split("");
    let car = pal.length;
    if(car >= 9 && car <= 10000){
    let tempo = parseFloat(0.01 * car).toFixed(2);
    console.log(tempo);
    }
   num--;
}