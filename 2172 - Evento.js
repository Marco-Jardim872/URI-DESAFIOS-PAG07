var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let ele;
let num;
let exp;

while(num !== 0 && exp !==0){
    ele = dados.shift().split(" ");
    num = parseInt(ele.shift());
    exp = parseInt(ele.shift());
    let novoExp = num * exp;
    if(num !== 0 && exp !==0){
        console.log(novoExp);
    }
   
}