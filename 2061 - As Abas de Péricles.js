var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = dados.shift().split(" ");
let N = parseInt(num.shift());
    for(let ele of dados){
        if(ele.includes("fechou")){
            N = (N  + 1);
        }else if(ele.includes("clicou")){
            N = (N - 1);
        }
        
    }
console.log(N);