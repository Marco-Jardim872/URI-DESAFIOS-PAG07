var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
if(num >= 17){
    let intMen = num/Math.log(num);
    let intMai = 1.25506 * intMen;
    let arr = [];
    arr.push(intMen.toFixed(1));
    arr.push(intMai.toFixed(1));

    console.log(arr.join(" "));
}