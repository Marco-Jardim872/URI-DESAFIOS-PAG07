var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = dados.shift();
let val = (1 + Math.sqrt(5))/2;
let val2 = (1 - Math.sqrt(5))/2;
let fib = ((Math.pow(val,num)) - (Math.pow(val2,num)))/Math.sqrt(5);

if(num > 0 && num <= 50){
    console.log(fib.toFixed(1));
}
